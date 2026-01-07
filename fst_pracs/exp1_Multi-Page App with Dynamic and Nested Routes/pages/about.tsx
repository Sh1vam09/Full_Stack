import Link from 'next/link'

export default function About() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>About Page</h1>
      <p>This is a static about page demonstrating basic routing in Next.js.</p>
      <Link href="/">Back to Home</Link>
    </div>
  )
}
