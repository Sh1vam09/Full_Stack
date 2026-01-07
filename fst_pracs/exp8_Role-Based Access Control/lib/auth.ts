import { getServerSession } from 'next-auth'
import { authOptions } from '../pages/api/auth/[...nextauth]'

export type UserRole = 'admin' | 'user' | 'guest'

export async function getSession() {
  return await getServerSession(authOptions)
}

export async function getCurrentUser() {
  const session = await getSession()
  return session?.user
}

export async function requireAuth() {
  const session = await getSession()
  if (!session) {
    throw new Error('Unauthorized')
  }
  return session
}

export async function requireRole(allowedRoles: UserRole[]) {
  const session = await requireAuth()
  const userRole = (session.user as any)?.role as UserRole
  
  if (!allowedRoles.includes(userRole)) {
    throw new Error('Forbidden: Insufficient permissions')
  }
  
  return session
}
