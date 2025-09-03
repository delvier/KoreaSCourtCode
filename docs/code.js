const LIST_TABLES = [
    0x25, 0x30, 0x31,
    // Ext-A
    0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3A, 0x3B, 0x3C, 0x3D, 0x3E, 0x3F,
    0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4A, 0x4B, 0x4C, 0x4D,
    // URO
    0x4E, 0x4F,
    0x50, 0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5A, 0x5B, 0x5C, 0x5D, 0x5E, 0x5F,
    0x60, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6A, 0x6B, 0x6C, 0x6D, 0x6E, 0x6F,
    0x70, 0x71, 0x72, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7A, 0x7B, 0x7C, 0x7D, 0x7E, 0x7F,
    0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8A, 0x8B, 0x8C, 0x8D, 0x8E, 0x8F,
    0x90, 0x91, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9A, 0x9B, 0x9C, 0x9D, 0x9E, 0x9F,
    // Hangul Syllables
    0xAC, 0xAD, 0xAE, 0xAF,
    0xB0, 0xB1, 0xB2, 0xB3, 0xB4, 0xB5, 0xB6, 0xB7, 0xB8, 0xB9, 0xBA, 0xBB, 0xBC, 0xBD, 0xBE, 0xBF,
    0xC0, 0xC1, 0xC2, 0xC3, 0xC4, 0xC5, 0xC6, 0xC7, 0xC8, 0xC9, 0xCA, 0xCB, 0xCC, 0xCD, 0xCE, 0xCF,
    0xD0, 0xD1, 0xD2, 0xD3, 0xD4, 0xD5, 0xD6, 0xD7,
    // Compat
    0xF9, 0xFA,
    // Ext-B
    0x200, 0x201, 0x202, 0x203, 0x204, 0x205, 0x206, 0x207, 0x208, 0x209, 0x20A, 0x20B, 0x20C, 0x20D, 0x20E, 0x20F,
    0x210, 0x211, 0x212, 0x213, 0x214, 0x215, 0x216, 0x217, 0x218, 0x219, 0x21A, 0x21B, 0x21C, 0x21D, 0x21E, 0x21F,
    0x220, 0x221, 0x222, 0x223, 0x224, 0x225, 0x226, 0x227, 0x228, 0x229, 0x22A, 0x22B, 0x22C, 0x22D, 0x22E, 0x22F,
    0x230, 0x231, 0x232, 0x233, 0x234, 0x235, 0x236, 0x237, 0x238, 0x239, 0x23A, 0x23B, 0x23C, 0x23D, 0x23E, 0x23F,
    0x240, 0x241, 0x242, 0x243, 0x244, 0x245, 0x246, 0x247, 0x248, 0x249, 0x24A, 0x24B, 0x24C, 0x24D, 0x24E, 0x24F,
    0x250, 0x251, 0x252, 0x253, 0x254, 0x255, 0x256, 0x257, 0x258, 0x259, 0x25A, 0x25B, 0x25C, 0x25D, 0x25E, 0x25F,
    0x260, 0x261, 0x262, 0x263, 0x264, 0x265, 0x266, 0x267, 0x268, 0x269, 0x26A, 0x26B, 0x26C, 0x26D, 0x26E, 0x26F,
    0x270, 0x271, 0x272, 0x273, 0x274, 0x275, 0x276, 0x277, 0x278, 0x279, 0x27A, 0x27B, 0x27C, 0x27D, 0x27E, 0x27F,
    0x280, 0x281, 0x282, 0x283, 0x284, 0x285, 0x286, 0x287, 0x288, 0x289, 0x28A, 0x28B, 0x28C, 0x28D, 0x28E, 0x28F,
    0x290, 0x291, 0x292, 0x293, 0x294, 0x295, 0x296, 0x297, 0x298, 0x299, 0x29A, 0x29B, 0x29C, 0x29D, 0x29E, 0x29F,
    0x2A0, 0x2A1, 0x2A2, 0x2A3, 0x2A4, 0x2A5, 0x2A6,
    // Custom: ~A02E7, ~F34BD as of 2025-08-29
    0xA00, 0xA01, 0xA02,
    0xF00, 0xF01, 0xF02, 0xF03, 0xF04, 0xF05, 0xF06, 0xF07, 0xF08, 0xF09, 0xF0A, 0xF0B, 0xF0C, 0xF0D, 0xF0E, 0xF0F,
    0xF10, 0xF11, 0xF12, 0xF13, 0xF14, 0xF15, 0xF16, 0xF17, 0xF18, 0xF19, 0xF1A, 0xF1B, 0xF1C, 0xF1D, 0xF1E, 0xF1F,
    0xF20, 0xF21, 0xF22, 0xF23, 0xF24, 0xF25, 0xF26, 0xF27, 0xF28, 0xF29, 0xF2A, 0xF2B, 0xF2C, 0xF2D, 0xF2E, 0xF2F,
    0xF30, 0xF31, 0xF32, 0xF33, 0xF34
];
const DEFAULT_TABLE = LIST_TABLES.findIndex((x) => x === 0x4E);

async function load_font(hex) {
    hex = hex.padStart(8, "0");
    const url = `https://efamily.scourt.go.kr/webhanja/whjfont?c=${hex}&t=woff`;
    let font = new FontFace(`kct-${hex}`, `url(${url})`);
    var loaded = font.load().then((_) => {
        document.fonts.add(_);
        return true;
    }).catch((_) => {
        return false;
    })
    return loaded;
}

async function get_info(hex) {
    hex = hex.padStart(8, '0');
    const response = await fetch(`https://efamily.scourt.go.kr/webhanja/whjsearch?mode=unicodeInfo&code=${hex}`);
    const result = response.json().then(_ => {return _}).catch(err => {console.log(err); return null});
    return result;
}

async function load_page(id) {
    const idx = Number(id);
    const table = document.getElementById("code-table");
    table.setAttribute('data-page', idx);
    const prev = document.getElementById('button-prev');
    prev.setAttribute('data-page', idx - 1);
    if (idx == 0)
        prev.setAttribute('disabled', '');
    const next = document.getElementById('button-next');
    next.setAttribute('data-page', idx + 1);
    if (idx + 1 == LIST_TABLES.length)
        next.setAttribute('disabled', '');
    const input = document.getElementById('input-code');
    const upper = LIST_TABLES[idx].toString(16);
    for (var i = 0; i < 16; ++i) {
        const row = document.getElementById(`row-${i.toString(16)}`);
        row.children[0].textContent = (upper + i.toString(16)).toUpperCase();
        for (var j = 0; j < 16; ++j) {
            const cell = row.children[j+1];
            cell.textContent = '';
            cell.style.fontFamily = ''; 
        }
    }
    document.body.style.cursor = 'wait';
    prev.setAttribute('disabled', '');
    next.setAttribute('disabled', '');
    input.setAttribute('disabled', '');
    for (var i = 0; i < 16; ++i) {
        const row = document.getElementById(`row-${i.toString(16)}`);
        var font_waiting = [];
        for (var j = 0; j < 16; ++j) {
            const lower = i.toString(16) + j.toString(16);
            font_waiting[j] = load_font(upper + lower);
        }
        var container = await Promise.all(font_waiting).then((_) => {return _});
        for (var j = 0; j < 16; ++j) {
            const cell = row.children[j+1];
            const lower = i.toString(16) + j.toString(16);
            if (container[j]) {
                var codepoint = upper + lower;
                cell.textContent = '';
                cell.style.fontFamily = `kct-${codepoint.padStart(8, '0')}`;
                cell.style.background="";
                cell.setAttribute('title', codepoint.toUpperCase());
                cell.setAttribute('data-codepoint', codepoint);
                var val = parseInt(codepoint, 16);
                if (val >= 0x3400 && val <= 0x4DB5
                    || val >= 0x4E00 && val < 0xA000
                    || val >= 0x20000 && val < 0x2A700
                    || val >= 0xA0000 && val < 0xA0300
                    || val >= 0xF0000 && val < 0xF3500
                ) {
                    var data = await get_info(codepoint);
                    if (data) {
                        if (data['isinmyung'] == '1')
                            cell.style.color = '#0000cc';
                        else
                            cell.style.color = '';
                    } else {
                        cell.style.color = '#666666';
                    }
                }
                cell.addEventListener("click", char_info);
            } else {
                cell.textContent = '';
                cell.style.fontFamily = '';
                cell.style.background="#666666";
                cell.removeEventListener("click", char_info);
            }
        }
    }
    document.body.style.cursor = '';
    if (idx != 0)
        prev.removeAttribute('disabled');
    if (idx + 1 != LIST_TABLES.length)
        next.removeAttribute('disabled');
    input.removeAttribute('disabled');
}

const button = document.querySelectorAll("button");
button.forEach((elem) => {
    elem.addEventListener("click", async (ev) => {
        await load_page(ev.target.dataset.page);
    })
});

const input = document.getElementById('input-code');
input.addEventListener("input", async (ev) => {
    var text = ev.target.value;
    if (text.length < 2)
        return;
    var p = parseInt(text.substring(0, text.length - 2), 16);
    var i = LIST_TABLES.findIndex((x) => x === p);
    if (i !== -1)
        await load_page(i);
});

const char_info = async (ev) => {
    var cp = ev.target.dataset.codepoint;
    var val = parseInt(ev.target.dataset.codepoint, 16);
    if (val >= 0x3400 && val <= 0x4DB5
        || val >= 0x4E00 && val < 0xA000
        || val >= 0x20000 && val < 0x2A700
        || val >= 0xA0000 && val < 0xA0300
        || val >= 0xF0000 && val < 0xF3500
    ) {
        var data = await get_info(cp);
        var charbox = document.getElementById("charbox");
        var output = document.getElementById("info");
        charbox.textContent = '';
        charbox.style.fontFamily = `kct-${cp.padStart(8, '0')}`;
        if (data) {
            output.innerHTML = data_template;
            if (data['isinmyung'] == '1')
                charbox.style.color = '#0000cc';
            else
                charbox.style.color = '';
            document.getElementById('info-unicode').textContent = cp.toUpperCase();
            var y = [];
            var n = [];
            data['ksndlist'].forEach((_) => {
                if (_['isinmyung'] == '1') {
                    y.push(_['ksnd']);
                } else {
                    n.push(_['ksnd']);
                }
            });
            document.getElementById('info-nameread').textContent = y.join(', ') || '\u2013';
            document.getElementById('info-otherread').textContent = n.join(', ') || '\u2013';
            document.getElementById("raw").textContent = JSON.stringify(data, null, 2);
        } else {
            charbox.style.color = '';
            output.textContent = 'No data.';
            document.getElementById("raw").textContent = '';
        }
    }
}

await load_page(DEFAULT_TABLE);
const data_template = document.getElementById('info').innerHTML;
