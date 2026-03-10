import Badge from '../../atoms/badge/Badge'
import type { Character } from '../../../types/api.types'

interface CharacterCardProps {
  character: Character
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const { name, image, status, species } = character

  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        border: '1px solid rgba(57, 255, 20, 0.25)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.6)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        aspectRatio: '3/4',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
        ;(e.currentTarget as HTMLDivElement).style.boxShadow =
          '0 8px 32px rgba(57,255,20,0.2)'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
        ;(e.currentTarget as HTMLDivElement).style.boxShadow =
          '0 4px 24px rgba(0,0,0,0.6)'
      }}
    >
      {/* Imagen cubre toda la card */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Status badge — esquina superior derecha */}
      <div className="absolute top-3 right-3 z-10">
        <Badge status={status} />
      </div>

      {/* Gradiente inferior para legibilidad */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)',
          padding: '2rem 0.75rem 0.75rem',
        }}
      >
        {/* Nombre centrado entre corchetes */}
        <div className="flex items-center justify-center gap-1 mb-1">
          <span style={{ color: '#39ff14', fontWeight: 700, fontSize: '0.9rem' }}>[</span>
          <p className="font-bold truncate text-white text-sm text-center">
            {name}
          </p>
          <span style={{ color: '#39ff14', fontWeight: 700, fontSize: '0.9rem' }}>]</span>
        </div>

        {/* Especie centrada entre corchetes */}
        <div className="flex items-center justify-center gap-1">
          <span style={{ color: 'rgba(57,255,20,0.5)', fontSize: '0.75rem' }}>[</span>
          <p className="text-xs truncate text-center" style={{ color: 'rgba(255,255,255,0.55)' }}>
            {species}
          </p>
          <span style={{ color: 'rgba(57,255,20,0.5)', fontSize: '0.75rem' }}>]</span>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard