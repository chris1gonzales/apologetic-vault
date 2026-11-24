# Veritas Reformata v3.33

## New: Find a passage (Scripture hub)
Type a Bible or Qur'an reference or range and read it at once, with the Hebrew, Greek or Arabic beside it.
- Bible: `Gen 1:1–2:3`, `John 3:16-21`, `Psalm 22–24`, `Romans 8`, `1 Cor 15`, `Jude 3-10` (abbreviations and "I/II/III John" forms work).
- Qur'an: `Q 2:255-260`, `Surah 18:9–26`, `Q 112`, `Q 2:255-3:10`. A Qur'an reference must start with Q, Quran or Surah, because `2:255` alone is ambiguous.
- Ranges can cross chapters and whole chapters. Results cap at 600 verses. Clear messages for bad ranges ("Surah 2 has 286 verses").
- Two boxes, so a Bible range can sit beside a Qur'an range. Copy button gives the reference line plus verses.
- Texts: BSB or KJV; Hebrew WLC; Greek SBLGNT; Pickthall and Arabic. All stored on the device, so it works offline. Each verse links to the NASB (Bible Hub) or Quran.com.
- Hebrew and Greek lines are matched by verse number and can be offset in places (Psalm titles); the page says so.

## Offline hardening
- `_redirects` is no longer listed for caching (it caused the install failure on Netlify: 404 cancels an all-or-nothing install).
- The worker now saves core files one at a time. A single bad file no longer blocks the install; only a failed `index.html` does.
- Missing files are retried and the status panel names any file not saved. If no worker answers, the panel says so instead of staying on "Preparing".

## Form fields
59 fields that had no `id` or `name` now have one, and search boxes use `autocomplete="off"` (clears the Chrome Issues notice).

## Still open
- v3.32 items marked Verify: Bukhari 3365, the Paran = Hijaz argument, MT/SP/LXX apparatus for Genesis 21 and 25.
