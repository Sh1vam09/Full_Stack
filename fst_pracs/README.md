# Next.js Practicals - Full Stack Training

This repository contains 10 complete Next.js experiments covering the full syllabus for Next.js practical training.

## Project Structure

```
fst_pracs/
├── exp1/  - Multi-Page App with Dynamic and Nested Routes
├── exp2/  - Responsive Web Design with Tailwind CSS
├── exp3/  - Reusable Layout Component
├── exp4/  - API Routes with CRUD Operations
├── exp5/  - Prisma ORM Integration
├── exp6/  - MongoDB with Mongoose
├── exp7/  - NextAuth.js Authentication
├── exp8/  - Role-Based Access Control
├── exp9/  - SEO and Performance Optimization
└── exp10/ - Deployment Configuration
```

## Quick Start

Each experiment is a standalone Next.js project. To run any experiment:

```bash
cd exp1  # or exp2, exp3, etc.
npm install
npm run dev
```

## Experiments Overview

### Experiment 1: Multi-Page App with Dynamic and Nested Routes
- Static pages
- Dynamic routes with [id]
- Nested routes (blog/[slug])
- File-based routing system

### Experiment 2: Responsive Web Design with Tailwind CSS
- Tailwind CSS integration
- Responsive grid layouts
- Responsive typography
- Mobile-first design

### Experiment 3: Reusable Layout Component
- Shared layout component
- Consistent header and footer
- Navigation component
- Global styling

### Experiment 4: API Routes with CRUD Operations
- GET, POST, PUT, DELETE endpoints
- RESTful API design
- Error handling
- In-memory data store

### Experiment 5: Prisma ORM Integration
- Prisma setup and configuration
- Database schema definition
- CRUD operations with Prisma
- SQLite database (can switch to PostgreSQL/MySQL)

### Experiment 6: MongoDB with Mongoose
- Mongoose ODM setup
- Product model with validation
- MongoDB connection pooling
- CRUD operations on Products collection

### Experiment 7: NextAuth.js Authentication
- Google OAuth integration
- GitHub OAuth integration
- Session management
- Protected routes

### Experiment 8: Role-Based Access Control
- Admin, User, Guest roles
- Protected routes by role
- Secure session management
- API route protection

### Experiment 9: SEO and Performance Optimization
- Metadata with next/head
- Image optimization with next/image
- Open Graph tags
- Twitter cards
- Lazy loading

### Experiment 10: Deployment Configuration
- Environment variables setup
- Vercel deployment config
- Netlify deployment config
- Supabase integration
- PlanetScale integration

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- For database experiments: MongoDB, PostgreSQL, or MySQL
- For OAuth: Google and GitHub developer accounts

## Common Setup Steps

1. **Install dependencies**: `npm install`
2. **Set up environment variables**: Copy `.env.example` to `.env.local` and fill in values
3. **Run database migrations** (if applicable): `npx prisma migrate dev` or MongoDB setup
4. **Start development server**: `npm run dev`

## Notes

- Each experiment is independent and can be run separately
- Some experiments require environment variables (see individual README files)
- Database experiments require database setup before running
- OAuth experiments require API keys from providers

## Syllabus Coverage

This project covers all modules from the Next.js syllabus:

- ✅ Module 1: Introduction to Next.js and Routing
- ✅ Module 2: Styling and UI Design
- ✅ Module 3: Data Fetching and API Routes
- ✅ Module 4: Database Integration
- ✅ Module 5: Authentication and Authorization
- ✅ Module 6: Performance Optimization, SEO, and Deployment

## License

This project is for educational purposes.
