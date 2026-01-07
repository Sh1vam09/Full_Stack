import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'GET':
      // GET: Retrieve all users
      try {
        const users = await prisma.user.findMany()
        res.status(200).json(users)
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' })
      }
      break

    case 'POST':
      // POST: Create a new user
      try {
        const { name, email } = req.body
        if (!name || !email) {
          return res.status(400).json({ error: 'Name and email are required' })
        }
        const user = await prisma.user.create({
          data: { name, email },
        })
        res.status(201).json(user)
      } catch (error: any) {
        if (error.code === 'P2002') {
          res.status(400).json({ error: 'Email already exists' })
        } else {
          res.status(500).json({ error: 'Failed to create user' })
        }
      }
      break

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
