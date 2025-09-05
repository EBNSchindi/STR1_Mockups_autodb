# AutoDashboard Builder-First - Projekt Scope

## Überblick
**Ziel:** AutoDashboard für Builder weiterentwickeln - "Builder-First" Ansatz  
**Zielgruppe:** Dashboard-Ersteller:innen (nicht End-Konsumenten)  
**Vision:** Guided Builder Mode mit CI-Konsistenz und Data Literacy  
**Vendor:** Strategy One

## Design System (bestehende Mockups)
```css
--bg: #f6f7fb        /* Heller Hintergrund */
--panel: #ffffff     /* Weiße Panels */
--border: #e5e7eb    /* Dezente Rahmen */
--text: #111827      /* Haupttext */
--muted: #6b7280     /* Sekundärtext */
--brand: #2563eb     /* Primärblau für Interaktionen */
--accent: #10a5a5    /* Türkis für Datenvisualisierungen */
```

## 10 Use Cases für Mockups (kanonisch nach `user_stories/`)

### UC1 — Guided Settings ⭐
- Nutzen: Geführte Wege zu wichtigen Einstellungen; weniger Fehler.
- Mockup: UI-Overlays, Guided Tours, Hilfe-Bubbles.

### UC2 — Visual Matching
- Nutzen: PDF/Screenshot hochladen, Vorschau und Mapping zu Layouts/Charts.
- Mockup: Upload-Interface, Preview, Mapping-Dialog.

### UC3 — UX Advisory ⭐
- Nutzen: CI-/UX-Linting mit Auto-Fixes und Presets.
- Mockup: Preset-Selector, Linting-Panel, Fix-Buttons.

### UC4 — Context Documentation
- Nutzen: Question Cards, Kontext und Data Literacy je Visual/Page/Dashboard.
- Mockup: Editor für Frage/Kontext, Validierung, Pflicht vor Publish.

### UC5 — Path Builder
- Nutzen: Vordefinierte Drill-/Filter-Pfade modellieren und verwalten.
- Mockup: Flow-/Pfad-Designer, Preview-Mode.

### UC6 — Path Hints ⭐
- Nutzen: Kontextuelle Hinweise/Trigger entlang definierter Pfade.
- Mockup: On-Chart Hints, Trigger-Config.

### UC7 — Chart Path Hints
- Nutzen: Sichtbare Pfad-Indikatoren und Fortschritt in Charts.
- Mockup: On-Chart Badges/Progress + Aktionen.

### UC8 — Object Addressing
- Nutzen: Eindeutige Adressierung/Referenzierung von Objekten im Workspace.
- Mockup: Referenz-Handles, Copy/Share, Deep-Links.

### UC9 — System Prompts
- Nutzen: Vorgegebene Prompts/Guidance für Builder-Tasks.
- Mockup: Prompt-Gallery mit Kategorien und Kurzbeschreibungen.

### UC10 — Dashboard Setup Wizard ⭐
- Nutzen: Schnelles Grundsetup inkl. dm-Standards und Struktur-Vorschlägen.
- Mockup: Setup-Wizard, Palette, Kapitelseiten.

## Pilot-Scope (12 Wochen)
- **Scope:** 2 Fachbereiche, 6-8 Dashboards
- **Deliverables:** CI-Preset, Guided Settings (Top-10), Question Cards, 10 Analysepfade, On-Chart Hints
- **KPIs:** 
  - Time-to-Dashboard ↓30%
  - CI-Lint Passrate ≥90%
  - Question Coverage ≥90%
  - Path Coverage ≥70%

## Vendor-Asks an Strategy One
1. **Commitment:** AutoDashboard-Invest in Guided Builder Mode
2. **Hooks/Erweiterbarkeit:** Settings-Guides, CI-Presets, Question-/Path-Metadaten
3. **High-Level Ingestion:** PDF/Screenshot→Quelle (UX-Flow)
4. **On-Chart Hints:** dezente, Trigger-basierte Hinweise
5. **Pilot-Setup:** dedizierte Umgebung + Product-Owner:in

## Nicht-Ziele & Constraints
- Kein Ersatz für Data Lineage
- Keine tiefen Implementationsvorgaben
- Hinweise dezent, abschaltbar, CI-konform
- Datenschutz & Rollen strikt einhalten

## Mockup-Prioritäten für Präsentation
**Hoch (⭐):**
- UC1 Guided Settings
- UC3 UX Advisory
- UC4 Context Documentation
- UC6 Path Hints
- UC10 Dashboard Setup Wizard

**Medium:**
- UC2 Visual Matching
- UC5 Path Builder
- UC7 Chart Path Hints
- UC8 Object Addressing

**Niedrig:**
- UC9 System Prompts

## Bestehende Mockup-Struktur
- **auto-dashboard/**: Vollansicht mit 3-Spalten-Layout (Navigation, Editor, Chat)
- **autobot-chat/**: Standalone Chat-Interface
- **Gemeinsame Styles:** Konsistentes Design-System, responsive Grid-Layouts

## Presentation Goal
**Format:** PowerPoint/Canva Integration  
**Focus:** Chat interactions for Use Case demonstration  
**Style:** Individual, focused mockups per slide  
**Language:** English content for international presentation  
**Location:** `/user_stories/` folder

## Mockup Development Guidelines
- **Chat-First:** Primary Chat interfaces based on `autobot-chat` template
- **Use Case Demo:** Each mockup demonstrates one specific Use Case
- **PowerPoint-ready:** Clean screenshots, clear boundaries
- **Builder Perspective:** Chat shows Builder features (not End-User)
- **Consistency:** Existing design tokens from `autobot-chat/styles.css`
- **Documentation:** Each UC has both `.html` mockup and `.md` slide content

## File Structure per Use Case
```
/user_stories/
  uc01-guided-settings.html    # Interactive mockup
  uc01-guided-settings.md      # Slide content
  uc03-ux-advisory.html        # Interactive mockup  
  uc03-ux-advisory.md          # Slide content
  ...                          # weitere ucNN-*.html|md Paare
  styles.css                   # Shared styling
```

## Chat Mockup Structure (Template: autobot-chat)
```
Header: "AUTO DASHBOARD" Badge + Toolbar
Chat-Area: User Request → Bot Response with Feature
Suggestions: Related Use Cases
Input: Builder-focused prompts
```

## Chat Scenarios per Use Case (English)
**UC1 — Guided Settings:**
- User: "How do I quickly configure a legend?"
- Bot: Step-by-step guide with overlay preview

**UC3 — UX Advisory:**
- User: "Check my dashboard for CI compliance"
- Bot: Linting results + 1-click fixes

**UC4 — Context Documentation:**
- User: "What question does this chart answer?"
- Bot: Question Card editor + validation

**UC5 — Path Builder:**
- User: "Create a drill path for pipeline analysis"
- Bot: Path designer interface

**UC6 — Path Hints:**
- User: "Show me contextual tips for this visual"
- Bot: On-chart hint configuration
