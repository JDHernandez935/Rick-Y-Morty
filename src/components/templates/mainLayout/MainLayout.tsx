interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <div className="portal-bg">
        <div className="portal-orb" />
      </div>
      <div className="relative z-10 min-h-screen">
        <header style={{ paddingTop: '2rem', paddingBottom: '0.5rem', textAlign: 'center' }}>
          <h1
            style={{
              fontFamily: "'Creepster', cursive",
              color: '#39ff14',
              textShadow: '0 0 20px #39ff14, 0 0 40px #00e676',
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Rick & Morty
          </h1>
          <p style={{
            color: '#166534',
            fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)',
            marginTop: '0.25rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}>
            Interdimensional Database
          </p>
        </header>

        <main style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 clamp(0.75rem, 3vw, 1.5rem) 4rem',
        }}>
          {children}
        </main>
      </div>
    </>
  )
}

export default MainLayout