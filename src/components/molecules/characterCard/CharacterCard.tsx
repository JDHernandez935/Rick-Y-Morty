import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Badge from '../../atoms/badge/Badge'
import type { Character } from '../../../types/api.types'

interface CharacterCardProps {
  character: Character
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const [flipped, setFlipped] = useState(false)
  const navigate = useNavigate()
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
            pointerEvents: flipped ? 'none' : 'auto',
          }}
        >
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 z-10">
            <Badge status={status} />
          </div>
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
          className="card-back"
          style={{
            background: 'linear-gradient(145deg, #071a07, #030d03)',
            border: '1px solid rgba(57, 255, 20, 0.25)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.6)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(0.5rem, 3%, 1rem)',
            gap: 'clamp(0.25rem, 2%, 0.5rem)',
            overflow: 'hidden',
            pointerEvents: flipped ? 'auto' : 'none',
          }}
        >
          <h3 style={{
            color: '#39ff14',
            fontFamily: "'Creepster', cursive",
            letterSpacing: '0.08em',
            textAlign: 'center',
            fontSize: 'clamp(0.75rem, 3.5vw, 1rem)',
            lineHeight: 1.2,
            width: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {name}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(0.2rem, 2%, 0.4rem)', width: '100%' }}>
            {[
              { label: 'Gender', value: gender },
              { label: 'Origin', value: origin.name },
              { label: 'Location', value: location.name },
            ].map(({ label, value }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <span style={{
                  color: 'rgba(57,255,20,0.55)',
                  fontSize: 'clamp(0.5rem, 1.8vw, 0.65rem)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}>
                  {label}
                </span>
                <span style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: 'clamp(0.55rem, 2vw, 0.75rem)',
                  fontWeight: 600,
                  textAlign: 'center',
                  width: '100%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  padding: '0 0.25rem',
                }}>
                  {value}
                </span>
                <div style={{ marginTop: '0.2rem', borderTop: '1px solid rgba(57,255,20,0.1)', width: '70%' }} />
              </div>
            ))}
          </div>

          {/* Botón View Details */}
          <button
            style={{
              marginTop: 'clamp(0.25rem, 2%, 0.5rem)',
              padding: 'clamp(0.25rem, 2%, 0.4rem) clamp(0.5rem, 4%, 1rem)',
              borderRadius: '0.5rem',
              background: 'transparent',
              border: '1px solid rgba(57,255,20,0.4)',
              color: '#39ff14',
              fontSize: 'clamp(0.5rem, 1.8vw, 0.7rem)',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(57,255,20,0.1)'
              ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 12px rgba(57,255,20,0.2)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
              ;(e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'
            }}
            onClick={e => {
              e.stopPropagation()
              navigate(`/characters/${character.id}`)
            }}
          >
            View Details
          </button>
        </div>

      </div>
    </div>
  )
}

export default CharacterCard