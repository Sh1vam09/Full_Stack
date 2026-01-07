import Link from 'next/link'

const products = [
  { id: 1, name: 'Product 1', price: '$99' },
  { id: 2, name: 'Product 2', price: '$149' },
  { id: 3, name: 'Product 3', price: '$199' },
]

export default function Products() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Products List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: '1rem' }}>
            <Link href={`/products/${product.id}`}>
              {product.name} - {product.price}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/">Back to Home</Link>
    </div>
  )
}
