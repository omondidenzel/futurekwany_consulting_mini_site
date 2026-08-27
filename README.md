# FutureKwany Consulting — Static Site

A single-page site for FutureKwany Consulting built with only HTML, CSS,
Bootstrap 5 (via CDN), and vanilla JavaScript. No server, database, or build
step required.

## Structure

- `index.html` — one page with anchored sections: Hero, Problems, Services,
  Work/Impact, About, Contact
- `css/style.css` — all styles (variables, nav, hero, cards, footer)
- `js/main.js` — scroll-spy nav highlighting + mailto contact form

## Running locally

Open `index.html` directly in a browser, or serve the folder with any static
file server, e.g. `python3 -m http.server`.

## Deploying

Upload the whole folder to any static host (GitHub Pages, Netlify, Vercel,
Cloudflare Pages) — no hosting cost for a running backend.

## Note on the contact form

The contact form opens the visitor's email client with a pre-filled message
(via a `mailto:` link) instead of submitting to a server, since there is no
backend to store messages.

# futurekwany_consulting_mini_site
