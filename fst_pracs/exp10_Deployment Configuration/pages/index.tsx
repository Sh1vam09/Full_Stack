import Head from 'next/head'
import { env } from '../lib/env'

export default function Home() {
  const appUrl = env.NEXT_PUBLIC_APP_URL
  const nodeEnv = env.NODE_ENV

  return (
    <>
      <Head>
        <title>Deployment Configuration Demo</title>
        <meta name="description" content="Next.js deployment with environment variables" />
      </Head>

      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Deployment Configuration Demo</h1>
        
        <section style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <h2>Environment Variables</h2>
          <p><strong>Current Environment:</strong> {nodeEnv}</p>
          <p><strong>App URL:</strong> {appUrl}</p>
          <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
            Note: Server-only environment variables (like DATABASE_URL) are not exposed to the browser.
          </p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Deployment Platforms</h2>
          
          <div style={{ marginTop: '1rem' }}>
            <h3>Vercel Deployment</h3>
            <ol>
              <li>Push your code to GitHub</li>
              <li>Import project in Vercel</li>
              <li>Add environment variables in Vercel dashboard</li>
              <li>Deploy automatically on push</li>
            </ol>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <h3>Netlify Deployment</h3>
            <ol>
              <li>Push your code to GitHub</li>
              <li>Import project in Netlify</li>
              <li>Add environment variables in Netlify dashboard</li>
              <li>Set build command: <code>npm run build</code></li>
              <li>Set publish directory: <code>.next</code></li>
            </ol>
          </div>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Database Integration</h2>
          
          <div style={{ marginTop: '1rem' }}>
            <h3>Supabase (PostgreSQL)</h3>
            <ul>
              <li>Create a project at supabase.com</li>
              <li>Get connection string from Settings → Database</li>
              <li>Set DATABASE_URL in environment variables</li>
              <li>Run migrations: <code>npx prisma migrate deploy</code></li>
            </ul>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <h3>PlanetScale (MySQL)</h3>
            <ul>
              <li>Create a database at planetscale.com</li>
              <li>Get connection string from dashboard</li>
              <li>Set DATABASE_URL in environment variables</li>
              <li>Update Prisma schema provider to "mysql"</li>
              <li>Run migrations: <code>npx prisma migrate deploy</code></li>
            </ul>
          </div>
        </section>

        <section style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#fff3cd', borderRadius: '8px' }}>
          <h2>Security Best Practices</h2>
          <ul>
            <li>Never commit .env.local to version control</li>
            <li>Use .env.example for documentation</li>
            <li>Prefix public variables with NEXT_PUBLIC_</li>
            <li>Use server-only variables for sensitive data</li>
            <li>Validate environment variables at runtime</li>
          </ul>
        </section>
      </div>
    </>
  )
}
