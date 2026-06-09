# Anshi Tyagi Portfolio

Modern React + Tailwind portfolio designed for internship and entry-level opportunities in:

- Software Development
- Full-Stack Development
- Python Development
- Data Analytics
- Cloud Computing

## Features

- Premium glassmorphism-inspired UI
- Dark and light mode toggle
- Responsive layout for desktop, tablet, and mobile
- Recruiter-focused content structure
- SEO metadata and semantic sections
- Accessible contact form with mailto fallback
- GitHub stats integration
- LinkedIn integration
- Resume download action

## Folder Structure

```text
frontend/
├─ public/
│  ├─ favicon.svg
│  └─ icons.svg
├─ src/
│  ├─ assets/
│  │  ├─ anshi_profile.png
│  │  ├─ hero.png
│  │  ├─ react.svg
│  │  └─ vite.svg
│  ├─ components/
│  │  ├─ Reveal.jsx
│  │  ├─ SectionHeading.jsx
│  │  └─ ThemeToggle.jsx
│  ├─ App.jsx
│  ├─ content.js
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ package.json
├─ package-lock.json
└─ vite.config.js
```

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Deploy on Vercel

1. Push the `frontend` folder to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/).
3. Click `Add New -> Project`.
4. Import the repository.
5. Set the root directory to `frontend`.
6. Use these build settings:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Deploy.
8. After deployment, update:
   - the final production domain inside social metadata if you want a canonical URL
   - live demo links for projects when demos become available

## Content Notes

- The portfolio copy is written to appeal to recruiters without inventing experience.
- Project cards are upgraded with stronger summaries, key features, and impact framing.
- Replace `Request Live Demo` mail links with real demo URLs when your hosted projects are ready.
