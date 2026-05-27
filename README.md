# Inertia Software - Company Website

A production-ready React.js website for **Inertia Software**, a software development startup.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Open browser at http://localhost:3000
```

## 📁 Project Structure

```
inertia-software/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── servicesData.js       # All services content data
│   ├── components/
│   │   ├── TopBar.js             # Blue top bar with contact & social links
│   │   ├── Navbar.js             # Sticky white navbar with hamburger menu
│   │   ├── Hero.js               # Homepage hero section
│   │   ├── ServicesSection.js    # Services grid with loading animation
│   │   ├── WhyUs.js              # Why Choose Us section
│   │   ├── Reviews.js            # Auto-sliding testimonials carousel
│   │   ├── ContactSection.js     # Contact info + WhatsApp enquiry form
│   │   ├── Footer.js             # Full footer with map & links
│   │   └── PageLoader.js         # Route transition loader
│   ├── pages/
│   │   ├── Home.js               # Homepage (all sections)
│   │   ├── Services.js           # All services listing page
│   │   ├── ServiceDetail.js      # Dynamic service detail page
│   │   ├── Portfolio.js          # Filterable portfolio grid
│   │   └── Contact.js            # Contact page with FAQ accordion
│   ├── styles/
│   │   ├── global.css            # Global variables, resets, utilities
│   │   ├── TopBar.css
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── ServicesSection.css
│   │   ├── ServicesPage.css
│   │   ├── ServiceDetail.css
│   │   ├── WhyUs.css
│   │   ├── Reviews.css
│   │   ├── ContactSection.css
│   │   ├── Footer.css
│   │   ├── PageLoader.css
│   │   ├── Portfolio.css
│   │   ├── Home.css
│   │   └── Contact.css
│   ├── App.js                    # Router setup
│   └── index.js                  # Entry point
└── package.json
```

## 🔷 Pages & Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/services` | All Services |
| `/services/web-development` | Web Development Detail |
| `/services/app-development` | App Development Detail |
| `/services/consultancy` | IT Consultancy Detail |
| `/services/erp-development` | ERP Development Detail |
| `/portfolio` | Portfolio (filterable) |
| `/contact` | Contact + FAQ |

## ✨ Features

- ✅ Sticky navbar with scroll shadow effect
- ✅ Mobile hamburger menu with slide animation
- ✅ Hero with floating cards and fade-in animation
- ✅ Services with 1.2s loading animation on card click
- ✅ Auto-sliding testimonials carousel (infinite loop)
- ✅ WhatsApp enquiry form (pre-fills message with form data)
- ✅ Dynamic service detail pages (`/services/:slug`)
- ✅ Portfolio with category filter tabs
- ✅ FAQ accordion on Contact page
- ✅ Page transition loader on every route change
- ✅ Google Maps embed in footer
- ✅ All contact links (tel, mailto, WhatsApp) are clickable
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scrolling & IntersectionObserver animations

## 🎨 Design

- **Primary Color:** `#0d6efd` (Blue)
- **Fonts:** Poppins (headings) + Inter (body) via Google Fonts
- **Icons:** Font Awesome 6.5 (via CDN)
- **Images:** Unsplash (copyright-free)

## 📦 Dependencies

- `react` ^18.2.0
- `react-dom` ^18.2.0
- `react-router-dom` ^6.22.0
- `react-scripts` 5.0.1

## 🔧 Customization

To update company info, edit these files:
- **Contact details**: `src/components/TopBar.js`, `src/components/ContactSection.js`, `src/components/Footer.js`
- **Services content**: `src/assets/servicesData.js`
- **Portfolio projects**: `src/pages/Portfolio.js`
- **Testimonials**: `src/components/Reviews.js`
- **Colors/fonts**: `src/styles/global.css` (CSS variables)

## 📱 WhatsApp Integration

The enquiry form opens WhatsApp with a pre-filled message containing all form data. Update the phone number `919270166932` in:
- `src/components/TopBar.js`
- `src/components/ContactSection.js`
- `src/components/Footer.js`
- `src/pages/ServiceDetail.js`
