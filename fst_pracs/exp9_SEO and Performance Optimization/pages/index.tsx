import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>SEO & Performance Optimization - Home</title>
        <meta name="description" content="Learn about SEO and performance optimization in Next.js" />
        <meta property="og:title" content="SEO & Performance Optimization" />
        <meta property="og:description" content="Next.js SEO and Performance Demo" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1>SEO & Performance Optimization Demo</h1>
        
        <section style={{ marginTop: '2rem' }}>
          <h2>next/head for Metadata</h2>
          <p>
            The Head component from next/head allows you to add metadata to your pages.
            This improves SEO by providing search engines with information about your content.
          </p>
          <ul>
            <li>Page titles</li>
            <li>Meta descriptions</li>
            <li>Open Graph tags for social media</li>
            <li>Twitter cards</li>
            <li>Canonical URLs</li>
          </ul>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>next/image for Image Optimization</h2>
          <p>
            The Image component from next/image automatically optimizes images for performance:
          </p>
          <ul>
            <li>Lazy loading by default</li>
            <li>Automatic format optimization (WebP when supported)</li>
            <li>Responsive images with srcset</li>
            <li>Prevents layout shift</li>
          </ul>
          
          <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
                alt="Optimized image example"
                width={400}
                height={300}
                style={{ borderRadius: '8px' }}
                priority={false}
              />
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Lazy loaded image</p>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
                alt="Priority image example"
                width={400}
                height={300}
                style={{ borderRadius: '8px' }}
                priority={true}
              />
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Priority loaded image</p>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Performance Features</h2>
          <ul>
            <li><strong>Code Splitting:</strong> Automatic code splitting for optimal loading</li>
            <li><strong>Prefetching:</strong> Link prefetching for faster navigation</li>
            <li><strong>Static Generation:</strong> Pre-rendering pages at build time</li>
            <li><strong>Server-Side Rendering:</strong> Dynamic content rendering</li>
          </ul>
        </section>

        <nav style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <h3>Other Pages:</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/about">About Page (with custom metadata)</Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/products">Products Page (with optimized images)</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
