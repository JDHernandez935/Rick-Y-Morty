import type { CharacterStatus } from '../../../types/api.types'

interface BadgeProps {
  status: CharacterStatus
}

const Badge = ({ status }: BadgeProps) => {
  return <span>{status}</span>
}

export default Badge