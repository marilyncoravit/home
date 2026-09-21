# Marilyn Hampton — Portfolio

A product design portfolio built with React, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Deploying to GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds and deploys the site to
GitHub Pages automatically whenever `main` is updated.

One-time setup in the repo (**Settings → Pages**):

1. Set **Source** to **GitHub Actions**.
2. Merge this branch into `main` — the workflow will build and publish the
   site to `https://<your-username>.github.io/home/`.

The Vite `base` and router `basename` are already configured for the `home`
repo name in `vite.config.js` / `src/main.jsx`. If you ever rename the repo,
update the `base` path there to match.

## Swapping in your real content

Everything on the site is placeholder-free except for assets that weren't
available while rebuilding it. Search the codebase for `TODO` to find them,
or replace directly:

- **Headshot photo** — swap the `PlaceholderImage` in `src/sections/Hero.jsx`
  and `src/sections/About.jsx` for a real `<img>`.
- **Project screenshots** — swap the `PlaceholderImage` components in
  `src/sections/Work.jsx` and `src/pages/CaseStudy.jsx`.
- **Resume PDF** — add `resume.pdf` to `/public` (referenced in
  `src/data/site.js`).
- **LinkedIn URL** — update `linkedin` in `src/data/site.js`.
- **Copy/content** — all text lives in `src/data/site.js` and
  `src/data/projects.js` for easy editing without touching components.

## Project structure

```
src/
  components/   shared UI (nav, footer, buttons, icons, accordion)
  sections/     homepage sections (hero, work, process, faq, about, contact)
  pages/        routed pages (home, case study, 404)
  data/         all site copy/content in one place
```
