# Repository Guidelines

This repository contains static mockups for the Auto Dashboard and Autobot Chat. There is no build step; pages are plain HTML/CSS served statically.

## Project Structure & Module Organization
- Root: `index.html` (overview/entry) and `shared.css` (design tokens).
- Modules: `auto-dashboard/` and `autobot-chat/`, each with `index.html` and `styles.css`.
- User stories: `user_stories/` with HTML/MD pairs (canonical source). Example: `uc07-chart-path-hints.html` + `.md`. Also contains `styles.css`.
- Docs: `PROJECT_SCOPE.md`, `SCREENSHOT_GUIDELINES.md`.
- Debug assets: `screenshots_debug/` is temporary and git-ignored; keep empty outside reviews.

## Build, Test, and Development Commands
- Local preview (Python): `python3 -m http.server 8080` then open `http://localhost:8080/`.
- VS Code: use “Live Server” on `index.html`.
- Navigation: from `/index.html` or direct paths like `/auto-dashboard/` and `/autobot-chat/`.

## Coding Style & Naming Conventions
- Indentation: 2 spaces (HTML/CSS). No tabs.
- HTML: prefer semantic elements; ensure accessible labels (see `autobot-chat/index.html` ARIA usage).
- CSS: reuse tokens from `shared.css` (e.g., `var(--brand)`, `var(--border)`). Avoid inline styles.
- Classes: lower-kebab-case (e.g., `left-rail`, `viz-card`).
- User story files: `ucNN-descriptor.html|md` (e.g., `uc11-new-feature.html`).

## Testing Guidelines
- No automated tests. Perform visual checks at ~360px, 768px, and 1280px widths.
- Verify: navigation from root index, consistent tokens/colors, basic responsiveness, and accessible labels on interactives.
- UI diffs: capture before/after following `SCREENSHOT_GUIDELINES.md`.

## Commit & Pull Request Guidelines
- Commits: imperative, present tense; include scope path when useful.
  - Example: `feat(auto-dashboard): add KPI card spacing`.
- PRs: concise description, link relevant user story (e.g., “UC7”), include before/after screenshots and test notes (browsers/viewports).
- Keep diffs focused; avoid unrelated formatting changes.

## Screenshots & Debug Assets
- During reviews, place temporary captures in `screenshots_debug/`; clean up with `rm -rf screenshots_debug/*` when done.

## Agent-Specific Instructions
- Prefer minimal, targeted changes; do not alter unrelated files.
- Adhere to tokens and naming; `user_stories/` content is authoritative when discrepancies arise.

## Use Case Tour Pattern (UC1–UC10) — Locked
- Entry banner: fixed top-left; shows UC title; readable at presentation scale.
- Step order: 1) Problem (center tip), 2) Core (center tip), 3+) UI highlights from `highlights`.
- Bullets: use `problem_bullets` and `core_bullets` in the inline meta (see UC1).
 - Manual Steps: one spotlight on the container `#manual-steps` (no per‑item steps).

- Tip sizes
  - `.uc-tour-tip.center`: large (≈960px; 32px/28px typography) with the same ring: `box-shadow: inset 0 0 0 2px #fff, 0 0 0 3px var(--spot-blue), 0 0 54px rgba(37,99,235,.45)`.
  - `.uc-tour-tip` (UI highlights): compact (≈560px; 15px/14px).

- Spotlight appearance (must)
  - UI element: `.uc-spotlight-box` with white 2px + blue 3px ring and dim overlay.
  - Tooltip: identical ring applied directly via CSS (no dim) using
    - `box-shadow: inset 0 0 0 2px #fff, 0 0 0 3px var(--spot-blue), 0 0 54px rgba(37,99,235,.45);`
  - Tokens: `--spot-radius: 12px`, `--spot-white: #fff`, `--spot-blue: #2563eb`, `--spot-dim: rgba(17,24,39,.45)`.

- Do / Don’t
  - Do: remove all default borders on tooltips; rely on outline + shadow for the ring.
  - Don’t: add a second dim overlay to tooltips or custom gradients/glows.
  - Do: clear overlays each step (`.uc-tour-overlay`, `.uc-tour-tip`, `.uc-spotlight-box`, `.uc-spotlight-ring`).

- Behavior
  - Add an explicit terminal step `{ kind: 'end' }` with no overlays (mockup fully visible).
  - Controls in English: “Back”, “Next”, “Step X / Y”.
  - Direct file access: pages must render via `file://` (no network calls).

- Reuse
  - Replicate this structure for UC2–UC10; only adjust meta (title/problem/core/bullets/highlights). Shared styles/logic stay unchanged.

## Visual Standards (Quick Reference)
- Ring thickness: inner white 2px (inset), outer blue 3px.
- Radius: `--spot-radius: 12px` for both element and tooltip.
- Tooltip styling: remove borders; apply ring via `box-shadow` only; avoid extra gradients.
- Z-index: Tooltip above overlay (`.uc-tour-tip { z-index: 10000 }`).
