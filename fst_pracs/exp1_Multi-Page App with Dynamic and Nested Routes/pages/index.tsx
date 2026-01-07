import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to Multi-Page Application</h1>
      <nav style={{ marginTop: '2rem' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1rem' }}>
            <Link href="/about">About Page</Link>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <Link href="/products">Products List</Link>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <Link href="/products/1">Product 1 (Dynamic Route)</Link>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <Link href="/blog">Blog (Nested Routes)</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
