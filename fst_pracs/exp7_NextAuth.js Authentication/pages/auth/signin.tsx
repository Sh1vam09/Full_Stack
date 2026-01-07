import { signIn } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { getProviders } from 'next-auth'

export default function SignIn({ providers }: { providers: any }) {
  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Sign In</h1>
      <p>Choose an authentication provider:</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
        {providers && Object.values(providers).map((provider: any) => (
          <button
            key={provider.name}
            onClick={() => signIn(provider.id)}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: provider.id === 'google' ? '#4285f4' : '#24292e',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Sign in with {provider.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders()
  return {
    props: { providers: providers || {} },
  }
}
