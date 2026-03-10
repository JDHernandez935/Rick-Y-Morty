import Badge from '../../atoms/badge/Badge'
import type { Character } from '../../../types/api.types'

interface CharacterCardProps {
  character: Character
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const { name, image, status, species } = character

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200">
      <img src={image} alt={name} className="w-full object-cover" />
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-white font-bold text-lg truncate">{name}</h2>
        <p className="text-gray-400 text-sm">{species}</p>
        <Badge status={status} />
      </div>
    </div>
  )
}

export default CharacterCard