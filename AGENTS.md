# Repository Guidelines

## Project Structure & Module Organization
- Root: `index.html` (overview), shared tokens in `shared.css`.
- Modules: `auto-dashboard/` and `autobot-chat/` each with `index.html` and `styles.css`.
- Content: `user_stories/` contains HTML/MD pairs (e.g., `uc07-chart-path-hints.html` + `.md`) and `styles.css`.
- Canonical: `user_stories/` is authoritative for UC names/content; if docs diverge, prefer files.
- Docs: `PROJECT_SCOPE.md`, `SCREENSHOT_GUIDELINES.md` describe scope and visuals.
 - Debug: `screenshots_debug/` is temporary for reviews; contents are git-ignored and should remain empty (use only during a review and clear with `rm -rf screenshots_debug/*`).

## Build, Test, and Development Commands
- No build step; this is a static mockups repo.
- Quick preview: open `index.html` in a browser, or serve locally:
  - Python: `python3 -m http.server 8080` then open `http://localhost:8080/`
  - VS Code: use the “Live Server” extension on `index.html`.
- Navigate to module pages via the root index or directly: `/auto-dashboard/`, `/autobot-chat/`, `/user_stories/…`.

## Coding Style & Naming Conventions
- Indentation: 2 spaces (HTML/CSS). No tabs.
- HTML: semantic elements where reasonable; keep structure simple and accessible (see `autobot-chat/index.html` ARIA usage).
- CSS: reuse design tokens from `shared.css` (`var(--brand)`, `--border`, etc.); avoid inline styles.
- Class names: lower-kebab-case for new classes (match existing like `left-rail`, `viz-card`).
- Files: user stories use `ucNN-descriptor.html|md` (e.g., `uc11-new-feature.html`).

## Testing Guidelines
- No automated tests. Validate visually across widths ~360px, 768px, 1280px.
- Check: navigation from root index, consistent tokens/colors, basic responsiveness, and accessible labels on interactive elements.
- For UI diffs, include screenshots following `SCREENSHOT_GUIDELINES.md`.

## Commit & Pull Request Guidelines
- Commits: imperative, present tense; include scope path when useful.
  - Example: `feat(auto-dashboard): add KPI card spacing`.
- PRs: concise description, link relevant user story (e.g., UC7), before/after screenshots, and test notes (browsers/viewports).
- Keep diffs focused; avoid drive-by formatting unrelated to the change.
