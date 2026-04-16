# Clearline Pipeline — Website

> *The foundation of your TVC.*

A static marketing landing page for Clearline Pipeline. No build tools required — pure HTML, CSS, and vanilla JavaScript.

---

## Project Structure

```
clearline-pipeline/
├── index.html                  # Main landing page
├── css/
│   ├── reset.css               # CSS reset / normalise
│   └── style.css               # All site styles + responsive
├── js/
│   └── main.js                 # Nav, scroll-reveal, form
├── assets/
│   └── images/
│       └── Gemini_Generated_Image_i0bomti0bomti0bo.png   # Company logo
├── .gitignore
└── README.md
```

---

## Running Locally

No build step needed. Just open `index.html` in your browser, **or** use a local dev server for the best experience (avoids any CORS quirks):

```bash
# Option A — VS Code Live Server extension (recommended)
# Right-click index.html → "Open with Live Server"

# Option B — Python
python3 -m http.server 8080
# then visit http://localhost:8080

# Option C — Node (npx)
npx serve .
```

---

## Deploying

The site is a fully static build — no server or database required.

| Host | How |
|------|-----|
| **Netlify** | Drag & drop the project folder at netlify.com, then point your domain in Site Settings → Domain Management |
| **Vercel** | `vercel` CLI or import the GitHub repo; set root directory to `/` |
| **GitHub Pages** | Push to a `gh-pages` branch or enable Pages in repo Settings |
| **Any web host** | Upload all files via FTP/SFTP maintaining the folder structure |

### Custom Domain
After deploying, update your domain registrar's DNS to point to your host's nameservers (or add an A/CNAME record — your host will give you exact instructions).

---

## Customisation Notes

- **Logo** — Replace `assets/images/Gemini_Generated_Image_i0bomti0bomti0bo.png` with any PNG/SVG. Update both `src` attributes in `index.html`.
- **Colours** — All design tokens live in the `:root` block at the top of `css/style.css`.
- **Contact Form** — Currently a client-side stub. Wire it to [Formspree](https://formspree.io), [Netlify Forms](https://docs.netlify.com/forms/setup/), or your own backend by updating the `<form>` action and the submit handler in `js/main.js`.
- **Stats** — Edit the numbers directly in `index.html` inside the `.stats` section.

---

## Git Setup

```bash
git init
git add .
git commit -m "Initial commit — Clearline Pipeline landing page"
git remote add origin https://github.com/YOUR_USERNAME/clearline-pipeline.git
git push -u origin main
```