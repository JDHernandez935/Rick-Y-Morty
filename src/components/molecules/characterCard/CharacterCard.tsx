import { useState } from 'react'
import Badge from '../../atoms/badge/Badge'
import type { Character } from '../../../types/api.types'

interface CharacterCardProps {
  character: Character
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const [flipped, setFlipped] = useState(false)
  const { name, image, status, species, gender, origin, location } = character

  return (
    <div
      className={`card-flip cursor-pointer ${flipped ? 'flipped' : ''}`}
      style={{ aspectRatio: '3/4' }}
      onClick={() => setFlipped(prev => !prev)}
    >
      <div className="card-flip-inner">

        {/* ── FRENTE ── */}
        <div
          className="card-front"
          style={{
            border: '1px solid rgba(57, 255, 20, 0.25)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.6)',
          }}
        >
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Status badge */}
          <div className="absolute top-3 right-3 z-10">
            <Badge status={status} />
          </div>

          {/* Gradiente + info */}
          <div
            className="absolute bottom-0 left-0 right-0 z-10"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)',
              padding: '2rem 0.75rem 0.75rem',
            }}
          >
            <div className="flex items-center justify-center gap-1 mb-1">
              <span style={{ color: '#39ff14', fontWeight: 700, fontSize: '0.9rem' }}>[</span>
              <p className="font-bold truncate text-white text-sm text-center">{name}</p>
              <span style={{ color: '#39ff14', fontWeight: 700, fontSize: '0.9rem' }}>]</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <span style={{ color: 'rgba(57,255,20,0.5)', fontSize: '0.75rem' }}>[</span>
              <p className="text-xs truncate text-center" style={{ color: 'rgba(255,255,255,0.55)' }}>{species}</p>
              <span style={{ color: 'rgba(57,255,20,0.5)', fontSize: '0.75rem' }}>]</span>
            </div>
          </div>
        </div>

        {/* ── REVERSO ── */}
        <div
          className="card-back flex flex-col items-center justify-center gap-4 px-4"
          style={{
            background: 'linear-gradient(145deg, #071a07, #030d03)',
            border: '1px solid rgba(57, 255, 20, 0.25)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.6)',
          }}
        >
          {/* Nombre en el reverso */}
          <h3
            className="text-center font-bold text-base mb-2"
            style={{ color: '#39ff14', fontFamily: "'Creepster', cursive", letterSpacing: '0.1em' }}
          >
            {name}
          </h3>

          {/* Detalles */}
          <div className="flex flex-col items-center gap-3 w-full">
            {[
              { label: 'Gender', value: gender },
              { label: 'Origin', value: origin.name },
              { label: 'Location', value: location.name },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col items-center gap-1 w-full">
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: 'rgba(57,255,20,0.5)' }}
                >
                  {label}
                </span>
                <span
                  className="text-xs text-center font-semibold"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  {value}
                </span>
                <div style={{ borderTop: '1px solid rgba(57,255,20,0.1)', width: '60%' }} />
              </div>
            ))}
          </div>

          {/* Botón See more */}
          <button
            className="mt-4 px-5 py-2 rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-200"
            style={{
              background: 'transparent',
              border: '1px solid rgba(57,255,20,0.4)',
              color: '#39ff14',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(57,255,20,0.1)'
              ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 12px rgba(57,255,20,0.2)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
              ;(e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'
            }}
            onClick={e => e.stopPropagation()}
          >
            View Details
          </button>
        </div>

      </div>
    </div>
  )
}

export default CharacterCard