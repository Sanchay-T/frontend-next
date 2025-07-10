# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 portfolio website built with modern web technologies. The site showcases personal information, work experience, education, projects, certifications, hackathons, and publications with smooth animations and responsive design.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Radix UI primitives with custom styling
- **Animations**: Framer Motion with custom blur fade effects
- **Icons**: Lucide React, React Icons, Heroicons
- **Content**: MDX support for blog posts
- **Calendar**: Cal.com integration
- **Theming**: next-themes for dark/light mode

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### Core Structure

- `src/app/` - App Router pages and layouts
- `src/components/` - Reusable UI components
- `src/data/` - Static data (resume, blog content)
- `src/lib/` - Utility functions and API helpers
- `src/styles/` - Global styles and custom CSS
- `content/` - MDX blog posts
- `public/` - Static assets (images, videos)

### Key Components

- **BlurFade/BlurFadeText**: Custom animation components for smooth page transitions
- **ResumeCard**: Displays work experience and education entries
- **ProjectCard**: Showcases projects with links and media
- **CertificationsSection**: Grid layout for certifications
- **HackathonCard**: Timeline-style hackathon entries
- **ItemManager**: CRUD interface for items (in `/items` route)

### Data Management

All portfolio data is centralized in `src/data/resume.tsx` as a typed constant export. This includes:
- Personal information and contact details
- Work experience and education
- Skills, projects, and certifications
- Hackathons and publications

### Styling Approach

- Tailwind CSS for utility-first styling
- Custom CSS variables for consistent theming
- Responsive design with mobile-first approach
- Dark/light mode support via next-themes
- Component-based styling with Radix UI primitives

### Animation System

The site uses a custom animation system built on Framer Motion:
- `BlurFade` for element entrance animations
- `BlurFadeText` for text-specific animations
- Staggered delays for sequential animations
- Responsive animation handling

## Special Features

- **Cal.com Integration**: Embedded calendar for scheduling meetings
- **Blog System**: MDX-powered blog with syntax highlighting (reverted to original dillionverma template)
- **Responsive Media**: Adaptive video/image display
- **SEO Optimization**: Complete metadata and OpenGraph setup
- **Performance**: Optimized images and lazy loading
- **Mobile Responsive**: Fully responsive design with mobile-first approach

## Content Updates

To update portfolio content, modify the `DATA` object in `src/data/resume.tsx`. The structure is strongly typed, ensuring consistency across components.

## Recent Updates

- Fixed mobile responsiveness issues with resume cards and hero section
- Updated typography to casual/lowercase style for section headings
- Improved about section with better spacing and readability
- Added social links (Email) to navbar
- Reverted blog system to original simple template
- Fixed all blog runtime errors with proper null checking

## Testing

Currently no test framework is configured. When adding tests, consider using Jest with React Testing Library for component testing.