# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js marketing website for "AIR Coach," a skydiving mobile app. The site is built with Next.js 14 (App Router), TypeScript, Tailwind CSS v4, and shadcn/ui components.

## Development Commands

**Package Manager**: This project uses `pnpm` (evidenced by `pnpm-lock.yaml`)

### Essential Commands
- `pnpm install` - Install dependencies
- `pnpm run dev` - Start development server on http://localhost:3000
- `pnpm run build` - Create production build
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint

### Build Configuration
- ESLint and TypeScript errors are ignored during builds (`next.config.mjs`)
- Images are unoptimized in the current configuration
- Production builds should be tested thoroughly due to disabled error checking

## Architecture & Code Organization

### Key Directories
- `app/` - Next.js App Router pages and layouts
  - `app/layout.tsx` - Root layout with fonts and analytics
  - `app/page.tsx` - Main landing page
  - Static pages: `chi-siamo/`, `come-funziona/`, `contatti/`
- `components/` - Reusable React components
  - `components/ui/` - shadcn/ui component library
  - `components/header.tsx`, `components/footer.tsx` - Site-wide components
- `public/` - Static assets (images, favicons)
- `lib/` - Utility functions

### UI Framework
- **Primary UI Library**: shadcn/ui with "new-york" style
- **Component System**: Radix UI primitives with Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Geist Sans and Geist Mono

### Import Aliases
- `@/*` maps to root directory
- `@/components` for components
- `@/lib/utils` for utilities
- `@/hooks` for custom hooks

## Development Practices

### Styling
- Primary styling: Tailwind CSS v4
- Global styles: `app/globals.css`
- CSS variables enabled for theming
- Base color: neutral

### TypeScript Configuration
- Strict mode enabled
- Path aliases configured for absolute imports
- Target: ES6 with modern module resolution

### Component Development
- Use shadcn/ui patterns and components
- Follow existing naming conventions
- All components use `.tsx` extension
- Leverage the configured aliases for clean imports

## Testing & Quality
- Always run `pnpm run lint` before committing
- Since build errors are ignored in config, manually verify TypeScript compilation
- Test components in development mode before building

## Analytics & Deployment
- Vercel Analytics integration configured
- Build output configured for static export (`unoptimized: true` for images)