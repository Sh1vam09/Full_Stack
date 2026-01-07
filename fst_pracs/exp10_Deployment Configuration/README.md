# Experiment 10: Deployment Configuration

## Description
This experiment demonstrates deployment configuration with environment variables and database integration (Supabase/PlanetScale).

## Setup

### Local Development
```bash
npm install

# Copy .env.example to .env.local and fill in your values
cp .env.example .env.local

# For Prisma setup
npx prisma generate
npx prisma migrate dev

npm run dev
```

## Environment Variables

### Public Variables (Browser Accessible)
- `NEXT_PUBLIC_APP_URL` - Application URL
- `NEXT_PUBLIC_API_URL` - API endpoint URL

### Server-Only Variables
- `DATABASE_URL` - Database connection string
- `NODE_ENV` - Environment (development/production)

## Deployment

### Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard:
   - `DATABASE_URL`
   - `NEXT_PUBLIC_APP_URL`
4. Deploy automatically

### Netlify
1. Push code to GitHub
2. Import project in Netlify
3. Add environment variables in Netlify dashboard
4. Set build command: `npm run build`
5. Set publish directory: `.next`

## Database Integration

### Supabase (PostgreSQL)
1. Create project at [supabase.com](https://supabase.com)
2. Get connection string from Settings → Database
3. Set `DATABASE_URL` in environment variables
4. Run migrations: `npx prisma migrate deploy`

### PlanetScale (MySQL)
1. Create database at [planetscale.com](https://planetscale.com)
2. Get connection string from dashboard
3. Update Prisma schema provider to `"mysql"`
4. Set `DATABASE_URL` in environment variables
5. Run migrations: `npx prisma migrate deploy`

## Security Notes
- Never commit `.env.local` to version control
- Use `.env.example` for documentation
- Prefix public variables with `NEXT_PUBLIC_`
- Validate environment variables at runtime
