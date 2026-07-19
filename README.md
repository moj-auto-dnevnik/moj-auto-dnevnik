# Moj Auto Dnevnik — Official Website

A fully static, self-contained website for the Android application **Moj Auto Dnevnik**.

- Pure HTML5, CSS3, and vanilla JavaScript.
- No build step, no framework, no backend, no database.
- All assets (Inter fonts, app icon, promotional graphic, CSS, JS) are bundled locally inside `assets/`.
- Works fully offline — open `index.html` in any browser.

## Pages

- `index.html` — Home
- `privacy-policy.html` — Privacy Policy
- `terms-of-use.html` — Terms of Use
- `faq.html` — Frequently Asked Questions (with client-side search)
- `support.html` — Support
- `contact.html` — Contact
- `404.html` — Not-found page

## Local preview

Just open `index.html` in your browser. That's it.

For a proper local server (recommended so that relative paths behave the same as on hosting):

```bash
# Python 3
python3 -m http.server 8000

# Node
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Then visit http://localhost:8000/

## Deploying

The site is a plain static folder. Any static host works:

- **GitHub Pages** — push the contents of `website/` to a branch (e.g. `main`) and enable Pages on that branch/root. The `404.html` file is served automatically for unknown paths.
- **Netlify** — drag-and-drop the `website/` folder into the Netlify dashboard, or connect a repo with `website/` as the publish directory.
- **Vercel** — import the repo and set `website/` as the output directory (Framework preset: *Other*).
- **Cloudflare Pages** — set build command empty, output directory `website/`.
- **Any web host** — upload the contents of `website/` via SFTP/FTP.

## Structure

```
website/
├── index.html
├── privacy-policy.html
├── terms-of-use.html
├── faq.html
├── support.html
├── contact.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── README.md
├── LICENSE
└── assets/
    ├── css/
    │   ├── styles.css
    │   └── pages.css
    ├── js/
    │   ├── main.js
    │   └── faq.js
    ├── fonts/
    │   ├── inter-400.woff2
    │   ├── inter-500.woff2
    │   ├── inter-600.woff2
    │   ├── inter-700.woff2
    │   └── inter-800.woff2
    ├── icons/
    │   ├── icon-512.png
    │   ├── icon-192.png
    │   ├── favicon.png
    │   ├── favicon-32.png
    │   ├── favicon-16.png
    │   └── apple-touch-icon.png
    └── images/
        ├── feature-graphic.png
        └── feature-graphic@2x.png
```

## Contact

**Developer:** Moj Auto Dnevnik
**Email:** mojautodnevnik@gmail.com

## License

Website source code is released under the MIT License (see `LICENSE`).
The Moj Auto Dnevnik name, icon, and promotional graphic are trademarks/assets
of the application publisher and are used here for the official application website.
