# Veritas Reformata v3.44

Navigation and search improvements.

- Header search box on every page (hidden on the Search page itself). Enter opens the Search page with your words.
- The More case studies tab (Torah & Qur'an) now lists 28 of the 32 comparison studies, grouped by theme. Before, only 4 showed and 24 were not visible anywhere. The other 4 (crucifixion, Mary, Abraham, earlier Scripture) remain inside their accounts.
- Search results for these studies now open the right tab and study. They were labelled "Qur'anic research", which is the Arabic text tool and does not contain them.
- Search matching: filler words (does, how, the, is...) are ignored; common spellings match (Allah/God, Qur'an/Quran/Koran, Muhammad/Mohammed, abrogation/naskh, sinner/sinners and similar); entries with all your words come first, then entries with most of them marked "partial match".

Not changed: the sidebar grouping (18 top-level entries), breadcrumbs, a Start-here home panel.

Changed files: src/main.tsx, src/TorahCases.tsx, src/TorahQuran.tsx, src/searchIndex.ts, src/GlobalSearch.tsx, src/style.css, src/logicArgumentation.css, src/Curriculum.tsx, src/PassageFinder.tsx, src/SourcesRegister.tsx, package.json, README-v3.44.md.
