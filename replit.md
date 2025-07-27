# Overview

This is a React-based portfolio website for Paola Pappacena, an illustrator specializing in nature, education, and children's content. The application is built as a modern full-stack web application with a React frontend and Express.js backend, using TypeScript throughout.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side navigation
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom color variables for brand consistency
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ESM (ES Modules)
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for server bundling

## Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Designed for PostgreSQL (via Neon serverless)
- **Migrations**: Drizzle Kit for schema management
- **Schema Location**: Shared between client and server in `/shared/schema.ts`

# Key Components

## Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/   # UI components (layout, sections, ui)
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utilities and query client
│   │   └── pages/        # Page components
├── server/           # Express backend
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer
│   └── vite.ts       # Development server integration
├── shared/           # Shared types and schemas
└── migrations/       # Database migrations
```

## UI Component System
- Built on Shadcn/ui component library
- Radix UI primitives for accessibility
- Tailwind CSS for styling with custom design tokens
- Custom color palette for the illustrator's brand (warm browns, sage greens, terracotta)

## Data Layer
- In-memory storage implementation (MemStorage) for development
- User management system with basic CRUD operations
- Designed to be easily replaceable with database-backed storage

# Data Flow

## Frontend to Backend
- API requests through custom `apiRequest` utility
- TanStack Query for caching and state management
- RESTful API structure with `/api` prefix

## Database Integration
- Drizzle ORM with PostgreSQL
- Schema-first approach with Zod validation
- Type-safe database operations
- Migrations managed through Drizzle Kit

## Development Workflow
- Vite dev server with HMR for React
- Express server with automatic TypeScript compilation
- Shared types between frontend and backend

# External Dependencies

## Core Technologies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Framework**: Radix UI components, Tailwind CSS
- **Backend**: Express.js, TypeScript
- **Database**: Drizzle ORM, PostgreSQL, Neon serverless
- **Build Tools**: Vite, esbuild, tsx

## Key Libraries
- **TanStack Query**: Server state management
- **Wouter**: Lightweight routing
- **Date-fns**: Date manipulation
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variants
- **Zod**: Schema validation

# Deployment Strategy

## Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles server to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` command

## Environment Configuration
- Development: Node.js with tsx for TypeScript execution
- Production: Compiled JavaScript with Node.js
- Database: PostgreSQL via environment variable `DATABASE_URL`

## Static Assets
- Images served from external sources (Unsplash, Pixabay)
- Fonts loaded from Google Fonts CDN
- Responsive design with mobile-first approach

## Portfolio-Specific Features
- Single-page application with smooth scrolling navigation
- Portfolio gallery with category filtering
- Contact form with validation
- Blog section for creative content
- Responsive design optimized for showcasing visual content