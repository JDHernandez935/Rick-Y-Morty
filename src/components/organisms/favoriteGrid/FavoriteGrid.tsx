import { useState, useEffect } from 'react'
import CharacterCard from '../../molecules/characterCard/CharacterCard'
import type { Character } from '../../../types/api.types'

interface FavoriteGridProps {
  characters: Character[]
}

const FavoriteGrid = ({ characters }: FavoriteGridProps) => {
  const [activeId, setActiveId] = useState<number | null>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.card-flip')) {
        setActiveId(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(130px, 18vw, 180px), 1fr))',
      gap: 'clamp(0.75rem, 2vw, 1.25rem)',
    }}>
      {characters.map(character => (
        <CharacterCard
          key={character.id}
          character={character}
          isFlipped={activeId === character.id}
          onFlip={(id) => setActiveId(prev => prev === id ? null : id)}
        />
      ))}
    </div>
  )
}

export default FavoriteGrid