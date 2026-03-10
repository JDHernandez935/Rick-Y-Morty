import { useCharacters } from '../../../hooks/useCharacters'
import CharacterCard from '../../molecules/characterCard/CharacterCard'

const CharacterGrid = () => {
  const { data, loading, error } = useCharacters()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      {data.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  )
}

export default CharacterGrid