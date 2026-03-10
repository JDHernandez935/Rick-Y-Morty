import Badge from '../../atoms/badge/Badge'
import StatItem from '../../atoms/statItem/StatItem'
import EpisodeTag from '../../molecules/episodeTag/EpisodeTag'
import Spinner from '../../atoms/spinner/Spinner'
import { useEpisodes } from '../../../hooks/useEpisodes'
import type { Character } from '../../../types/api.types'

interface CharacterDetailProps {
  character: Character
}

const CharacterDetail = ({ character }: CharacterDetailProps) => {
  const { name, image, status, species, gender, origin, location, episode } = character
  const { data: episodes, loading: episodesLoading } = useEpisodes(episode)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

      {/* Fila principal */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
      }}>

        {/* Columna izquierda — imagen + datos básicos (el círculo de tu boceto) */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          flex: '0 0 auto',
          width: 'clamp(180px, 25vw, 260px)',
        }}>
          <div style={{ position: 'relative', width: '100%' }}>
            <img
              src={image}
              alt={name}
              style={{
                width: '100%',
                borderRadius: '1rem',
                border: '2px solid rgba(57,255,20,0.25)',
                boxShadow: '0 0 30px rgba(57,255,20,0.1)',
              }}
            />
            <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem' }}>
              <Badge status={status} />
            </div>
          </div>

          <h1 style={{
            fontFamily: "'Creepster', cursive",
            color: '#39ff14',
            textShadow: '0 0 16px rgba(57,255,20,0.4)',
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            textAlign: 'center',
            letterSpacing: '0.08em',
          }}>
            {name}
          </h1>

          {/* Stats básicos */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            width: '100%',
            padding: '1rem',
            borderRadius: '0.75rem',
            background: 'rgba(57,255,20,0.04)',
            border: '1px solid rgba(57,255,20,0.15)',
          }}>
            <StatItem label="Status" value={status} />
            <StatItem label="Species" value={species} />
            <StatItem label="Gender" value={gender} />
            <StatItem label="Origin" value={origin.name} />
            <div style={{ gridColumn: '1 / -1' }}>
              <StatItem label="Location" value={location.name} />
            </div>
          </div>
        </div>

        {/* Columna derecha — episodios (el cuadrado de tu boceto) */}
        <div style={{
          flex: '1 1 300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          <h2 style={{
            fontFamily: "'Creepster', cursive",
            color: '#39ff14',
            fontSize: '1.25rem',
            letterSpacing: '0.1em',
            borderBottom: '1px solid rgba(57,255,20,0.15)',
            paddingBottom: '0.5rem',
          }}>
            Episodes ({episode.length})
          </h2>

          {episodesLoading ? (
            <Spinner />
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap: '0.75rem',
              maxHeight: '460px',
              overflowY: 'auto',
              paddingRight: '0.25rem',
            }}>
              {episodes.map(ep => (
                <EpisodeTag key={ep.id} episode={ep} />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default CharacterDetail