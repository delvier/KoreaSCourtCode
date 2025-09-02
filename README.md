
## Korea Supreme Court Character Code

#### 대한민국 대법원 한자 코드

[Download SQLite file](https://github.com/delvier/krcourt/raw/main/webhanja.db) (Build date: 2025-08-29, data obtained on 2024-07-16)

[Simple code chart](https://delvier.github.io/krcourt/)

CJK Ideograph code primarily used for Korean personal names.

대한민국 인명용 한자에 쓰이는 한자 코드.

### Database Keys

* `cd`: Character code. Implies a Universal Character Set code point if beginning with 0 or 2.
* `ex`, `isin`: `/[01]/`. 1 iff personal name _hanja_.
* `type`: `/[02AF]/`. The first letter from `cd`.
* `rad_id`: The Kangxi radical number (1~214).
* `stroke`: Remaining stroke count excluding the radical.
* `totstroke`, `em`: Unused, hence omitted in the SQLite file.
* `in`: Reading(s) allowed for personal names; and associated meanings. (`inm` in the SQLite file)
* `dic`: Other dictionary data not included in `in`. Sometimes has the same value as `in` for personal name _hanja_, if the reading(s) in `in` being the only one(s).
* `ineum`: `in`, but Reading(s) only.
* `image`: Glyph image from the Supreme Court of Korea website. Blue is for personal (`isin = 1`); else, black if `type = 0` and red if `type` having another value than 0.

In the SQLite file, there are two tables `hanja_info` and `rad_stroke` due to normalization, as there may exist more than one radical-stroke data for a _hanja_.

### Script

Please do not run the script in `src` abusively.

#### Known issues

* There may exist some replacement characters (U+FFFD) in the downloaded JSON files. Those are corrected manually in this repository.

### TODO

* Fix the scripts
* Create a web page for easy access to the data

### See also
[https://babelstone.co.uk/CJK/whj.pdf] (BabelStone)
