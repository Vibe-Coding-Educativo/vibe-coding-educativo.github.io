# Repository Guidelines

## Project Structure & Module Organization
- Root site: `index.html` (HTML, Tailwind via CDN, inline CSS/JS).
- Assets: `favicon.ico`, `vibe_coding_educativo.png`.
- Docs: `README.md`, this `AGENTS.md`.
- No build system or package manifest; the site is static and served as-is (GitHub Pages).

## Build, Test, and Development Commands
- Serve locally: `python3 -m http.server 8080` then open `http://localhost:8080`.
- Quick check (no server): open `index.html` directly in the browser, but some features behave more reliably over HTTP.
- Optional formatting (if you use Prettier): `npx prettier --write index.html`.

## Coding Style & Naming Conventions
- Indentation: 4 spaces; keep lines readable (<120 chars when possible).
- HTML: use semantic tags (`header`, `nav`, `section`, `footer`).
- Classes/IDs: kebab-case (e.g., `section-bg-even`, `main-nav`).
- Tailwind: prefer utility classes; add minimal custom CSS inside the existing `<style>` block.
- i18n: all translatable text should use `data-lang` attributes; add corresponding keys in the `translations` object in the script.

## Testing Guidelines
- Manual checks on desktop and mobile widths:
  - Language switch updates all `data-lang` elements and persists in `localStorage`.
  - Mobile menu toggles correctly and links scroll smoothly to sections.
  - External links open in a new tab and images load.
- Visual pass for contrast and focus states on interactive elements.

## Commit & Pull Request Guidelines
- Commits: write clear, imperative messages (English or Spanish). Prefer a short scope, e.g., `i18n: add eu strings`, `ui: improve hero spacing`, `docs: update README`.
- PRs: include a concise description, screenshots/GIFs for UI changes, steps to validate locally, and linked issues if applicable.
- Keep PRs small and focused; note any i18n keys added/removed.

## Security & Configuration Tips
- Site uses Tailwind and Google Fonts from CDNs. For offline/self-hosting scenarios, consider bundling assets locally.
- Avoid introducing third-party scripts without review. Keep external links `rel="noopener noreferrer"` when `target="_blank"`.
