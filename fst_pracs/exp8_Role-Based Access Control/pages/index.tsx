import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function Home() {
  const { data: session, status } = useSession()
  const userRole = (session?.user as any)?.role || 'guest'

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Role-Based Access Control Demo</h1>
      
      {session ? (
        <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h2>Welcome, {session.user?.name}!</h2>
          <p><strong>Role:</strong> {userRole}</p>
          <p><strong>Email:</strong> {session.user?.email}</p>
          
          <div style={{ marginTop: '2rem' }}>
            <h3>Available Pages:</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/public">Public Page (All users)</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/user">User Page (User, Admin)</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/admin">Admin Page (Admin only)</Link>
              </li>
            </ul>
          </div>

          <button
            onClick={() => signOut()}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
          <p>Please sign in to access protected pages.</p>
          <Link href="/auth/signin">
            <button
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#0070f3',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Sign In
            </button>
          </Link>
        </div>
      )}

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h3>Test Accounts:</h3>
        <ul>
          <li><strong>Admin:</strong> admin@example.com / admin123</li>
          <li><strong>User:</strong> user@example.com / user123</li>
          <li><strong>Guest:</strong> guest@example.com / guest123</li>
        </ul>
      </div>
    </div>
  )
}
