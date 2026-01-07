import type { NextApiRequest, NextApiResponse } from 'next'

// In-memory data store (replace with database in production)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'GET':
      // GET: Retrieve all users
      res.status(200).json(users)
      break

    case 'POST':
      // POST: Create a new user
      const { name, email } = req.body
      if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' })
      }
      const newUser = {
        id: users.length + 1,
        name,
        email,
      }
      users.push(newUser)
      res.status(201).json(newUser)
      break

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
