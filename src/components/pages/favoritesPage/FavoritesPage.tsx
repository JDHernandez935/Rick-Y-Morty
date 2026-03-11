import { useNavigate } from 'react-router-dom'
import MainLayout from '../../templates/mainLayout/MainLayout'
import FavoriteGrid from '../../organisms/favoriteGrid/FavoriteGrid'
import { useFavoritesStore } from '../../../store/favoritesStore'

const FavoritesPage = () => {
  const navigate = useNavigate()
  const { favorites } = useFavoritesStore()

  const renderContent = () => {
    if (!favorites.length) return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(1rem, 3vw, 1.5rem)',
        marginTop: 'clamp(3rem, 8vw, 6rem)',
        textAlign: 'center',
        padding: '0 1rem',
      }}>
        <svg
          width="clamp(40px, 8vw, 64px)"
          height="clamp(40px, 8vw, 64px)"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(57,255,20,0.25)"
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        <p style={{
          fontFamily: "'Creepster', cursive",
          color: 'rgba(57,255,20,0.4)',
          fontSize: 'clamp(1.25rem, 4vw, 1.75rem)',
          letterSpacing: '0.1em',
        }}>
          No favorites yet
        </p>
        <p style={{
          color: 'rgba(255,255,255,0.3)',
          fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
          maxWidth: '280px',
        }}>
          Star your favorite characters to find them here
        </p>
        <button
          onClick={() => navigate('/characters')}
          style={{
            padding: 'clamp(0.4rem, 1.5vw, 0.6rem) clamp(1rem, 3vw, 1.5rem)',
            borderRadius: '0.75rem',
            background: 'transparent',
            border: '1px solid rgba(57,255,20,0.4)',
            color: '#39ff14',
            cursor: 'pointer',
            fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(57,255,20,0.08)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
          }}
        >
          Explore characters
        </button>
      </div>
    )

    return <FavoriteGrid characters={favorites} />
  }

  return (
    <MainLayout>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 'clamp(1rem, 3vw, 1.5rem)',
        marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <button
          onClick={() => navigate('/characters')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: 'clamp(0.4rem, 1.5vw, 0.5rem) clamp(0.75rem, 2vw, 1.25rem)',
            borderRadius: '0.75rem',
            background: 'transparent',
            border: '1px solid rgba(57,255,20,0.35)',
            color: '#39ff14',
            cursor: 'pointer',
            fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(57,255,20,0.08)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
          }}
        >
          ← Back to characters
        </button>

        <h2 style={{
          fontFamily: "'Creepster', cursive",
          color: '#39ff14',
          fontSize: 'clamp(1.25rem, 4vw, 1.75rem)',
          letterSpacing: '0.1em',
          textShadow: '0 0 12px rgba(57,255,20,0.3)',
        }}>
          Favorites ({favorites.length})
        </h2>
      </div>

      {renderContent()}
    </MainLayout>
  )
}

export default FavoritesPage