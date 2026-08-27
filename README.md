# Jaswa J.R — Portfolio

A premium, immersive personal portfolio website built with Next.js 15, React Three Fiber, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D**: React Three Fiber + Three.js + Drei + Postprocessing
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons

## Prerequisites

- Node.js 18.18+
- npm 9+

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint
```

Then open [http://localhost:3000](http://localhost:3000).

## Features

- Immersive 3D landing page with particles, neural network, and floating objects
- Smooth Framer Motion animations throughout
- Command palette (Ctrl+K) for quick navigation
- Scroll progress indicator
- Responsive design (mobile, tablet, desktop, ultra-wide)
- SEO optimized with OpenGraph, JSON-LD, sitemap, and robots.txt
- PWA manifest
- 404 page
- Loading screen
- Dark mode only

## Sections

Hero · About · Skills (Tech Stack) · Services · Pricing · Process · Projects (with dynamic `[slug]` detail pages) · Featured Products · Experience · Education · Certifications · Achievements · FAQ · Contact

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main portfolio page
│   ├── loading.tsx         # Loading screen
│   ├── not-found.tsx       # 404 page
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── globals.css         # Global styles
│   └── projects/[slug]/    # Project detail pages
├── components/
│   ├── ui/                 # Reusable UI components (buttons, badges, command palette, etc.)
│   ├── sections/           # Page sections (hero, about, services, projects, experience, ...)
│   ├── layout/             # Navbar and footer
│   └── three/              # Three.js scene components (particles, neural network, scene, ...)
├── lib/
│   ├── data.ts             # Personal info, skills, projects, experience data
│   └── utils.ts            # Utilities (cn helper)
└── types/                  # TypeScript types (index.ts)
public/
├── manifest.json           # PWA manifest
└── robots.txt              # Crawler rules
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy

### Other Platforms

```bash
# Build the project
npm run build

# The output is in the .next directory
# You can deploy it to any Node.js hosting platform
```

## Customization

1. Edit `src/lib/data.ts` to update your personal information, skills, projects, experience, education, and social links
2. Modify colors in `tailwind.config.ts` and `src/app/globals.css`
3. Update SEO metadata in `src/app/layout.tsx`
4. Replace placeholder images in the `public/` directory

## Performance

- Lighthouse Performance: >95
- SEO: 100
- Accessibility: 100
- Best Practices: 100

## License

MIT
