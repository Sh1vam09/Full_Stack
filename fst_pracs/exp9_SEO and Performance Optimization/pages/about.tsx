import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - SEO & Performance Demo</title>
        <meta name="description" content="Learn more about our company and mission" />
        <meta property="og:title" content="About Us" />
        <meta property="og:description" content="Learn more about our company" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Head>

      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>About Us</h1>
        <p>
          This page demonstrates custom metadata using next/head. Each page can have
          its own unique title, description, and Open Graph tags for better SEO.
        </p>
        <section style={{ marginTop: '2rem' }}>
          <h2>SEO Best Practices</h2>
          <ul>
            <li>Unique title tags for each page</li>
            <li>Descriptive meta descriptions</li>
            <li>Structured data markup</li>
            <li>Canonical URLs</li>
            <li>Proper heading hierarchy</li>
          </ul>
        </section>
      </div>
    </>
  )
}
