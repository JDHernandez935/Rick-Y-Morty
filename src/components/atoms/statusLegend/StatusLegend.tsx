import type { CharacterStatus } from '../../../types/api.types'

const LEGEND_ITEMS: { status: CharacterStatus; label: string; color: string; glow: string }[] = [
  { status: 'Alive', label: 'Alive', color: '#39ff14', glow: '0 0 8px #39ff14' },
  { status: 'Dead', label: 'Dead', color: '#ff4444', glow: '0 0 8px #ff4444' },
  { status: 'unknown', label: 'Unknown', color: '#aaaaaa', glow: '0 0 8px #aaaaaa' },
]

const StatusLegend = () => {
  return (
    <div className="flex items-center justify-center gap-6 py-4">
      {LEGEND_ITEMS.map(({ status, label, color, glow }) => (
        <div key={status} className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full border border-gray-800 shrink-0"
            style={{ backgroundColor: color, boxShadow: glow }}
          />
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default StatusLegend