import { useRouter } from 'next/router'
import Link from 'next/link'

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Product Detail Page</h1>
      <p>This is a dynamic route showing product ID: <strong>{id}</strong></p>
      <p>Dynamic routes use square brackets [id].tsx in the filename.</p>
      <div style={{ marginTop: '2rem' }}>
        <Link href="/products">Back to Products</Link>
      </div>
    </div>
  )
}
