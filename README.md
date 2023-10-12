
## Korea SCourt Code

#### 대한민국 대법원 한자 코드

[Download SQLite file](https://github.com/delvier/KoreaSCourtCode/raw/main/webhanja.db) (Build date: 2023-10-12)

### Database Keys

The primary key should be `code`^`rad_id`^`stroke`, according to the data.

* `code`: Character code. Implies a Universal Character Set code point if beginning with 0 or 2.
* `ex`, `isin`: `/[01]/`. 1 iff personal name _hanja_.
* `type`: `/[02AF]/`. The first letter from `code`.
* `rad_id`: The Kangxi radical number.
* `stroke`: Remaining stroke count excluding the radical.
* `totstroke`, `em`: Unused.
* `in`: Sound(s) allowed for personal names; and associated meanings. (Considering to change the name later)
* `dic`: Other dictionary data not included in `in`. Sometimes has the same value as `in` for personal name _hanja_, if the sound(s) in `in` being the only one(s).
* `ineum`: `in`, but sound(s) only.
* `image`: Glyph image from the Supreme Court of Korea website. Blue is for personal (`isin = 1`); else, black if `type = 0` and red if `type` having another value than 0.