import Link from 'next/link'

export default function Unauthorized() {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>403 - Unauthorized</h1>
      <p style={{ color: '#dc3545', marginTop: '1rem' }}>
        You do not have permission to access this page.
      </p>
      <Link href="/">
        <button
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
      </Link>
    </div>
  )
}
