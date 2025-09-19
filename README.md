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
- In-memory storage (easily replaceable with database)

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

### Vercel (Recommended)

This project is optimized for deployment on Vercel:

#### Prerequisites
- GitHub repository
- Vercel account

#### Deploy Steps

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the configuration

3. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete
   - Access your live site

#### Configuration
- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`
- **Node.js Version**: 18.x

#### Environment Variables
Copy `.env.example` to `.env.local` for local development. No environment variables are required for basic functionality.

#### URLs
- **Frontend**: `https://your-project.vercel.app/`
- **API**: `https://your-project.vercel.app/api/contact`

### Other Platforms

This project can also be deployed on:
- Netlify
- Railway
- Render
- Any Node.js hosting platform

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
