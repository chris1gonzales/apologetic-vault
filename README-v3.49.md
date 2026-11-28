# Veritas Reformata v3.49

Search results grouped by area.

- Search now opens in a Grouped layout: results sit under headings (1689 Confession, Study modules, Apologetics method, Roman Catholicism, LDS and JW, Islam and the Qur'an, and so on) with a count per heading. The top 5 show under each; "Show all N in this area" expands it.
- Heading order puts Reformed material first (1689 Confession, studies, apologetics method, Scripture), then Rome, LDS/JW, other teachings, Islam, manuscripts and sources.
- A Grouped / List switch returns to the flat relevance list. Choosing an area chip also shows the flat list for that area.
- "Back to results" restores the layout and which headings were expanded.
- Headings are the app's existing areas, not a finer split by belief. For example Hinduism sits under "Other teachings".
- Search matching, ranking and index are unchanged.

Tested at phone width: "justification" gave 6 groups (54 results), expand/collapse, List switch, open a result and Back to results (layout and expanded groups restored), chip filter, single-area query, no-result message; no page errors.
Files: src/GlobalSearch.tsx, src/searchState.ts, src/globalSearch.css; version 3.49.
