# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

Next.js marketing website for AIR Coach skydiving app. Italian content, production at www.air-coach.com.

## Repository Etiquette

- **Branch naming**: `feature/*`, `fix/*`, `refactor/*`
- **Quality gates**: Always run `pnpm run lint` before commits
- **Build verification**: `pnpm run build` required before deployment
- **Merge strategy**: Squash and merge preferred for feature branches

## Environment Setup

- **Node.js**: 18+ required
- **Package Manager**: pnpm only (avoid npm/yarn for consistency)
- **IDE**: VS Code recommended with TypeScript extension
- **Dependencies**: Run `pnpm install` in project root

## Claude Workflow Commands

```bash
# Development workflow
pnpm run dev                    # Start dev server (localhost:3000)

# Quality assurance
pnpm run lint                   # ESLint check (mandatory before commits)
pnpm run build                  # Build static export (mandatory before deployment)

# Production testing
pnpm run start                  # Serve static files from out/ (run after build)

# Full quality check
pnpm run lint && pnpm run build # Complete validation pipeline
```

## Development Guidelines

### Code Style & Conventions
- **TypeScript**: Strict mode enabled, use absolute imports with `@/*` aliases
- **Components**: Follow shadcn/ui patterns, `.tsx` extension for React components
- **Styling**: Tailwind CSS v4 classes, avoid custom CSS unless necessary
- **File naming**: kebab-case for files, PascalCase for React components

### Component Architecture
```
components/
├── ui/              # shadcn/ui components (don't modify directly)
├── header.tsx       # Site navigation
├── footer.tsx       # Site footer
└── theme-provider.tsx # Theme context
```

### Page Structure
```
app/
├── layout.tsx       # Root layout (fonts, analytics)
├── page.tsx         # Landing page
├── chi-siamo/       # About page (Italian)
├── come-funziona/   # How it works (Italian)
└── contatti/        # Contact page (Italian)
```

## Testing & Quality Assurance

### Current State
- **Testing Framework**: None configured (manual testing only)
- **Quality Gates**: ESLint + Build verification required
- **Type Checking**: TypeScript strict mode
- **Build Process**: Static export (`output: 'export'`)

### Quality Workflow
1. **Pre-commit**: Always run `pnpm run lint`
2. **Pre-deployment**: Always run `pnpm run build`
3. **Local testing**: Use `pnpm run start` to test built static files
4. **Error handling**: Build process ignores lint/type errors (review manually)

### Known Behaviors & Warnings
- **Build Configuration**: `next.config.mjs` ignores ESLint/TypeScript errors during builds
- **Static Export**: Project configured for static generation, not SSR
- **Images**: Unoptimized in Next.js config for static export compatibility
- **Content**: Italian language throughout (chi-siamo, come-funziona, contatti)

## Component System

### shadcn/ui Configuration
- **Style**: "new-york" variant
- **Base color**: "neutral" theme
- **Icons**: Lucide React library
- **Path**: `@/components/ui/*`

### Adding New Components
```bash
# Use shadcn CLI with existing config
npx shadcn-ui add [component-name]
```

## Deployment & Infrastructure

### Production Environment
- **Live URL**: www.air-coach.com
- **Platform**: Cloudflare Pages + Workers
- **Auto-deploy**: Push to `main` branch
- **Build**: `pnpm run build` → `out/` directory

### API Integration
- **Backend**: Python API on Vercel (air-coach.vercel.app)
- **Proxy**: Cloudflare Worker routes `/api/*` to backend (see `cloudflare/` repository folder)
- **Benefits**: Single domain, CORS handling, CDN acceleration

## Troubleshooting

### Common Issues
- **Build fails**: Check `pnpm run lint` first
- **Static export errors**: Verify no SSR features used
- **Component errors**: Ensure shadcn/ui components imported correctly
- **Path issues**: Use `@/*` aliases, not relative imports

### Debug Commands
```bash
# Check for type errors
npx tsc --noEmit

# Verbose build output
pnpm run build --verbose

# Check dependencies
pnpm list
```