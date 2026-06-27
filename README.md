# EURO AL-SHPK Website

Premium corporate website for **EURO AL-SHPK**, an aluminum systems company based in Mitrovice, Kosove. The site is designed as a high-end European-style aluminum and construction brand experience, with a dark luxury visual language, gold accent color, architectural photography, smooth motion, and strong SEO foundations.

## Website Overview

The website presents EURO AL-SHPK as a professional provider of modern aluminum systems for residential, commercial, and industrial projects in Kosove and Europe.

Main sections include:

- Full-screen premium hero section
- Product cards for doors, windows, shutters, ventilated facades, structural facades, and curtain wall systems
- Animated company statistics
- About section with company positioning
- Featured project masonry gallery with filters and lightbox
- Services process timeline
- Testimonials slider
- FAQ accordion
- Contact form with phone, email, address, and Google Maps embed
- SEO metadata, OpenGraph data, and JSON-LD structured data

## Tech Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- Responsive Design
- SEO Metadata
- JSON-LD Structured Data

## Design Direction

The design uses a premium dark theme inspired by modern European aluminum and architectural brands.

Primary colors:

- Dark background: `#0B0F19`
- Gold accent: `#F4B400`
- White
- Light gray

The interface includes glassmorphism panels, soft shadows, large typography, image hover effects, scroll reveal animations, animated counters, and responsive layouts for desktop, tablet, and mobile.

## Project Structure

```text
app/
  globals.css          Global styles and Tailwind layers
  layout.tsx           SEO metadata, OpenGraph, viewport, JSON-LD
  page.tsx             Main homepage composition

components/
  *.tsx                Reusable website sections and UI components

lib/
  data.ts              Company info, navigation, products, projects, FAQ, testimonials

public/images/
  projects/            Original uploaded project photos
  site/                Curated image aliases used by the website
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open the website in your browser:

```text
http://localhost:3000
```

## Email Delivery Setup

The contact form submits to a Next.js API route at `/api/contact` and sends email through Resend.

Create a local `.env.local` file:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=euro-al@outlook.com
CONTACT_FROM_EMAIL=EURO AL-SHPK <noreply@yourdomain.com>
```

Important:

- `RESEND_API_KEY` is required for the form to send automatically.
- `CONTACT_TO_EMAIL` is the inbox that receives website requests.
- `CONTACT_FROM_EMAIL` should use a verified Resend domain in production.
- Without these environment variables, the form will show a clear configuration error instead of silently pretending the email was sent.

## Available Scripts

Run local development:

```bash
pnpm dev
```

Create a production build:

```bash
pnpm build
```

Start the production server after building:

```bash
pnpm start
```

Run lint checks:

```bash
pnpm lint
```

## Notes

- Contact details and website content are stored in `lib/data.ts`.
- SEO metadata and structured data are defined in `app/layout.tsx`.
- Main visual styling is handled through Tailwind classes and `app/globals.css`.
- Uploaded project photos are stored under `public/images/projects`.
- The curated images used directly by sections are stored under `public/images/site`.

## Company Information

**EURO AL-SHPK**  
Shipol, Rruga e Kombit  
Mitrovice, Kosove

Phone: `+383 49 345 666`  
Email: `euro-al@outlook.com`

Copyright 2026 EURO AL-SHPK. Te gjitha te drejtat e rezervuara.
