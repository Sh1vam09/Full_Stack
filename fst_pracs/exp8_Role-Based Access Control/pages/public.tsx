import ProtectedRoute from '../components/ProtectedRoute'
import Link from 'next/link'

export default function PublicPage() {
  return (
    <ProtectedRoute>
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Public Page</h1>
        <p>This page is accessible to all authenticated users (Admin, User, Guest).</p>
        <Link href="/">Back to Home</Link>
      </div>
    </ProtectedRoute>
  )
}
