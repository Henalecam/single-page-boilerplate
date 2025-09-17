# Overview

This is a modern landing page boilerplate built with React, TypeScript, and Express.js. The application provides a full-stack solution for creating responsive landing pages and institutional websites with a contact form functionality. It features a clean, modern design system using shadcn/ui components and TailwindCSS, with built-in analytics tracking and theme switching capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend follows a modern React architecture using:
- **Component Library**: shadcn/ui with Radix UI primitives for accessibility
- **Styling**: TailwindCSS with CSS variables for theming support
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query for server state and React Context for UI state
- **Form Handling**: React Hook Form with Zod validation for type-safe forms
- **Build Tool**: Vite for development and production builds

## Backend Architecture
The backend uses a simple Express.js server with:
- **Storage Pattern**: Interface-based storage abstraction with in-memory implementation
- **API Design**: RESTful endpoints with proper error handling and logging
- **Validation**: Zod schemas shared between frontend and backend
- **Development Setup**: Hot reload with Vite middleware integration

## Data Storage Solutions
Currently implements in-memory storage with an interface-based design:
- **IStorage Interface**: Abstracts data operations for easy migration to persistent storage
- **Schema Definition**: Drizzle ORM schemas prepared for PostgreSQL migration
- **Data Models**: User management and contact message handling

## Authentication and Authorization
Basic user model infrastructure is in place but not currently implemented:
- User schema with username/password fields
- Storage methods for user creation and retrieval
- Ready for session-based or JWT authentication implementation

## Component Structure
- **Layout Components**: Navbar, Footer with responsive design
- **Section Components**: Hero, Services, Testimonials, Contact with smooth scrolling
- **UI Components**: Comprehensive design system with consistent styling
- **Form Components**: Contact form with validation and submission handling

# External Dependencies

## UI and Styling
- **@radix-ui/***: Headless UI components for accessibility and behavior
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variants
- **lucide-react**: Icon library

## State Management and Data Fetching
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Form validation resolvers

## Database and Validation
- **drizzle-orm**: Type-safe ORM for PostgreSQL
- **drizzle-zod**: Automatic schema validation generation
- **@neondatabase/serverless**: PostgreSQL database driver
- **zod**: Runtime type validation

## Development and Build Tools
- **vite**: Build tool and development server
- **@vitejs/plugin-react**: React plugin for Vite
- **tsx**: TypeScript execution for development
- **esbuild**: JavaScript bundler for production builds

## Analytics and Tracking
- **Google Analytics**: Integrated via gtag for user behavior tracking
- **wouter**: Lightweight routing with page view tracking

## Utilities and Helpers
- **date-fns**: Date manipulation and formatting
- **clsx & tailwind-merge**: Conditional className utilities
- **nanoid**: Unique ID generation
- **cmdk**: Command palette functionality

## Replit-Specific Integrations
- **@replit/vite-plugin-***: Development experience enhancements for Replit environment