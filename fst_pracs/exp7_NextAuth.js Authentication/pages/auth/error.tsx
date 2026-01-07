import { useRouter } from 'next/router'

export default function AuthError() {
  const router = useRouter()
  const { error } = router.query

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Authentication Error</h1>
      <p style={{ color: '#dc3545', marginTop: '1rem' }}>
        {error === 'Configuration' && 'There is a problem with the server configuration.'}
        {error === 'AccessDenied' && 'You do not have permission to sign in.'}
        {error === 'Verification' && 'The verification token has expired or has already been used.'}
        {!error && 'An error occurred during authentication.'}
      </p>
      <button
        onClick={() => router.push('/')}
        style={{
          marginTop: '2rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Go Back Home
      </button>
    </div>
  )
}
