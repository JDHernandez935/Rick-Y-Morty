interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-950 py-6 text-center shadow-md">
        <h1 className="text-3xl font-bold text-green-400 tracking-wide">Rick & Morty</h1>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}

export default MainLayout