# Veritas Reformata 3.39: Study course

New sidebar entry "Study course" (page id `curriculum`).

- 17 short lessons following the app in order. Lesson 1 is the apologetic method with Scripture as the final standard; lesson 2 is logic and TAG.
- Each lesson: key passage, core facts with badges, "References to know" (Scripture and the other side's sources, with the Scripture that answers each where the app pairs them), review questions.
- Reference drills: reference to what it says, topic to reference, and their source to the Scripture that answers it. Self-graded; missed cards come first. Progress is kept in localStorage on the device.
- Print view and plain-text download. Works offline.
- Badges: each fact carries the badge of the app page it comes from; lines with no badge on the page show Secondary, never higher.

Changed files: src/Curriculum.tsx, src/study.css, src/studyData.ts (new); src/main.tsx, src/searchIndex.ts, src/GlobalSearch.tsx, src/SourcesRegister.tsx, src/PassageFinder.tsx, package.json, README-v3.39.md.
