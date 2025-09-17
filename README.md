# Landing Page Boilerplate

A modern landing page boilerplate built with React, TypeScript, and Express.js. This application provides a full-stack solution for creating responsive landing pages and institutional websites with a contact form functionality.

## Features

- **Modern UI**: Clean, modern design system using shadcn/ui components and TailwindCSS
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Theme Support**: Built-in theme switching capabilities
- **Contact Form**: Functional contact form with validation
- **Analytics**: Built-in analytics tracking
- **TypeScript**: Full TypeScript support for type safety

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- TailwindCSS for styling
- shadcn/ui component library
- Wouter for routing
- React Query for state management
- React Hook Form with Zod validation

### Backend
- Express.js with TypeScript
- RESTful API design
- Zod schemas for validation
- Drizzle ORM for database operations

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Start production server:
   ```bash
   npm start
   ```

## Deployment

This project is configured for deployment on Vercel:

1. Connect your repository to Vercel
2. The build process will automatically run `npm run build`
3. The application will be deployed with the configuration in `vercel.json`

## Project Structure

```
├── client/          # Frontend React application
├── server/          # Backend Express server
├── shared/          # Shared types and schemas
├── dist/            # Build output
└── vercel.json      # Vercel deployment configuration
```

## License

MIT
