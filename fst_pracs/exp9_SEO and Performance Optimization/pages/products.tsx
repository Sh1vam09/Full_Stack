import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Amazing product with great features',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'High-quality product for your needs',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Premium product with excellent value',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
  },
]

export default function Products() {
  return (
    <>
      <Head>
        <title>Products - SEO & Performance Demo</title>
        <meta name="description" content="Browse our amazing collection of products" />
        <meta property="og:title" content="Our Products" />
        <meta property="og:type" content="website" />
      </Head>

      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1>Products</h1>
        <p>This page demonstrates image optimization using next/image component.</p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {products.map((product) => (
            <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div style={{ padding: '1rem' }}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/">Back to Home</Link>
        </div>
      </div>
    </>
  )
}
