import Badge from '../../atoms/badge/Badge'
import type { Character } from '../../../types/api.types'

interface CharacterCardProps {
  character: Character
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const { name, image, status } = character

  return (
    <div>
      <img src={image} alt={name} width={300} height={300} />
      <h2>{name}</h2>
      <Badge status={status} />
    </div>
  )
}

export default CharacterCard