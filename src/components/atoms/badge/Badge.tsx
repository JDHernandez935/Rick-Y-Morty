import type { CharacterStatus } from '../../../types/api.types'

interface BadgeProps {
  status: CharacterStatus
}

const STATUS_STYLES: Record<CharacterStatus, string> = {
  Alive: 'bg-green-500 text-white',
  Dead: 'bg-red-500 text-white',
  unknown: 'bg-gray-400 text-white',
}

const Badge = ({ status }: BadgeProps) => {
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${STATUS_STYLES[status]}`}>
      {status}
    </span>
  )
}

export default Badge