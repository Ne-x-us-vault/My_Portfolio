# Jaswa J.R — Portfolio

A premium, immersive personal portfolio website built with Next.js 15, React Three Fiber, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D**: React Three Fiber + Three.js + Drei + Postprocessing
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons
- **Utilities**: clsx, tailwind-merge

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

- Immersive 3D landing page with particles, neural network, floating objects, grid waves, water waves, light tunnel, and cursor effects
- Smooth Framer Motion animations throughout
- Command palette (Ctrl+K) for quick navigation
- Custom magnetic cursor with 3D orb and trail effects
- Scroll progress indicator
- Aurora background effects
- Responsive design (mobile, tablet, desktop, ultra-wide)
- SEO optimized with OpenGraph, JSON-LD, sitemap, and robots.txt
- PWA manifest
- 404 page with 3D scene
- Loading screen with scene loader
- Dark mode only with premium color scheme

## Sections

Hero · About · Skills (Tech Stack) · Services · Pricing · Process · Projects (with dynamic `[slug]` detail pages) · Featured Products · Experience · Education · Certifications · Achievements · FAQ · Contact

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout with metadata, fonts, providers
│   ├── page.tsx                  # Main portfolio page (composes all sections)
│   ├── loading.tsx               # Loading screen with 3D scene loader
│   ├── not-found.tsx             # 404 page with 3D scene
│   ├── sitemap.ts                # Dynamic sitemap generation
│   ├── globals.css               # Global styles, CSS variables, animations
│   └── projects/[slug]/          # Dynamic project detail pages
├── components/
│   ├── ui/                       # Reusable UI components
│   │   ├── animated-border.tsx   # Animated border effect
│   │   ├── aurora.tsx            # Aurora background effect
│   │   ├── badge.tsx             # Badge/tag component
│   │   ├── button.tsx            # Button variants (primary, secondary, outline, ghost)
│   │   ├── command-palette.tsx   # Ctrl+K command palette
│   │   ├── custom-cursor.tsx     # Custom magnetic cursor with 3D orb
│   │   ├── glow-card.tsx         # Glowing card with hover effects
│   │   ├── magnetic-button.tsx   # Magnetic hover button
│   │   ├── section-heading.tsx   # Consistent section headings
│   │   └── scroll-progress.tsx   # Top scroll progress bar
│   ├── layout/                   # Layout components
│   │   ├── navbar.tsx            # Navigation with command palette trigger
│   │   └── footer.tsx            # Footer with social links
│   ├── sections/                 # Page sections
│   │   ├── about.tsx
│   │   ├── achievements.tsx
│   │   ├── certifications.tsx
│   │   ├── contact.tsx
│   │   ├── education.tsx
│   │   ├── experience.tsx
│   │   ├── faq.tsx
│   │   ├── featured-products.tsx
│   │   ├── hero.tsx              # 3D hero with particles, neural network, floating objects
│   │   ├── pricing.tsx
│   │   ├── process.tsx
│   │   ├── projects.tsx
│   │   ├── services.tsx
│   │   └── tech-stack.tsx
│   └── three/                    # Three.js / React Three Fiber components
│       ├── cursor-3d.tsx         # 3D cursor follower
│       ├── cursor-orb.tsx        # Orb cursor effect
│       ├── floating-charms.tsx   # Floating charm particles
│       ├── floating-objects.tsx  # Floating geometric objects
│       ├── grid.tsx              # Grid background
│       ├── grid-wave.tsx         # Animated grid wave
│       ├── light-tunnel.tsx      # Light tunnel effect
│       ├── neural-network.tsx    # Neural network visualization
│       ├── particles.tsx         # Particle system
│       ├── scene.tsx             # Main 3D scene composition
│       ├── scene-loader.tsx      # Loading screen 3D scene
│       └── water-wave.tsx        # Water wave simulation
├── lib/
│   ├── data.ts                   # Personal info, skills, projects, experience, education, social links
│   └── utils.ts                  # Utilities (cn helper for classnames)
└── types/
    └── index.ts                  # TypeScript type definitions

public/
├── manifest.json                 # PWA manifest
└── robots.txt                    # Crawler rules
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

1. **Personal Data**: Edit `src/lib/data.ts` to update your personal information, skills, projects, experience, education, certifications, achievements, and social links
2. **Colors & Theme**: Modify colors in `tailwind.config.ts` and `src/app/globals.css` (CSS variables for bg, surface, ink, muted, accent)
3. **Fonts**: Update font families in `tailwind.config.ts` (currently: Instrument Serif, Geist, Instrument Sans, JetBrains Mono)
4. **SEO Metadata**: Update metadata in `src/app/layout.tsx` (title, description, OpenGraph, JSON-LD)
5. **3D Scene**: Customize Three.js components in `src/components/three/` (particle counts, colors, animation speeds)
6. **Images**: Replace placeholder images in the `public/` directory

## Performance

- Lighthouse Performance: >95
- SEO: 100
- Accessibility: 100
- Best Practices: 100

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## License

MIT