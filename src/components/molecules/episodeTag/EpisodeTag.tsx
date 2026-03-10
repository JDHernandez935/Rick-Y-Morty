import type { Episode } from '../../../types/api.types'

interface EpisodeTagProps {
  episode: Episode
}

const EpisodeTag = ({ episode }: EpisodeTagProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.2rem',
        padding: '0.5rem 0.75rem',
        borderRadius: '0.5rem',
        background: 'rgba(57,255,20,0.05)',
        border: '1px solid rgba(57,255,20,0.15)',
      }}
    >
      <span style={{ color: '#39ff14', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em' }}>
        {episode.episode}
      </span>
      <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.7rem' }}>
        {episode.name}
      </span>
    </div>
  )
}

export default EpisodeTag