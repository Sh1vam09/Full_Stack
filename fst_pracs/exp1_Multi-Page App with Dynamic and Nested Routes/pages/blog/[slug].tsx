import { useRouter } from 'next/router'
import Link from 'next/link'

export default function BlogPost() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Blog Post: {slug}</h1>
      <p>This demonstrates nested routing: /blog/[slug]</p>
      <p>Nested routes are created by organizing files in folders.</p>
      <div style={{ marginTop: '2rem' }}>
        <Link href="/blog">Back to Blog</Link>
      </div>
    </div>
  )
}
