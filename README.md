# ACM FAST — TechOps Official Portfolio Website

A retro-OS / CRT-terminal styled portfolio for the ACM FAST TechOps department.

## Tech
Plain HTML, CSS and vanilla JavaScript. No build step, no dependencies (fonts: Google Fonts — JetBrains Mono, Press Start 2P, VT323).

| File | Purpose |
|---|---|
| `index.html` | Page structure and all 8 required sections |
| `styles.css` | Theme, CRT effects, windows, responsive layout |
| `content.js` | **All site content.** Edit this file only to add real content |
| `main.js` | Renders content, boot sequence, terminal, themes, animations |

## Run locally
Open `index.html` in a browser, or serve the folder: `python3 -m http.server 8000`.

## Deploy
Static site. Any of GitHub Pages / Netlify / Vercel / Cloudflare Pages works: point it at the repo root (no build command, publish directory `/`).

## Updating content
Edit `content.js`. Any `null` / empty field renders as a marked **"Details to be confirmed"** placeholder. Put images in an `img/` folder and reference them (e.g. `screenshot: "img/proj1.png"`). Contact/social links only render as live links once a URL is supplied.

## Features
Retro OS / CRT look in blue, boot sequence (once per session, skippable), scroll-opened windows, code-rain background, Start-menu and top navigation, keyboard accessible, `prefers-reduced-motion` respected, responsive for mobile/tablet/desktop.

## Content notes
Fields without confirmed information (e.g. event dates, photos, email) show a placeholder; add them in `content.js` once confirmed.
