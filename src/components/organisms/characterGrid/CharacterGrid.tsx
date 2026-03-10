import CharacterCard from '../../molecules/characterCard/CharacterCard'
import type { Character } from '../../../types/api.types'

interface CharacterGridProps {
  characters: Character[]
}

const CharacterGrid = ({ characters }: CharacterGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  )
}

export default CharacterGrid