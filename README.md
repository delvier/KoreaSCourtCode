
## Korea Supreme Court Code

#### 대한민국 대법원 한자 코드

[Download SQLite file](https://github.com/delvier/KoreaSCourtCode/raw/main/webhanja.db) (Build date: 2024-07-16)

CJK Ideograph code primarily used for Korean personal names.

대한민국 인명용 한자에 쓰이는 한자 코드.

### Database Keys

The primary key is (`cd,rad_id,stroke`), as multiple radical-stroke data may exist for a character.

* `cd`: Character code. Implies a Universal Character Set code point if beginning with 0 or 2.
* `ex`, `isin`: `/[01]/`. 1 iff personal name _hanja_.
* `type`: `/[02AF]/`. The first letter from `cd`.
* `rad_id`: The Kangxi radical number (1~214).
* `stroke`: Remaining stroke count excluding the radical.
* `totstroke`, `em`: Unused.
* `inm`: Sound(s) allowed for personal names; and associated meanings. (`in` in the JSON files)
* `dic`: Other dictionary data not included in `inm`. Sometimes has the same value as `inm` for personal name _hanja_, if the sound(s) in `inm` being the only one(s).
* `ineum`: `inm`, but sound(s) only.
* `image`: Glyph image from the Supreme Court of Korea website. Blue is for personal (`isin = 1`); else, black if `type = 0` and red if `type` having another value than 0.

### Script

Please do not run the script in `src` abusively.

#### Known issues

* There may exist some replacement characters(U+FFFC) in the downloaded JSON files. Those are corrected manually in this repository.
