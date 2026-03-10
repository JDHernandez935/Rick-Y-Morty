interface PaginationProps {
  currentPage: number
  totalPages: number
  onNext: () => void
  onPrev: () => void
}

const Pagination = ({ currentPage, totalPages, onNext, onPrev }: PaginationProps) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'clamp(1rem, 4vw, 2rem)', marginTop: '3rem', flexWrap: 'wrap' }}>

      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.5rem clamp(0.75rem, 2vw, 1.5rem)',
          borderRadius: '0.75rem',
          background: 'transparent',
          border: '1px solid rgba(57,255,20,0.35)',
          color: '#39ff14',
          fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          opacity: currentPage === 1 ? 0.3 : 1,
          pointerEvents: currentPage === 1 ? 'none' : 'auto',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(57,255,20,0.08)'
          ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 16px rgba(57,255,20,0.15)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
          ;(e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'
        }}
      >
        <span>←</span> Prev
      </button>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem' }}>
        <span style={{
          fontFamily: "'Creepster', cursive",
          color: '#39ff14',
          textShadow: '0 0 10px rgba(57,255,20,0.5)',
          fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
          fontWeight: 700,
        }}>
          {currentPage}
          <span style={{ color: 'rgba(57,255,20,0.3)', margin: '0 0.4rem' }}>/</span>
          {totalPages}
        </span>
        <div style={{ width: 'clamp(60px, 10vw, 80px)', height: '3px', background: 'rgba(57,255,20,0.1)', borderRadius: '9999px', overflow: 'hidden' }}>
          <div style={{
            height: '100%',
            width: `${(currentPage / totalPages) * 100}%`,
            background: 'linear-gradient(to right, #39ff14, #00e676)',
            boxShadow: '0 0 6px #39ff14',
            borderRadius: '9999px',
            transition: 'width 0.3s ease',
          }} />
        </div>
      </div>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.5rem clamp(0.75rem, 2vw, 1.5rem)',
          borderRadius: '0.75rem',
          background: 'transparent',
          border: '1px solid rgba(57,255,20,0.35)',
          color: '#39ff14',
          fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          opacity: currentPage === totalPages ? 0.3 : 1,
          pointerEvents: currentPage === totalPages ? 'none' : 'auto',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(57,255,20,0.08)'
          ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 16px rgba(57,255,20,0.15)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
          ;(e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'
        }}
      >
        Next <span>→</span>
      </button>

    </div>
  )
}

export default Pagination