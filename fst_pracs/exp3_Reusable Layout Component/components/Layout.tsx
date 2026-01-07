import Link from 'next/link'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  title?: string
}

export default function Layout({ children, title = 'My App' }: LayoutProps) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        padding: '1rem 2rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem' }}>{title}</h1>
          <nav>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem', margin: 0, padding: 0 }}>
              <li>
                <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
              </li>
              <li>
                <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#2a2a2a',
        color: 'white',
        padding: '2rem',
        textAlign: 'center',
        marginTop: 'auto'
      }}>
        <p style={{ margin: 0 }}>© 2024 My App. All rights reserved.</p>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#aaa' }}>
          This layout component ensures consistent UI across all pages.
        </p>
      </footer>
    </div>
  )
}
