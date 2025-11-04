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

## Analytics & Monitoring

### Cloudflare Web Analytics ✅ **ACTIVE**
- **Status**: Enabled and deployed
- **Implementation**: Beacon script in `app/layout.tsx`
- **Token**: `1c8cdbe053d7499abdec0369a92c2ade`
- **Dashboard**: [Cloudflare Web Analytics](https://dash.cloudflare.com) → website-air-coach → Web Analytics
- **Features**:
  - Privacy-first (no cookies, no personal data tracking)
  - GDPR compliant by default
  - Real-time visitor metrics
  - Page views, visits, referrers, geolocation
  - Device and browser statistics
- **Script Loading**: `afterInteractive` strategy via Next.js Script component

### Vercel Analytics (Legacy)
- Integration configured in `app/layout.tsx` but **not active** (site hosted on Cloudflare Pages)
- Component remains for potential future use

### Deployment
- Build output configured for static export (`unoptimized: true` for images)

## Cloudflare Pages Management

### Wrangler CLI Commands
**Installed locally**: `npx wrangler` (authenticated)

#### Project Management
- `npx wrangler pages project list` - List all Pages projects
- `npx wrangler pages deployment list --project-name website-air-coach` - View deployment history
- `npx wrangler pages download config` - Download dashboard configuration to local

#### Deployment Commands
- `npx wrangler pages deploy out/ --project-name website-air-coach` - **DEBUG ONLY**: Direct deploy (bypasses CI/CD)
- `npx wrangler pages deploy out/ --project-name website-air-coach --commit-dirty=true` - **EMERGENCY ONLY**: Deploy with uncommitted changes
- **⚠️ IMPORTANT**: These are DEBUG tools. Use GitHub integration for all production deployments

#### Monitoring & Debug
- `npx wrangler pages deployment list --project-name website-air-coach` - Check deployment status
- View deployment logs: Use URLs from deployment list output

### Cloudflare MCP Servers
✅ **Installed and ready** - Claude handles authentication automatically via OAuth

**Available capabilities via natural language:**
- Monitor build processes and deployment failures
- Debug logs and analytics
- Take screenshots and test pages
- Access up-to-date Cloudflare documentation

**Usage examples:**
- "Check my latest deployment status on Cloudflare"
- "Show me the logs for the failed build"
- "Take a screenshot of the production homepage"
- "Debug why my Pages build is failing"

## Deployment Workflow

### Development to Production (PRIMARY WORKFLOW)
1. **Local Development**: `pnpm run dev`
2. **Build & Test**: `pnpm run build` (generates `out/` directory)
3. **Git Commit & Push**: Triggers automatic Cloudflare Pages build ✅ - building the site in cloudflare takes tipically 1 minute and 10 seconds. Wait 90 seconds after the push to check the build status is completed
4. **Monitor**: Check status with `npx wrangler pages deployment list --project-name website-air-coach`

### Debug Workflow (SECONDARY - for testing only)
1. **Test Fix Locally**: `pnpm run build`
2. **Quick Deploy Test**: `npx wrangler pages deploy out/ --project-name website-air-coach`
3. **If Fix Works**: Commit to GitHub for official deployment

### Troubleshooting Failed Builds
1. Check deployment status: `npx wrangler pages deployment list --project-name website-air-coach`
2. Test local build: `pnpm run build`
3. Deploy directly to test: `npx wrangler pages deploy out/ --project-name website-air-coach`
4. Use MCP Observability server for detailed logs and analytics

### Emergency Deployment
If Cloudflare Pages CI/CD fails, use direct deployment:
```bash
pnpm run build
npx wrangler pages deploy out/ --project-name website-air-coach --commit-dirty=true
```

## Project URLs
- **Production**: https://website-air-coach.pages.dev
- **Cloudflare Dashboard**: https://dash.cloudflare.com/[account]/pages/view/website-air-coach
- **GitHub Repository**: https://github.com/maxvaega/website-air-coach