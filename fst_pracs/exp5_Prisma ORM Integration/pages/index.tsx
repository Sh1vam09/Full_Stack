import { useState, useEffect } from 'react'

interface User {
  id: number
  name: string
  email: string
  createdAt: string
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [editingUser, setEditingUser] = useState<User | null>(null)

  // Fetch all users (GET)
  const fetchUsers = async () => {
    try {
      const res = await fetch('/api/users')
      const data = await res.json()
      setUsers(data)
    } catch (error) {
      console.error('Error fetching users:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  // Create user (POST)
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setFormData({ name: '', email: '' })
        fetchUsers()
      } else {
        const error = await res.json()
        alert(error.error || 'Failed to create user')
      }
    } catch (error) {
      console.error('Error creating user:', error)
    }
  }

  // Update user (PUT)
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingUser) return
    try {
      const res = await fetch(`/api/users/${editingUser.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setEditingUser(null)
        setFormData({ name: '', email: '' })
        fetchUsers()
      } else {
        const error = await res.json()
        alert(error.error || 'Failed to update user')
      }
    } catch (error) {
      console.error('Error updating user:', error)
    }
  }

  // Delete user (DELETE)
  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this user?')) return
    try {
      const res = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        fetchUsers()
      } else {
        const error = await res.json()
        alert(error.error || 'Failed to delete user')
      }
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  const startEdit = (user: User) => {
    setEditingUser(user)
    setFormData({ name: user.name, email: user.email })
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Prisma ORM CRUD Operations</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        This demonstrates CRUD operations using Prisma ORM with SQLite database.
      </p>

      {/* Create/Update Form */}
      <form onSubmit={editingUser ? handleUpdate : handleCreate} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>{editingUser ? 'Update User' : 'Create User'}</h2>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem', marginRight: '0.5rem' }}>
          {editingUser ? 'Update' : 'Create'}
        </button>
        {editingUser && (
          <button type="button" onClick={() => { setEditingUser(null); setFormData({ name: '', email: '' }) }}>
            Cancel
          </button>
        )}
      </form>

      {/* Users List */}
      <h2>Users List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {users.map((user) => (
            <li key={user.id} style={{ padding: '1rem', marginBottom: '0.5rem', border: '1px solid #ddd', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>{user.name}</strong> - {user.email}
                <br />
                <small style={{ color: '#666' }}>Created: {new Date(user.createdAt).toLocaleString()}</small>
              </div>
              <div>
                <button onClick={() => startEdit(user)} style={{ marginRight: '0.5rem', padding: '0.25rem 0.5rem' }}>
                  Edit
                </button>
                <button onClick={() => handleDelete(user.id)} style={{ padding: '0.25rem 0.5rem', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
