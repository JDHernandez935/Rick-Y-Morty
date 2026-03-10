import type { CharacterStatus } from '../../../types/api.types'

interface BadgeProps {
  status: CharacterStatus
}

const STATUS_CONFIG: Record<CharacterStatus, { color: string; glow: string; label: string }> = {
  Alive: {
    color: '#39ff14',
    glow: '0 0 8px #39ff14, 0 0 16px #39ff14',
    label: 'Alive',
  },
  Dead: {
    color: '#ff4444',
    glow: '0 0 8px #ff4444, 0 0 16px #ff4444',
    label: 'Dead',
  },
  unknown: {
    color: '#aaaaaa',
    glow: '0 0 8px #aaaaaa',
    label: 'Unknown',
  },
}

const Badge = ({ status }: BadgeProps) => {
  const config = STATUS_CONFIG[status]

  return (
    <div
      title={config.label}
      className="w-4 h-4 rounded-full border-2 border-gray-900 cursor-default"
      style={{
        backgroundColor: config.color,
        boxShadow: config.glow,
      }}
    />
  )
}

export default Badge