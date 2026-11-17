# Veritas 1.9 — Private Research Workspace

React + TypeScript + Vite application for Netlify. Includes the existing Veritas studies, confessions, scripted apologetics simulator, Google Drive source catalog, source-note search, folder navigation, research notes, backups, and a privacy/deployment guide.

## Deploy

1. Run `npm install` and `npm run build` locally.
2. Push this repository to GitHub.
3. Connect the repository to Netlify. Build command: `npm run build`; publish directory: `dist`.
4. In Netlify's site settings, enable supported visitor/site-level access protection if available on your plan. **The app does not itself implement login.** If unavailable, choose a supported external access-control product before treating the site as private.
5. Leave Google Drive source files private. Do not change sharing permissions to public.

## Data and limitations

- Google Drive is a **static link catalog**, not an authenticated Drive API integration or automatic sync.
- No PDFs or DOCX documents from Google Drive are embedded.
- Ultimate English / Ultimate USB license prohibits incorporating licensed content into another app or digital system without written permission; only folder pointers are provided.
- Notes and bookmarks are stored in the browser's localStorage, not synced. Export backups using Privacy & Deployment.
- Hosting-level password protection may require a paid Netlify plan or external access control.
- No AI integration.

## v1.5 — Comparative Worldviews
- 60 private Google Drive PDF links in the existing searchable source catalog.
- 16 original apologetics question studies with Scripture and 1689 references, plus browser-local notes.
- No licensed PDF content is bundled or copied. Keep Drive permissions private.
- Netlify access protection is not automatically configured; set it up in Netlify separately.

## Veritas 1.6 — rights-aware historic research library
Adds Public-Domain Library with edition-level reuse status, seven vetted source/index entries, and four original doctrinal study guides with Scripture and 1689 references. Source links are external; no third-party full text is bundled. The two Project Gutenberg editions have an explicit U.S. public-domain notice. Before importing additional texts, confirm the exact edition and any site-specific conditions. Personal notes remain in localStorage.

## Version 1.7 — Expanded apologetics simulator
Added 36 original multiple-choice scenarios across atheism, Islam, Christian traditions, textual criticism, morality, Reformed theology, and evangelism. All questions are original, scripted, and require no AI or external documents.

## Veritas 1.8 — Evil & Theodicy
16 original multiple-choice scenarios added, informed by Cornelius Van Til’s *Evil and Theodicy* (1923), with Scripture and 1689 references. No source PDF text is bundled. The source document remains in the user’s private Google Drive.

## Version 1.9 — RTS Research Library
- New RTS Research Library navigation page with five curated external resources, searchable original descriptions, Scripture and confessional references, and browser-local notes.
- Three original study guides covering transcendental apologetics, canon recognition, and 1689 Baptist/Westminster covenant theology.
- RTS lecture, article, transcript, and audio content is **not** bundled or copied; links open original sources.
- No AI integration added.


## Version 2.0 — Qur’anic Analysis tool

New navigation item: **Qur’anic Analysis**. Includes curated research findings covering canonical readings, early manuscripts, oral/written transmission, Arabic loanwords, internal parallels, and methodological safeguards. Searchable Arabic demo excerpts and a browser-side importer for Tanzil-style `surah|ayah|Arabic` UTF-8 text; normalized repeated-phrase detection works after importing a full corpus. Research annotations are stored in localStorage and exportable as JSON.

**Scope and limitations:** The ZIP does not bundle the complete Qur’an, a complete qirāʾāt apparatus, manuscript transcriptions, or automatic semantic contradiction analysis. These require verified and appropriately licensed sources. Importing a corpus is session-only. The built-in six passages are illustrative excerpts, not a complete Arabic edition.

**Build:** `npm ci && npm run build`. The local build could not be verified in the authoring environment because the dependency installation did not complete (network unavailable). Run the build before deploying. Preserve the top-level `src/`, `index.html`, `package.json`, and `netlify.toml` layout.

## v2.1 — Source library
The Qur’anic Analysis tool now has a **Source library** tab with the two user-provided PDFs under `public/references/`: a 200-page image-only Arabic scan and the 798-page Saheeh International translation volume (2010, edited by A. B. al-Mehri). The edition’s preface notes changes to the translation. The PDFs are displayed side-by-side and downloadable; neither is automatically converted into a searchable verse-aligned Arabic corpus or a manuscript apparatus. The Arabic scan is large (~157 MB); Netlify deployments may take longer. Verify the source edition and distribution permissions before publishing publicly.


## v2.2: Bundled searchable Arabic Qur’an

The Qur’anic Research module automatically loads `public/corpus/quran-simple-v1.1.txt` (Tanzil Qur’an Text, Simple, Version 1.1). The source file is copied **verbatim** from the user-supplied Tanzil download, including its full copyright and attribution notice. Source: https://tanzil.net . The app validates 6,236 verses in 114 surahs, and runs normalized Arabic searches and repeated-phrase analysis in the browser without modifying the source. English verse-by-verse alignment and independent manuscript/qirāʾāt databases are not yet implemented.

## Veritas 2.3 — Biblical comparison research

The Qur'anic Analysis area now includes a **Biblical comparison** tab with eight curated comparative research cases. Cases include Arabic Qur'anic text from the bundled Tanzil corpus, Bible references (not full copyrighted Bible text), Muslim and Christian interpretive perspectives, provisional assessments, browser-local notes, and JSON export. This is an editorial research index, not an automated contradiction detector or a verified critical apparatus.

The package is **flat**: extract its contents directly to the repository root. Netlify can run `npm ci && npm run build` with `dist` as publish directory. The large reference PDFs increase repository and deploy size substantially.


## English-first Qur’an research (v2.3.1)
Qur’anic passages now prioritize the included Saheeh International English PDF. Arabic text is hidden by default and can be enabled with a checkbox. Full English verse-by-verse indexing is NOT included: the supplied PDF uses complex two-column layout, and an unverified extraction could misattribute verses. Reference-based navigation and the English PDF remain available.
