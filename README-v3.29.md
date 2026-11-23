# Veritas Reformata v3.29 — Search everything

- New search box at the top of the menu (and a Search page). Works offline.
- Searches: 1689 Confession (by paragraph), Torah and Qur'an accounts, abrogation, the 18 contradiction cards, Roman Catholicism / LDS / JW comparisons, manuscripts, textual criticism, logic and method pages, Word of Faith, study modules, simulator scenarios, sources and libraries, and the Qur'an (Pickthall).
- Not included: Bible verse text and hadith (they keep their own searches; links are on the Search page).
- All words must match. Results show area, page, a highlighted snippet, and area filters with counts.
- Tapping a result opens the page and scrolls to the entry where the page allows. Studies open directly. On pages with internal selections the jump may only reach the page.
- Searches only text stored in the app, not linked sites.
- Pages can now be opened by address hash (e.g. /#comparisons). The site address is unchanged.
- Dev note: tools/gen_inline.py regenerates src/searchInline.json (text of pages written inline).
