// Environment variable validation and access
// This ensures required env vars are present at build time

export const env = {
  // Public environment variables (accessible in browser)
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000/api',
  
  // Server-only environment variables
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV || 'development',
  
  // Validate required variables
  validate() {
    if (!this.DATABASE_URL && process.env.NODE_ENV === 'production') {
      throw new Error('DATABASE_URL is required in production')
    }
  },
}

// Validate on import in production
if (process.env.NODE_ENV === 'production') {
  env.validate()
}
