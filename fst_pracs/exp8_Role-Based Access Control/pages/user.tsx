import ProtectedRoute from '../components/ProtectedRoute'
import Link from 'next/link'

export default function UserPage() {
  return (
    <ProtectedRoute allowedRoles={['user', 'admin']}>
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>User Page</h1>
        <p>This page is accessible to Users and Admins only.</p>
        <p>Guests cannot access this page.</p>
        <Link href="/">Back to Home</Link>
      </div>
    </ProtectedRoute>
  )
}
