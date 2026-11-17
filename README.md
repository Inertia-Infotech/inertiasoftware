# Inertia Software — Studio Website

Marketing site for Inertia Software, a design & development studio for ERP software, websites and apps.
Live at [inertiasoftware.vercel.app](https://inertiasoftware.vercel.app).

## Run locally

```bash
npm install
PORT=3001 npm start       # http://localhost:3001
CI=true npm run build     # same strictness as Vercel (warnings fail the build)
```

## Stack

- React 18 (Create React App) + React Router 6
- [Lenis](https://github.com/darkroomengineering/lenis) smooth scrolling, synced with GSAP ScrollTrigger
- [GSAP](https://gsap.com) for scroll-driven reveals, pinned horizontal work gallery, process timeline
- Hand-drawn inline SVG service illustrations, HTML/CSS product-screen thumbnails, plain CSS with design tokens
- Fonts: Bricolage Grotesque + Plus Jakarta Sans (Google Fonts)
- Project photos from Unsplash (free to use under the Unsplash licence), stored in `src/assets/work/`

## Where to edit content

| What | File |
| --- | --- |
| Email, phone, WhatsApp, "How to start" steps, "why us", tech list | `src/data/site.js` |
| Services (titles, descriptions, deliverables, stack) | `src/data/services.js` |
| Portfolio projects (text) | `src/data/work.js` |
| Portfolio thumbnails (realistic product screens + photos) | `src/components/ProjectShot.js`, `src/styles/shots.css`, `src/assets/work/` |
| Colours, fonts, spacing | `src/styles/base.css` (`:root` tokens) |

## Structure

```
src/
  data/        content (edit these first)
  lib/         motion.js (Lenis + GSAP setup, reveal hook), useTitle.js
  components/  Header, Footer, Marquee, Words (text reveals), Cradle, ServiceArt, ProjectCover, Sections
  pages/       Home, Services, ServiceDetail, Work, Contact, NotFound
  styles/      base, components, art, home, pages
```

Animations respect the visitor's "reduce motion" setting.
