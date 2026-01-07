import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  const { id } = req.query
  const userId = parseInt(id as string)

  switch (method) {
    case 'GET':
      // GET: Retrieve a specific user
      try {
        const user = await prisma.user.findUnique({
          where: { id: userId },
        })
        if (!user) {
          return res.status(404).json({ error: 'User not found' })
        }
        res.status(200).json(user)
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user' })
      }
      break

    case 'PUT':
      // PUT: Update a user
      try {
        const { name, email } = req.body
        const user = await prisma.user.update({
          where: { id: userId },
          data: {
            ...(name && { name }),
            ...(email && { email }),
          },
        })
        res.status(200).json(user)
      } catch (error: any) {
        if (error.code === 'P2025') {
          res.status(404).json({ error: 'User not found' })
        } else if (error.code === 'P2002') {
          res.status(400).json({ error: 'Email already exists' })
        } else {
          res.status(500).json({ error: 'Failed to update user' })
        }
      }
      break

    case 'DELETE':
      // DELETE: Delete a user
      try {
        await prisma.user.delete({
          where: { id: userId },
        })
        res.status(200).json({ message: 'User deleted successfully' })
      } catch (error: any) {
        if (error.code === 'P2025') {
          res.status(404).json({ error: 'User not found' })
        } else {
          res.status(500).json({ error: 'Failed to delete user' })
        }
      }
      break

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
