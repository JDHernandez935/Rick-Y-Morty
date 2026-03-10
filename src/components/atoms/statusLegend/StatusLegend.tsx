import type { CharacterStatus } from '../../../types/api.types'

const LEGEND_ITEMS: { status: CharacterStatus; label: string; color: string; glow: string }[] = [
  { status: 'Alive', label: 'Alive', color: '#39ff14', glow: '0 0 8px #39ff14' },
  { status: 'Dead', label: 'Dead', color: '#ff4444', glow: '0 0 8px #ff4444' },
  { status: 'unknown', label: 'Unknown', color: '#aaaaaa', glow: '0 0 8px #aaaaaa' },
]

const StatusLegend = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(1rem, 4vw, 2rem)', padding: '0.5rem 1rem', flexWrap: 'wrap' }}>
      {LEGEND_ITEMS.map(({ status, label, color, glow }) => (
        <div key={status} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: color, boxShadow: glow, flexShrink: 0 }} />
          <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default StatusLegend