# AIR Coach Website

[![Production](https://img.shields.io/badge/production-live-brightgreen)](https://www.air-coach.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

Marketing website for **AIR Coach**, a personal skydiving guide mobile application. The website showcases app features and attracts beta testers.

**🌐 Live Website**: [www.air-coach.com](https://www.air-coach.com)

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

## Project Structure

```
app/                 # Next.js App Router pages
├── layout.tsx       # Root layout
├── page.tsx         # Landing page
├── chi-siamo/       # About page
├── come-funziona/   # How it works
└── contatti/        # Contact page

components/          # React components
├── ui/              # shadcn/ui components
├── header.tsx       # Site header
└── footer.tsx       # Site footer
```

## Available Scripts

- `pnpm run dev` - Development server
- `pnpm run build` - Production build (static export)
- `pnpm run start` - Serve static files from `out/`
- `pnpm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Run `pnpm run lint` to check code quality
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is proprietary software for AIR Coach application marketing.
