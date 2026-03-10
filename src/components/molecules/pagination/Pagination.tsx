interface PaginationProps {
  currentPage: number
  totalPages: number
  onNext: () => void
  onPrev: () => void
}

const Pagination = ({ currentPage, totalPages, onNext, onPrev }: PaginationProps) => {
  return (
    <div className="flex justify-center items-center gap-8 mt-12">

      {/* Botón Prev */}
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className="group flex items-center gap-2 px-6 py-2 rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
        style={{
          background: 'transparent',
          border: '1px solid rgba(57,255,20,0.35)',
          color: '#39ff14',
        }}
        onMouseEnter={e => {
          if (currentPage === 1) return
          const btn = e.currentTarget as HTMLButtonElement
          btn.style.background = 'rgba(57,255,20,0.08)'
          btn.style.boxShadow = '0 0 16px rgba(57,255,20,0.15)'
        }}
        onMouseLeave={e => {
          const btn = e.currentTarget as HTMLButtonElement
          btn.style.background = 'transparent'
          btn.style.boxShadow = 'none'
        }}
      >
        <span style={{ fontSize: '1rem' }}>←</span>
        Prev
      </button>

      {/* Contador */}
      <div className="flex flex-col items-center gap-1">
        <span
          className="text-2xl font-bold"
          style={{
            fontFamily: "'Creepster', cursive",
            color: '#39ff14',
            textShadow: '0 0 10px rgba(57,255,20,0.5)',
          }}
        >
          {currentPage}
          <span style={{ color: 'rgba(57,255,20,0.3)', margin: '0 0.4rem' }}>/</span>
          {totalPages}
        </span>
        {/* Barra de progreso */}
        <div
          className="rounded-full overflow-hidden"
          style={{ width: '80px', height: '3px', background: 'rgba(57,255,20,0.1)' }}
        >
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${(currentPage / totalPages) * 100}%`,
              background: 'linear-gradient(to right, #39ff14, #00e676)',
              boxShadow: '0 0 6px #39ff14',
            }}
          />
        </div>
      </div>

      {/* Botón Next */}
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 px-6 py-2 rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
        style={{
          background: 'transparent',
          border: '1px solid rgba(57,255,20,0.35)',
          color: '#39ff14',
        }}
        onMouseEnter={e => {
          if (currentPage === totalPages) return
          const btn = e.currentTarget as HTMLButtonElement
          btn.style.background = 'rgba(57,255,20,0.08)'
          btn.style.boxShadow = '0 0 16px rgba(57,255,20,0.15)'
        }}
        onMouseLeave={e => {
          const btn = e.currentTarget as HTMLButtonElement
          btn.style.background = 'transparent'
          btn.style.boxShadow = 'none'
        }}
      >
        Next
        <span style={{ fontSize: '1rem' }}>→</span>
      </button>

    </div>
  )
}

export default Pagination