import CharacterCard from '../../molecules/characterCard/CharacterCard'
import type { Character } from '../../../types/api.types'

interface CharacterGridProps {
  characters: Character[]
}

const CharacterGrid = ({ characters }: CharacterGridProps) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(130px, 18vw, 180px), 1fr))',
        gap: 'clamp(0.75rem, 2vw, 1.25rem)',
      }}
    >
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  )
}

export default CharacterGrid