# Netlify deployment fix

The supplied project failed `npm run build` with:

    src/quranResearch.tsx(1,8): error TS6133: 'React' is declared but its value is never read.

Removed the unused default React import. The hooks remain imported, and the existing react-jsx compiler setting handles JSX. Strict TypeScript checks remain enabled. No dependency or lockfile changes were needed.

Verified: a clean `npm ci` installation followed by `npm run build` succeeds and produces `dist/`.

## Deploy from GitHub

1. Extract this ZIP and put its contents in your GitHub repository root. Upload the extracted files, not the ZIP itself. Replace the existing files and commit.
2. In Netlify, use the repository root as the base directory (leave it blank), `npm run build` as the build command, and `dist` as the publish directory. The included netlify.toml already supplies the command and publish directory.
3. Trigger a new deploy for that commit.

If the project lives inside a subfolder in your repository, use that folder as Netlify's base directory instead.

The source ZIP contains links to an Arabic scan PDF that is absent from the archive. This does not block deployment, but those links will not display that document. The bundled English PDF and Arabic text corpus are preserved.

This verifies the local production build; the GitHub repository and live Netlify deployment were not accessed. If deployment still fails, share the Netlify build log to identify any additional hosting configuration issue.
