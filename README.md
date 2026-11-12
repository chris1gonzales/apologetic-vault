# Veritas 1.4 — Private Research Workspace

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
