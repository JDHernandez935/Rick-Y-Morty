import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../../templates/mainLayout/MainLayout'
import CharacterGrid from '../../organisms/characterGrid/CharacterGrid'
import Pagination from '../../molecules/pagination/Pagination'
import SearchBar from '../../molecules/searchBar/SearchBar'
import Spinner from '../../atoms/spinner/Spinner'
import StatusLegend from '../../atoms/statusLegend/StatusLegend'
import { useCharacters } from '../../../hooks/useCharacters'
import { useDebounce } from '../../../hooks/useDebounce'
import { useFavoritesStore } from '../../../store/favoritesStore'
import type { CharacterStatus } from '../../../types/api.types'

const CharactersPage = () => {
  const [page, setPage] = useState(1)
  const [name, setName] = useState('')
  const [status, setStatus] = useState<CharacterStatus | ''>('')
  const [species, setSpecies] = useState('')
  const navigate = useNavigate()
  const { favorites } = useFavoritesStore()

  const debouncedName = useDebounce(name, 500)

  const { data, info, loading, error } = useCharacters({
    page,
    name: debouncedName || undefined,
    status: status || undefined,
    species: species || undefined,
  })

  const handleNameChange = (value: string) => {
    setName(value)
    setPage(1)
  }

  const handleStatusChange = (value: CharacterStatus | '') => {
    setStatus(value)
    setPage(1)
  }

  const handleSpeciesChange = (value: string) => {
    setSpecies(value)
    setPage(1)
  }

  const renderContent = () => {
    if (loading) return <Spinner />

    if (error) return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '4rem' }}>
        <p style={{ color: '#ff4444', fontSize: '1rem' }}>Something went wrong: {error}</p>
        <button
          onClick={() => setPage(1)}
          style={{
            padding: '0.5rem 1.25rem',
            borderRadius: '0.75rem',
            background: 'transparent',
            border: '1px solid rgba(57,255,20,0.35)',
            color: '#39ff14',
            cursor: 'pointer',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Retry
        </button>
      </div>
    )

    if (!data.length) return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4rem', gap: '0.5rem' }}>
        <p style={{ fontFamily: "'Creepster', cursive", color: 'rgba(57,255,20,0.5)', fontSize: '1.5rem' }}>
          No characters found
        </p>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
          Try adjusting your search or filters
        </p>
      </div>
    )

    return (
      <>
        <CharacterGrid characters={data} />
        {info && (
          <Pagination
            currentPage={page}
            totalPages={info.pages}
            onNext={() => {
              setPage(prev => prev + 1)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            onPrev={() => {
              setPage(prev => prev - 1)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          />
        )}
      </>
    )
  }

  return (
    <MainLayout>
      {/* Leyenda + botón Favorites */}
      <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(57,255,20,0.2)' }} />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 0',
      }}>
        <div style={{ flex: 1 }} />
        <StatusLegend />
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={() => navigate('/favorites')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem',
              borderRadius: '0.75rem',
              background: 'transparent',
              border: '1px solid rgba(255,215,0,0.4)',
              color: '#FFD700',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,215,0,0.08)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Favorites ({favorites.length})
          </button>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(57,255,20,0.2)', marginBottom: '2rem' }} />

      <SearchBar
        name={name}
        status={status}
        species={species}
        onNameChange={handleNameChange}
        onStatusChange={handleStatusChange}
        onSpeciesChange={handleSpeciesChange}
      />
      {renderContent()}
    </MainLayout>
  )
}

export default CharactersPage