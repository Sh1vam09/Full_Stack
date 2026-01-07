import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'
import { env } from '../../../lib/env'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Example: Using environment variables
  if (env.NODE_ENV === 'production' && !env.DATABASE_URL) {
    return res.status(500).json({ error: 'Database not configured' })
  }

  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const posts = await prisma.post.findMany({
          orderBy: { createdAt: 'desc' },
        })
        res.status(200).json(posts)
      } catch (error) {
        console.error('Database error:', error)
        res.status(500).json({ error: 'Failed to fetch posts' })
      }
      break

    case 'POST':
      try {
        const { title, content } = req.body
        if (!title || !content) {
          return res.status(400).json({ error: 'Title and content are required' })
        }
        const post = await prisma.post.create({
          data: { title, content },
        })
        res.status(201).json(post)
      } catch (error) {
        console.error('Database error:', error)
        res.status(500).json({ error: 'Failed to create post' })
      }
      break

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
