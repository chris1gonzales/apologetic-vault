# Veritas Reformata 3.10 — Confessional Edition

Deploy to the existing Netlify site with `npm run build`, as before. No new dependencies.

## What changed

**Build fix.** 3.9 did not compile (`src/wordFaith.tsx`, search filter used `i` without declaring it). Fixed.

**Hadith Research: complete Sahih al-Bukhari, built in.**
- 7,580 reports with Arabic text and the M. Muhsin Khan English translation, sunnah.com numbering (Bukhari 1–7563), at `public/corpus/bukhari-full.json`. The offline service worker precaches it (about 13 MB, about 3 MB compressed).
- Source: the public-domain fawazahmed0/hadith-api dataset.
- Khan Volume:Book:Number from the IslamHouse PDF is shown on 6,465 reports, matched by text. Lettered numbers (e.g. 1:8:385l, 1:8:385u) are separate reports.
- The PDF lacks Volume 9 Book 83 and stops at Volume 5 Book 59 No. 411; those reports are included under Bukhari numbers only.
- Lookup accepts `3949`, `Bukhari 3949` or `5:59:285`. Arabic can be toggled. Reports that mention Jesus, revelation, the Trinity or earlier Scripture link to the related studies.
- Existing private notes keyed by Khan reference still show on the matching report.
- No more JSON import step. Fixed the stray "0" and the low-contrast inputs.

**1689 confessional rewrite of the 49 core studies** (`src/studies1689.ts`, applied in `src/data.ts`).
- Every study cites the Second London Baptist Confession by chapter and paragraph and ends with a Confessional position.
- Covenant of Grace and Covenant of Works rebuilt on 1689 federalism.
- Apologetics studies rebuilt on Van Tilian, transcendental argument.
- Textual criticism studies framed by 1689 1.8 (providential preservation in the whole manuscript tradition).
- Genesis 6:1–4 deliberately left undecided.

**Van Til audit.** 17 Debate Simulator answers rewritten from classical or evidential moves to presuppositional ones. Wording fixes in Christology & Islam, Logic & Transcendental Apologetics, Biblical Apologetics and Trinity 4:171.

**Framing panels** on Scripture Research and Hadith Research.

## After deploying

Open the site online once and wait for "Offline research ready" so the Bukhari file is cached. Apply the update when offered. Verify any hadith quotation against sunnah.com before publishing it.
