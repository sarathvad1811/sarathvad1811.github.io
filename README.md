# Violet Port - Portfolio

A modern React/Next.js portfolio application built with TypeScript, Tailwind CSS, and Next.js 14.

## Features

- **Responsive Design** - Mobile-first approach with smooth responsiveness
- **Modern UI** - Beautiful gradient backgrounds, smooth animations, and interactive components
- **Fast Performance** - Optimized with Next.js App Router
- **TypeScript** - Full type safety with TypeScript
- **Tailwind CSS** - Utility-first CSS framework for rapid development

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: lucide-react
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
violet-port/
├── app/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Skills.tsx
│   │   └── Projects.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── postcss.config.js
```

## Customization

### Update Portfolio Content

Edit the component files in `app/components/` to customize:

- **Hero.tsx** - Main hero section
- **Skills.tsx** - Skills list
- **Projects.tsx** - Projects showcase
- **Navbar.tsx** - Navigation bar
- **Footer.tsx** - Footer section

### Styling

Tailwind CSS utilities are used throughout. Customize theme in `tailwind.config.ts`.

## Deployment

Deploy to Vercel with a single command:

```bash
vercel
```

Or manually:

1. Run `npm run build`
2. Deploy the `.next` folder to your hosting platform

## License

MIT License - feel free to use this template for your projects!

## Author

Aarab Nishchal
