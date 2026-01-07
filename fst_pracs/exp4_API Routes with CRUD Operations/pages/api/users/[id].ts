import type { NextApiRequest, NextApiResponse } from 'next'

// In-memory data store (replace with database in production)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  const { id } = req.query
  const userId = parseInt(id as string)

  switch (method) {
    case 'GET':
      // GET: Retrieve a specific user
      const user = users.find((u) => u.id === userId)
      if (!user) {
        return res.status(404).json({ error: 'User not found' })
      }
      res.status(200).json(user)
      break

    case 'PUT':
      // PUT: Update a user
      const { name, email } = req.body
      const userIndex = users.findIndex((u) => u.id === userId)
      if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' })
      }
      users[userIndex] = {
        ...users[userIndex],
        name: name || users[userIndex].name,
        email: email || users[userIndex].email,
      }
      res.status(200).json(users[userIndex])
      break

    case 'DELETE':
      // DELETE: Delete a user
      const deleteIndex = users.findIndex((u) => u.id === userId)
      if (deleteIndex === -1) {
        return res.status(404).json({ error: 'User not found' })
      }
      users.splice(deleteIndex, 1)
      res.status(200).json({ message: 'User deleted successfully' })
      break

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
