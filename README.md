# My Portfolio

Personal portfolio site of **Jaswa J R** — mobile app developer, UI/UX designer and embedded systems engineer from Tamil Nadu, India. A single-page, dark-themed site showcasing services, featured projects and contact channels, with heavy use of scroll-driven and pointer-driven animation.

Repository: [github.com/Ne-x-us-vault/My_Portfolio](https://github.com/Ne-x-us-vault/My_Portfolio)

## Tech Stack

| Layer     | Tools                                                     |
| --------- | --------------------------------------------------------- |
| Framework | React 19 + TypeScript                                     |
| Build     | Vite 8                                                    |
| Styling   | Tailwind CSS 4 (`@tailwindcss/vite`)                      |
| Animation | Framer Motion 13                                           |
| Icons     | lucide-react                                              |
| Linting   | Oxlint                                                    |

## Features

- **Hero** — masked text reveals, 3D perspective outro, sheen heading and scroll-parallax layers
- **Marquee** — infinite scrolling keyword strip
- **About** — bio with animated counters / highlight cards
- **Services** — 8 numbered service rows with hover reveals (mobile apps, UI/UX, software, branding, web, AI/ML, DevOps, robotics & embedded)
- **Projects** — featured work cards (Nexus Launcher, Lovit, PiVision) with spotlight hover effects and live links
- **CTA / Contact** — mailto button wired to `src/contact.ts` plus GitHub and LinkedIn channels
- **Ambient touches** — custom cursor, scroll progress bar, aurora background, grain overlay, magnetic buttons
- **Accessibility** — `reducedMotion="user"` via Framer Motion's `MotionConfig`, responsive down to mobile

## Project Structure

```
src/
├── App.tsx              # Page composition
├── main.tsx             # Entry point
├── contact.ts           # Email / social links / location constants
├── index.css            # Tailwind entry + global styles
├── assets/              # Images (portrait, etc.)
├── components/          # Reusable UI (Cursor, Magnet, SpotlightCard, ...)
└── sections/            # Page sections (Hero, Marquee, About, Services,
                         #   Projects, CTA)
```

## Getting Started

**Prerequisites:** Node.js `^20.19.0 || >=22.12.0` (per Vite 8's engine requirement) and npm.

```bash
# 1. Clone the repository
git clone https://github.com/Ne-x-us-vault/My_Portfolio.git
cd My_Portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server (with HMR)
npm run dev
```

The app is then available at `http://localhost:5173`.

## Scripts

| Command           | Description                                          |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Start Vite dev server with hot module replacement    |
| `npm run build`   | Type-check with `tsc -b` and build production bundle  |
| `npm run preview` | Serve the production build locally                    |
| `npm run lint`    | Run Oxlint                                           |

## Customization

- **Contact details** — update `src/contact.ts` (email, GitHub, LinkedIn, location).
- **Projects** — edit the project list in `src/sections/ProjectsSection.tsx`.
- **Services** — edit the `SERVICES` array in `src/sections/ServicesSection.tsx`.
- **Metadata / SEO** — title, description and Open Graph tags live in `index.html`.

## Building for Production

```bash
npm run build
```

Outputs a static bundle to `dist/`, ready to deploy on any static host (GitHub Pages, Netlify, Vercel, etc.).

## License

No license file is present — all rights reserved by the author.
