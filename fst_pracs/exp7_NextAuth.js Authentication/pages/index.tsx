import { useSession, signIn, signOut } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>NextAuth.js Authentication Demo</h1>
      
      {session ? (
        <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h2>Welcome, {session.user?.name}!</h2>
          <p>You are signed in via {session.provider || 'OAuth'}.</p>
          <div style={{ marginTop: '1rem' }}>
            <p><strong>Email:</strong> {session.user?.email}</p>
            {session.user?.image && (
              <img 
                src={session.user.image} 
                alt="Profile" 
                style={{ width: '100px', height: '100px', borderRadius: '50%', marginTop: '1rem' }}
              />
            )}
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
          <h2>Please sign in</h2>
          <p>Choose an authentication provider:</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button
              onClick={() => signIn('google')}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#4285f4',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Sign in with Google
            </button>
            <button
              onClick={() => signIn('github')}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#24292e',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Sign in with GitHub
            </button>
          </div>
        </div>
      )}

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h3>Protected Page Example</h3>
        <p>
          <a href="/protected" style={{ color: '#0070f3' }}>
            Visit Protected Page
          </a>
        </p>
      </div>
    </div>
  )
}
