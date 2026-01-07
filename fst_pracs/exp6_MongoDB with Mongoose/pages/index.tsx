import { useState, useEffect } from 'react'

interface Product {
  _id: string
  name: string
  description: string
  price: number
  category: string
  inStock: boolean
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    inStock: true,
  })
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)

  // Fetch all products (GET)
  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products')
      const data = await res.json()
      if (data.success) {
        setProducts(data.data)
      }
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // Create product (POST)
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
        }),
      })
      const data = await res.json()
      if (data.success) {
        setFormData({ name: '', description: '', price: '', category: '', inStock: true })
        fetchProducts()
      } else {
        alert(data.error || 'Failed to create product')
      }
    } catch (error) {
      console.error('Error creating product:', error)
    }
  }

  // Update product (PUT)
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingProduct) return
    try {
      const res = await fetch(`/api/products/${editingProduct._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
        }),
      })
      const data = await res.json()
      if (data.success) {
        setEditingProduct(null)
        setFormData({ name: '', description: '', price: '', category: '', inStock: true })
        fetchProducts()
      } else {
        alert(data.error || 'Failed to update product')
      }
    } catch (error) {
      console.error('Error updating product:', error)
    }
  }

  // Delete product (DELETE)
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      })
      const data = await res.json()
      if (data.success) {
        fetchProducts()
      } else {
        alert(data.error || 'Failed to delete product')
      }
    } catch (error) {
      console.error('Error deleting product:', error)
    }
  }

  const startEdit = (product: Product) => {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      category: product.category,
      inStock: product.inStock,
    })
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>MongoDB Products Collection - CRUD Operations</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        This demonstrates CRUD operations using Mongoose with MongoDB.
      </p>

      {/* Create/Update Form */}
      <form onSubmit={editingProduct ? handleUpdate : handleCreate} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>{editingProduct ? 'Update Product' : 'Create Product'}</h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Product Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            style={{ padding: '0.5rem' }}
          />
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
            style={{ padding: '0.5rem', minHeight: '80px' }}
          />
          <input
            type="number"
            step="0.01"
            placeholder="Price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            required
            style={{ padding: '0.5rem' }}
          />
          <input
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            required
            style={{ padding: '0.5rem' }}
          />
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="checkbox"
              checked={formData.inStock}
              onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })}
            />
            In Stock
          </label>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <button type="submit" style={{ padding: '0.5rem 1rem', marginRight: '0.5rem' }}>
            {editingProduct ? 'Update' : 'Create'}
          </button>
          {editingProduct && (
            <button type="button" onClick={() => { setEditingProduct(null); setFormData({ name: '', description: '', price: '', category: '', inStock: true }) }}>
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Products List */}
      <h2>Products List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: 'grid', gap: '1rem' }}>
          {products.map((product) => (
            <div key={product._id} style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>{product.name}</h3>
                <p style={{ margin: '0 0 0.5rem 0', color: '#666' }}>{product.description}</p>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem' }}>
                  <span><strong>Price:</strong> ${product.price}</span>
                  <span><strong>Category:</strong> {product.category}</span>
                  <span><strong>Stock:</strong> {product.inStock ? 'In Stock' : 'Out of Stock'}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button onClick={() => startEdit(product)} style={{ padding: '0.25rem 0.5rem' }}>
                  Edit
                </button>
                <button onClick={() => handleDelete(product._id)} style={{ padding: '0.25rem 0.5rem', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
