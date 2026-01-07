import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, ReactNode } from 'react'

type UserRole = 'admin' | 'user' | 'guest'

interface ProtectedRouteProps {
  children: ReactNode
  allowedRoles?: UserRole[]
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
      return
    }

    if (status === 'authenticated' && allowedRoles) {
      const userRole = (session?.user as any)?.role as UserRole
      if (!allowedRoles.includes(userRole)) {
        router.push('/unauthorized')
      }
    }
  }, [status, session, allowedRoles, router])

  if (status === 'loading') {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>
  }

  if (status === 'unauthenticated') {
    return null
  }

  if (allowedRoles) {
    const userRole = (session?.user as any)?.role as UserRole
    if (!allowedRoles.includes(userRole)) {
      return null
    }
  }

  return <>{children}</>
}
