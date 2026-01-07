import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Protected() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/')
    }
  }, [status, router])

  if (status === 'loading') {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>
  }

  if (!session) {
    return null
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Protected Page</h1>
      <p>This page is only accessible to authenticated users.</p>
      <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>Session Information</h2>
        <pre style={{ backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <a href="/" style={{ color: '#0070f3' }}>Back to Home</a>
      </div>
    </div>
  )
}
