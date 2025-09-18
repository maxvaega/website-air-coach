# website-air-coach

This document provides a comprehensive overview of the `website-air-coach` project, its structure, and development conventions to be used as instructional context for future interactions.

## Project Overview

This is a Next.js marketing and informational website for a mobile application called "AIR Coach," a personal guide for skydiving. The website is currently aimed at attracting beta testers and showcasing the app's features.

- **Framework**: [Next.js](https://nextjs.org/) (v14) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) built on top of Radix UI.
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Geist Sans and Geist Mono
- **Analytics**: Vercel Analytics

### Architecture

The project follows the standard Next.js App Router structure:

- `app/`: Contains the pages and layouts of the application.
  - `app/layout.tsx`: The root layout, including font setup and analytics.
  - `app/page.tsx`: The main landing page.
  - `app/chi-siamo/`, `app/come-funziona/`, `app/contatti/`: Static pages for "About Us", "How It Works", and "Contact".
- `components/`: Contains reusable React components.
  - `components/ui/`: Holds the `shadcn/ui` components.
- `public/`: Stores static assets like images and favicons.
- `lib/`: Contains utility functions.

## Building and Running

The project uses `pnpm` as the package manager (inferred from `pnpm-lock.yaml`).

- **To install dependencies:**
  ```bash
  pnpm install
  ```

- **To run the development server:**
  ```bash
  pnpm run dev
  ```
  The application will be available at [http://localhost:3000](http://localhost:3000).

- **To create a production build:**
  ```bash
  pnpm run build
  ```

- **To start the production server (serves static files):**
  ```bash
  pnpm run start
  ```
  **Note**: This serves the static files from the `out/` directory using `serve`. Make sure to run `pnpm run build` first.

- **To run the linter:**
  ```bash
  pnpm run lint
  ```

**Important Notes**:
- The project is configured for static export (`output: 'export'` in `next.config.mjs`)
- The `next.config.mjs` file ignores ESLint and TypeScript errors during builds
- The production server uses `serve` to host static files instead of the Next.js server
- Always run `pnpm run build` before `pnpm run start` to generate the latest static files

## Development Conventions

- **Styling**: Tailwind CSS is the primary styling methodology. Global styles are defined in `app/globals.css`. The configuration in `postcss.config.mjs` enables the Tailwind CSS plugin.
- **Components**: Follow the `shadcn/ui` pattern. New components can be added using the `shadcn-ui` CLI. The configuration in `components.json` specifies path aliases and other settings.
- **TypeScript**: The project uses a strict TypeScript configuration (`tsconfig.json`). Path aliases are configured to allow for absolute imports from the project root (e.g., `import { Header } from "@/components/header"`).
- **File Naming**: Components and pages use the `.tsx` extension.
