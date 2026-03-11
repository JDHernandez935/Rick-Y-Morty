import Badge from '../../atoms/badge/Badge'
import StatItem from '../../atoms/statItem/StatItem'
import EpisodeTag from '../../molecules/episodeTag/EpisodeTag'
import Spinner from '../../atoms/spinner/Spinner'
import FavoriteButton from '../../atoms/favoriteButton/FavoriteButton'
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
        gap: 'clamp(1rem, 3vw, 2rem)',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
      }}>

        {/* Columna izquierda — imagen + stats */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          flex: '0 0 auto',
          width: 'clamp(100%, 25vw, 260px)',
          maxWidth: '260px',
          margin: '0 auto',
        }}>
          {/* Imagen */}
          <div style={{ position: 'relative', width: '100%' }}>
            <img
              src={image}
              alt={name}
              style={{
                width: '100%',
                borderRadius: '1rem',
                border: '2px solid rgba(57,255,20,0.25)',
                boxShadow: '0 0 30px rgba(57,255,20,0.1)',
                display: 'block',
              }}
            />
            <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem' }}>
              <Badge status={status} />
            </div>
          </div>

          {/* Nombre + FavoriteButton */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            width: '100%',
          }}>
            <h1 style={{
              fontFamily: "'Creepster', cursive",
              color: '#39ff14',
              textShadow: '0 0 16px rgba(57,255,20,0.4)',
              fontSize: 'clamp(1.5rem, 5vw, 2rem)',
              textAlign: 'center',
              letterSpacing: '0.08em',
              lineHeight: 1.2,
            }}>
              {name}
            </h1>
            <FavoriteButton character={character} size={24} />
          </div>

          {/* Stats */}
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

        {/* Columna derecha — episodios */}
        <div style={{
          flex: '1 1 clamp(260px, 40vw, 300px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          minWidth: 0,
        }}>
          <h2 style={{
            fontFamily: "'Creepster', cursive",
            color: '#39ff14',
            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
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
              gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(130px, 20vw, 160px), 1fr))',
              gap: '0.75rem',
              maxHeight: 'clamp(300px, 50vh, 460px)',
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