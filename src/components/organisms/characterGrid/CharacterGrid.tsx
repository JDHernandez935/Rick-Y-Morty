import CharacterCard from '../../molecules/characterCard/CharacterCard'
import type { Character } from '../../../types/api.types'

interface CharacterGridProps {
  characters: Character[]
}

const CharacterGrid = ({ characters }: CharacterGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  )
}

export default CharacterGrid