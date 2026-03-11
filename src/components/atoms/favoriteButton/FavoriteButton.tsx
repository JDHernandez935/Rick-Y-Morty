import { useFavoritesStore } from '../../../store/favoritesStore'
import type { Character } from '../../../types/api.types'

interface FavoriteButtonProps {
  character: Character
  size?: number
}

const FavoriteButton = ({ character, size = 18 }: FavoriteButtonProps) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore()
  const favorited = isFavorite(character.id)

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (favorited) {
            removeFavorite(character.id)
        } else {
            addFavorite(character)
        }
    }

  return (
    <button
      onClick={handleClick}
      title={favorited ? 'Remove from favorites' : 'Add to favorites'}
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '0.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.2)'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={favorited ? '#FFD700' : 'none'}
        stroke={favorited ? '#FFD700' : 'rgba(255,215,0,0.5)'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          filter: favorited ? 'drop-shadow(0 0 6px rgba(255,215,0,0.6))' : 'none',
          transition: 'all 0.2s ease',
        }}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    </button>
  )
}

export default FavoriteButton