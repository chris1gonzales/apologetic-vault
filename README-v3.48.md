# Veritas Reformata v3.48

Working browser Back/Forward buttons, and the tab in the URL.

- Moving between pages now adds a history entry, so the phone/browser Back button returns to the previous page instead of leaving the app. Forward works too.
- Tabs inside pages (Torah & Qur'an, Manuscript Criticism, Study Course, Hadith-adjacent tools such as Qur'anic Research, Trinity 4:171, Christology & Islam, Logic, Inerrancy, Biblical Apologetics, Understanding the Text, Sources Register) are in the address: #torahQuran?tab=method. Each tab click is a Back step. Reloading or sharing the link opens the same tab.
- A study opens at #study?id=... so a reload or Back/Forward returns to the same study.
- Typing or editing the hash in the address bar now changes the page (before, it did nothing).
- Back to a search page keeps the search words, area and scroll position.

Not covered: filters, search boxes and open/closed sections inside a page are not in the URL (only the main tab). Phrase Search tab and Bible Reader selections are not in the URL.

Tested: tab click/back/forward/reload, study back/forward/reload, typed hash, search then Back; no page errors.
Files: new src/urlState.ts; edited src/main.tsx and the ten tab pages; version bumped to 3.48.
