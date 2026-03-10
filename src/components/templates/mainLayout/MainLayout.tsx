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
        <header className="py-8 text-center">
          <h1
            className="text-5xl font-bold tracking-widest uppercase"
            style={{
              fontFamily: "'Creepster', cursive",
              color: '#39ff14',
              textShadow: '0 0 20px #39ff14, 0 0 40px #00e676',
            }}
          >
            Rick & Morty
          </h1>
          <p className="text-green-600 text-sm mt-1 tracking-widest uppercase">
            Interdimensional Database
          </p>
        </header>
        <main className="max-w-7xl mx-auto px-4 py-4 pb-16">
          {children}
        </main>
      </div>
    </>
  )
}

export default MainLayout