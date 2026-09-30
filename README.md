# MH Tutor Academy

An educational academy website for MH Tutor Academy, built with React, Vite, Tailwind CSS, Motion and Lucide icons.

The site includes home tuition and computer course information, online class details, FAQs, contact links, a student inquiry form and a dedicated tutor application page. Both forms prepare a message for review and submission through WhatsApp.

## Getting started

```bash
npm install
npm run dev
```

Run `npm run build` to create a production build.

Run `npm run preview` to preview the production build locally.

## Deploying to GitHub Pages

Create a public GitHub repository named `mh-tutor-academy` and push this project to its `main` branch. In the repository settings, set **Pages** > **Build and deployment** > **Source** to **GitHub Actions**. The workflow in `.github/workflows/deploy.yml` will build and deploy the site on each push to `main`.

The site will be available at `https://<your-github-username>.github.io/mh-tutor-academy/`.
Tutor applications are available at `/become-a-tutor.html`.

## Before deployment

Replace `https://mh-tutor-academy.example/` with the deployed URL in `index.html`, `public/robots.txt`, and `public/sitemap.xml`. The `.example` address is a reserved placeholder and must not be deployed as the canonical URL.
