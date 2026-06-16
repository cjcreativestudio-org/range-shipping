# Range Shipping — Project Reference

**Live site:** https://range-shipping-site.vercel.app/
**GitHub repo:** https://github.com/cjcreativestudio-org/range-shipping
**Local path:** `C:/Users/ollie/range-shipping-site`

## Stack

- Next.js 16 + React 19
- TypeScript + Tailwind CSS
- Lenis (smooth scroll)
- Phosphor Icons
- Deployed on Vercel

## File Map — where to make edits

```
range-shipping-site/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata, global wrappers
│   ├── page.tsx                # Homepage — assembles all homepage sections
│   ├── globals.css             # Global styles, CSS variables
│   ├── about/page.tsx          # /about page
│   ├── contact/page.tsx        # /contact page
│   ├── corporate-overview/page.tsx   # /corporate-overview page
│   └── dry-bulk/page.tsx       # /dry-bulk page
│
├── components/
│   ├── nav.tsx                 # Top navigation bar
│   ├── footer.tsx              # Site footer
│   ├── hero.tsx                # Homepage hero section
│   ├── stats.tsx               # Stats / numbers strip
│   ├── operations.tsx          # Operations section (stacking card animation)
│   ├── sustainability.tsx      # Sustainability section
│   ├── corporate.tsx           # Corporate overview section
│   ├── inquiry.tsx             # Inquiry / CTA component
│   ├── contact-form.tsx        # Contact form component
│   ├── parallax-bg.tsx         # Parallax background helper
│   ├── scroll-reveal.tsx       # Scroll-triggered reveal wrapper
│   └── lenis-provider.tsx      # Lenis smooth scroll provider
│
├── public/
│   ├── frames/                 # Animation frame assets
│   ├── vessels/                # Vessel images
│   ├── logo.jpg
│   ├── hero / bg images        # fleet-aerial.jpg, bulk-carrier.png, etc.
│   └── range-shipping-introduction-june-2026.pdf
│
├── tailwind.config.ts          # Tailwind theme / custom colours
├── next.config.ts              # Next.js config
└── package.json
```

## Pages & Routes

| Route | File | Notes |
|-------|------|-------|
| `/` | `app/page.tsx` | Homepage |
| `/about` | `app/about/page.tsx` | About page |
| `/contact` | `app/contact/page.tsx` | Contact page |
| `/corporate-overview` | `app/corporate-overview/page.tsx` | Corporate overview |
| `/dry-bulk` | `app/dry-bulk/page.tsx` | Dry bulk services page |

## Dev commands

```bash
cd C:/Users/ollie/range-shipping-site
npm run dev       # http://localhost:3000
npm run build
npm run lint
```
