# Experiment 5: Prisma ORM Integration

## Description
This experiment demonstrates database integration using Prisma ORM with SQLite.

## Setup
```bash
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

## Database Schema
- User model with id, name, email, createdAt, updatedAt
- Post model with relation to User

## Features
- Prisma Client for type-safe database access
- CRUD operations with Prisma
- SQLite database (can be changed to PostgreSQL/MySQL)

## Prisma Commands
- `npm run prisma:generate` - Generate Prisma Client
- `npm run prisma:migrate` - Run migrations
- `npm run prisma:studio` - Open Prisma Studio
