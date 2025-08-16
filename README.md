# IREO Real Estate Website

A modern, responsive real estate website built with Next.js 15, TypeScript, Tailwind CSS, and Shadcn UI. It features detailed project pages, a global navigation, a contact page with a backend API to send email notifications, and a reusable “Schedule Visit” popup used across project pages.

- Live stack: Next.js App Router, React 19, TypeScript, Tailwind CSS (v4), Shadcn UI components
- Package manager: pnpm
- Email backend: Nodemailer (via Next.js Route Handler)

## Features

- Project pages: `grandarch`, `uptown`, `corridors`, `citycentral`, `skyon`, `victoryvalley`, `gurgaonhills`.
- Reusable popup: `components/schedule-visit-popup.tsx` closes on Esc and outside-click, posts to `/api/contact`.
- Contact page: `app/contact/page.tsx` with enhanced UI, call and WhatsApp buttons, using the same `/api/contact` backend.
- Navigation: `components/navigation.tsx` links to all projects and the contact page.
- Modern UI: Tailwind CSS, Shadcn UI, lucide icons.
- Type-safe: TypeScript throughout.

## Tech Stack

- Next.js 15 (App Router) / React 19 / TypeScript
- Tailwind CSS v4, Shadcn UI (Radix primitives)
- pnpm
- Nodemailer for sending emails from `/api/contact`

## Project Structure

- `app/` — Next.js routes
  - `app/contact/page.tsx` — Contact form page (posts to `/api/contact`)
  - `app/api/contact/route.ts` — Route handler that sends email via Nodemailer
  - `app/[project]/page.tsx` — Individual project pages (e.g., `uptown`, `grandarch`, etc.)
- `components/`
  - `components/navigation.tsx` — Top navigation bar
  - `components/schedule-visit-popup.tsx` — Reusable schedule visit modal
  - `components/ui/*` — Shadcn UI components
- `public/` — Images and assets
- `styles/globals.css` — Global styles
- `next.config.mjs`, `tsconfig.json`, `package.json`, `pnpm-lock.yaml`

## Getting Started

Prerequisites:
- Node.js ≥ 18
- pnpm (recommend using Corepack)

Install dependencies:
```bash
pnpm install
```

Run dev server:
```bash
pnpm dev
# http://localhost:3000
```

Build:
```bash
pnpm build
```

Start production server:
```bash
pnpm start
```

## Environment Variables

The contact API uses Nodemailer. Move credentials to environment variables for security:

Create `.env.local`:
```bash
EMAIL_USER="your@gmail.com"
EMAIL_PASS="your-app-password"   # e.g. Gmail App Password
RECIPIENT_EMAIL="sales@yourdomain.com"
```

Then update `app/api/contact/route.ts` to read from env (recommended):
```ts
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER!,
    pass: process.env.EMAIL_PASS!,
  },
})
// Use process.env.RECIPIENT_EMAIL as the 'to' address
```

Important:
- Do not commit `.env.local`.
- Use an App Password if using Gmail.

## Contact API

Endpoint:
- POST `/api/contact`

Expected JSON payload:
```json
{
  "name": "John Doe",
  "number": "+91 99999 99999",
  "property": "uptown"
}
```

Behavior:
- Validates required fields.
- Sends an HTML email to the configured recipient.
- Returns 200 on success or an error status on failure.

## UI Notes

- Contact page (`app/contact/page.tsx`) includes:
  - Two-column layout (form + contact details)
  - Call Now button (`tel:` link) and WhatsApp button
  - Property selector matching project slugs
- Schedule Visit Popup (`components/schedule-visit-popup.tsx`):
  - Opens from CTAs on project pages
  - Closes on Esc and outside click
  - Posts to the same `/api/contact` endpoint

## Deployment

- Recommended: Vercel
- Ensure environment variables are configured in Vercel dashboard (`EMAIL_USER`, `EMAIL_PASS`, `RECIPIENT_EMAIL`).
- If Vercel warns about ignored build scripts (e.g., sharp), run:
  ```bash
  pnpm approve-builds
  ```
  locally and commit the generated policy file, or approve scripts in your CI environment.

## Scripts

- `pnpm dev` — Run development server
- `pnpm build` — Build for production
- `pnpm start` — Start production server
- `pnpm lint` — Run Next.js linting

## Troubleshooting

- Missing Nodemailer types:
  ```bash
  pnpm add -D @types/nodemailer
  ```
- Lockfile or pnpm version mismatch:
  - Enable Corepack and pin pnpm:
    ```bash
    corepack enable
    corepack use pnpm@10
    ```
- Images not loading:
  - Make sure files exist under `public/`.
  - Use `/filename.webp` paths in `src`.

## Security

- Do not hardcode email credentials in source. Use `.env.local` and deploy-time environment variables.
- Consider adding captcha (Cloudflare Turnstile, reCAPTCHA) to reduce spam on the contact form.

## License

Proprietary. All rights reserved. Update if you plan to open-source.
