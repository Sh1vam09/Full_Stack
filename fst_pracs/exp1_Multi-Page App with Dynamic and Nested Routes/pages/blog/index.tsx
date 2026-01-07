import Link from 'next/link'

const posts = [
  { id: 'first-post', title: 'First Blog Post' },
  { id: 'second-post', title: 'Second Blog Post' },
]

export default function Blog() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: '1rem' }}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Link href="/">Back to Home</Link>
    </div>
  )
}
