import * as fs from 'node:fs';
import * as https from 'node:https';
import * as Database from 'better-sqlite3';

var SCOURT_URL: string = "https://efamily.scourt.go.kr";
var WHJSEARCH_URL: string = "/webhanja/whjsearch";
var WHJCSS_URL: string = "/webhanja/whjcss";
var WHJCSSIMG_URL: string = "/webhanja/whjfontimg";
var WEBIME_URL: string = "/webhanja/whjime";
var KXRD: number = 0x2EFF;

interface HanjaData {
    cd: string, //unicode
    ex: number, //?
    type: string, //0,2,A,F
    rad_id: number, //radical number
    stroke: number, //stroke
    totstroke: number, //total stroke
    em: number, //?
    in: string, //inmyeonghun
    dic: string, //dichun
    isin: number, //1: personal
    ineum: string, //personal reading
}

const getBody: (url: string) => Promise<string> = async (url: string) => {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            var out = '';
            res.on('data', (chunk) => {
                out += chunk;
            });
            res.on('end', () => {
                resolve(out);
            });
        })
    });
}
const getBuff: (url: string) => Promise<Buffer> = async (url: string) => {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            var out: Buffer = Buffer.from([]);
            res.on('data', (chunk) => {
                out = Buffer.concat([out, chunk]);
            });
            res.on('end', () => {
                resolve(out);
            });
        })
    });
}

const LSBR_URL = (rad_id: number) => {
    let url = new URL(SCOURT_URL);
    url.pathname = WHJSEARCH_URL;
    url.searchParams.append('mode', 'listStrokeByRadical');
    url.searchParams.append('rad_id', rad_id.toString());
    url.searchParams.append('ext', '1');
    return url;
};
const LUBRS_URL = (rad_id: number, stroke: number) => {
    let url = new URL(SCOURT_URL);
    url.pathname = WHJSEARCH_URL;
    url.searchParams.append('mode', 'listUnicodeByRadicalStroke');
    url.searchParams.append('rad_id', rad_id.toString());
    url.searchParams.append('stroke', stroke.toString());
    url.searchParams.append('ext', '1');
    return url;
}
const LUBRS_IMG = (rad_id: number, stroke: number, idx: number) => {
    let url = new URL(SCOURT_URL);
    url.pathname = WHJCSSIMG_URL;
    url.searchParams.append('mode', 'listUnicodeByRadicalStroke');
    url.searchParams.append('rad_id', rad_id.toString());
    url.searchParams.append('stroke', stroke.toString());
    url.searchParams.append('ext', '1');
    url.searchParams.append('pgmode', '1');
    url.searchParams.append('pgno', idx.toString());
    url.searchParams.append('pgsize', '1');
    return url;
}
const listStrokeByRadical = async (rad_id: number) => {
    const reqURL = LSBR_URL(rad_id);
    var json: Array<HanjaData> = await getBody(reqURL.href).then((x) => {return JSON.parse(x)});
    return json;
};
const listUnicodeByRadicalStroke = async (rad_id: number, stroke: number) => {
    const reqURL = LUBRS_URL(rad_id, stroke);
    var json: Array<HanjaData> = await getBody(reqURL.href).then((x) => {return JSON.parse(x)});
    return json;
};
const img_ListUnicodeByRadicalStroke = async (rad_id: number, stroke: number, idx: number) => {
    const reqURL = LUBRS_IMG(rad_id, stroke, idx);
    var k: Buffer = await getBuff(reqURL.href).then((x) => {return x});
    return k;
}

async function __main__() {
    var i: number = 1;
    process.on('SIGINT', (signal) => {
        console.log(`Received ${signal}. Suspended.`);
        fs.writeFileSync(`status.log`, i.toString());
        process.exit(2);
    });
    if (fs.existsSync(`status.log`)) {
        const q = fs.readFileSync(`status.log`, 'utf-8');
        if (typeof(q) === `string` && q.startsWith(`done`)) {
            i = 215;
        } else if (typeof(q) === `string`) {
            i = parseInt(q);
            if (isNaN(i)) {
                i = 1;
            }
        } else {
            i = 1;
        }
    }
    if (!fs.existsSync(`../json`)) fs.mkdirSync(`../json`);
    if (!fs.existsSync(`../img`)) fs.mkdirSync(`../img`);
    if (i === 215) console.log(`Fetch job has been done before.`);
    for (i; i <= 214; i++) {
        console.log(`Radical ${i}: ${String.fromCodePoint(KXRD + i)}`);
        let LSBR = await listStrokeByRadical(i);
        for (var x of LSBR) {
            let LUBRS = await listUnicodeByRadicalStroke(i, x['stroke']);
            const path: string = `../json/` + String.fromCodePoint(KXRD + i) + `${x['stroke'].toString().padStart(2, '0')}.json`;
            fs.writeFileSync(path, JSON.stringify(LUBRS, null, '    '));
            for (var j = 0; j < LUBRS.length; j++) {
                const code: number = parseInt(LUBRS[j]['cd'], 16);
                const dir: string = `../img/${LUBRS[j]['cd'].slice(0, 3)}`;
                const path: string = `../img/${LUBRS[j]['cd'].slice(0, 3)}/${LUBRS[j]['cd']}.png`;
                if (!fs.existsSync(dir)) fs.mkdirSync(dir);
                fs.writeFileSync(path, await img_ListUnicodeByRadicalStroke(i, x['stroke'], j+1));
            }
        }
    };
    fs.writeFileSync(`status.log`, `done`);
    console.log(`Creating database...`)
    const db = Database('../webhanja.db');
    db.pragma('journal_mode=WAL;');
    db.prepare(`DROP TABLE IF EXISTS webhanja;`).run();
    db.prepare(`CREATE TABLE webhanja (
            cd TEXT,
            ex INTEGER,
            type TEXT,
            rad_id INTEGER,
            stroke INTEGER,
            totstroke INTEGER,
            em INTEGER,
            inm TEXT,
            dic TEXT,
            isin INTEGER,
            ineum TEXT,
            image BLOB,
            PRIMARY KEY (cd, rad_id, stroke)
        );`).run();
    const jsons: Array<string> = fs.readdirSync(`../json`);
    for (const file of jsons) {
        if (file.endsWith(`.json`)) {
            process.stdout.write(`\rReading ${file}...`);
            const json: Array<HanjaData> = JSON.parse(fs.readFileSync(`../json/${file}`, 'utf-8'));
            for (const x of json) {
                var img =  fs.readFileSync(`../img/${x.cd.slice(0, 3)}/${x.cd}.png`);
                db.prepare(`INSERT INTO webhanja SELECT
                    $cd,
                    $ex,
                    $type,
                    $rad_id,
                    $stroke,
                    $totstroke,
                    $em,
                    $inm,
                    $dic,
                    $isin,
                    $ineum,
                    $image
                `).run({
                    cd: x.cd,
                    ex: x.ex,
                    type: x.type,
                    rad_id: x.rad_id,
                    stroke: x.stroke,
                    totstroke: x.totstroke,
                    em: x.em,
                    inm: x.in,
                    dic: x.dic,
                    isin: x.isin,
                    ineum: x.ineum,
                    image: img,
                });
            }
        }
    }
    process.stdout.write(`\nDone!\n`);
    db.close();
}

__main__();