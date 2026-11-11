# Veritas 1.0 — Theology & Apologetics

A non-AI, responsive React + TypeScript + Vite application with seven research modules, curated starter content, a Scripture Research Workspace, scripted apologetics exercises, local notes/bookmarks, and JSON research backup.

## Start locally

Install Node.js 20.19+ (or 22.12+) and run:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Deploy on Netlify

1. Create a GitHub repository and upload the contents of this folder (not just the ZIP).
2. In Netlify, choose **Add new project → Import an existing project** and connect the repository.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy. The included `netlify.toml` configures SPA fallback routing.

No API keys, Supabase account, or AI subscription are needed.

## Features

- Seven modules: Systematic Theology, Apologetics, Exegesis, Historical Theology, Textual Criticism, Scripted Simulator, Research Library.
- Searchable curated study articles with references and methodological cautions.
- Scripture Workspace linking selected passages to indexed studies by discipline.
- Scripted debate simulator with feedback (no AI).
- Bookmarks and notes stored in browser localStorage; export/import JSON backups.
- Links to external primary-source and scholarly resources.

## Limitations / editorial policy

This is a working starter platform, not an exhaustive scholarly database. Scripture Workspace links by curated references, not full verse-level indexing. Manuscript evidence summaries are introductory and should be checked against a current critical apparatus. No copyrighted Bible translation, manuscript transcription, or scholarly apparatus is bundled. External scholarly links may change or require access. Local browser storage does not synchronize across devices and may be erased. No user accounts or AI integration are present.

## Roadmap

- Expand reviewed studies and verse-level cross-reference metadata.
- Add public-domain/licensed Bible text and manuscript catalog with provenance.
- Add richer original-language and variant comparison views.
- Add optional user accounts/cloud sync.
- AI assistant remains deferred until a future version.
