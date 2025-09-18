# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Project Overview

This is a Next.js marketing website for "AIR Coach," a skydiving mobile application. The website serves to attract beta testers and showcase app features.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (built on Radix UI)
- **Icons**: Lucide React
- **Fonts**: Geist Sans and Geist Mono
- **Package Manager**: pnpm
- **Analytics**: Vercel Analytics

## Development Commands

```bash
# Install dependencies
pnpm install

# Development server
pnpm run dev

# Production build
pnpm run build

# Start production server (serves static files from out/ directory)
pnpm run start

# Lint code
pnpm run lint
```

## Architecture

### App Router Structure
- `app/`: Pages and layouts using Next.js App Router
  - `app/layout.tsx`: Root layout with font setup and analytics
  - `app/page.tsx`: Main landing page
  - `app/chi-siamo/`: About Us page
  - `app/come-funziona/`: How It Works page
  - `app/contatti/`: Contact page

### Components
- `components/ui/`: Complete shadcn/ui component library
- `components/header.tsx` and `components/footer.tsx`: Layout components
- `components/theme-provider.tsx`: Theme management

### Configuration
- Uses absolute imports with `@/*` path aliases
- TypeScript configured with strict mode
- PostCSS configured for Tailwind CSS v4
- **Important**: `next.config.mjs` ignores ESLint and TypeScript errors during builds

## UI Component System

This project uses shadcn/ui components extensively. The configuration in `components.json` shows:
- Style: "new-york"
- Base color: "neutral"
- CSS variables enabled
- Icons from Lucide library

To add new shadcn/ui components, use the CLI with the existing configuration.

## Development Notes

- No test framework is currently configured
- Images are unoptimized in Next.js config
- Build process ignores lint and type errors (review before production deployment)
- Italian language content throughout the website
- **Static Export**: Project is configured with `output: 'export'` for static site generation
- **Production Server**: Uses `serve` to host static files from `out/` directory instead of Next.js server