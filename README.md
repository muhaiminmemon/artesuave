# ArteSuave — Personal Portfolio

Personal portfolio site for Muhammad Muhaimin Memon, Software & AI/ML Engineer. Built as a single self-contained HTML page with vanilla React (via CDN), no build step required.

## Stack

- **HTML / CSS / JSX** — no bundler; React loaded via CDN, Babel transpiles JSX in-browser
- **Themes** — switchable themes (`bjj`, `cyber`, `mono`, etc.) with accent colour variants, persisted to `localStorage`
- **Preloader** — animated belt-tying intro sequence with a live timer, skipped on repeat visits or `prefers-reduced-motion`
- **Tweaks panel** — floating dev panel (toggle with `T`) to swap themes, accents, and layout options live
- **Scroll reveals** — intersection-based `.reveal` animations with a 2.5 s fallback

## Structure

```
Site/
├── Portfolio.html       # Entry point — loads all scripts and styles
├── app.jsx              # Root component, wires sections + theming + reveal
├── sections-a.jsx       # Hero, stats ticker, about, experience sections
├── sections-b.jsx       # Projects, skills, contact sections
├── content.js           # All copy/data (resume content, experience, projects)
├── components.css       # Reusable component styles
├── styles.css           # Global layout, themes, and CSS variables
├── preloader.css        # Preloader animation styles
├── tweaks-panel.jsx     # Dev/demo floating control panel
├── shots/               # Project screenshots
└── uploads/             # Resume PDF and artwork assets
```

## Running Locally

No install needed. Open `Site/Portfolio.html` directly in a browser.

> Some browsers block local ES module fetches. If styles or scripts don't load, serve the folder with any static server:
> ```bash
> npx serve Site
> # or
> python -m http.server 8080 --directory Site
> ```

## Customisation

All content lives in [Site/content.js](Site/content.js) — edit the `window.PORTFOLIO` object to update name, experience, projects, and skills without touching any markup.

Theme and layout defaults are at the top of [Site/app.jsx](Site/app.jsx) in `TWEAK_DEFAULTS`.

## Experience Highlights

- **Autodesk** — MLOps pipelines for production ML & LLM agents
- **Nokia R&D** — LangGraph multi-agent 5G troubleshooting system; Crossplane edge deployment
- **Outamation** — CV + NLP document extraction pipeline (F1 0.95); LlamaIndex RAG system

## Contact

[muhaiminmemon@gmail.com](mailto:muhaiminmemon@gmail.com) · [github.com/muhaiminmemon](https://github.com/muhaiminmemon) · [linkedin.com/in/muhaiminmemon](https://linkedin.com/in/muhaiminmemon)
