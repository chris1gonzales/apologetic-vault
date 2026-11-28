# Veritas Reformata v3.47

Breadcrumbs and "Back to results".

- A breadcrumb line sits at the top of every page except the Overview, for example Islam and the Qur'an > Hadith. The group name is tappable and opens that group's first page. On a study, it reads Group > Module > Study title, and the module name returns to the module.
- When you open a result from Search, a "Back to results" button appears. It returns to the same search words, the same area filter, the same number of results shown, and the scroll position (best effort: the position is set a moment after the results load). The button disappears when you navigate by the menu or any other link.
- Not changed: tabs inside pages (for example the tabs in Torah & Qur'an) are not in the breadcrumb, and the browser Back button still leaves the app. Both are planned for the next step.

Checked: breadcrumbs on 9 page types including Hinduism sub-pages and a study; group crumb opens the group's first page; Back to results restored query, filter, result count and scroll (500 of 500 px) in the test; the button clears after menu navigation; no page errors.

Changed files: new src/Breadcrumb.tsx, src/searchState.ts; edited src/main.tsx, src/GlobalSearch.tsx, src/style.css, src/Curriculum.tsx, src/PassageFinder.tsx, src/SourcesRegister.tsx, package.json, README-v3.47.md.
