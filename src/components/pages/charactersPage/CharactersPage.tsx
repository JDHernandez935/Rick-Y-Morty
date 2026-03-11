import { useState } from 'react'
import MainLayout from '../../templates/mainLayout/MainLayout'
import CharacterGrid from '../../organisms/characterGrid/CharacterGrid'
import Pagination from '../../molecules/pagination/Pagination'
import SearchBar from '../../molecules/searchBar/SearchBar'
import Spinner from '../../atoms/spinner/Spinner'
import StatusLegend from '../../atoms/statusLegend/StatusLegend'
import { useCharacters } from '../../../hooks/useCharacters'
import { useDebounce } from '../../../hooks/useDebounce'
import type { CharacterStatus } from '../../../types/api.types'

const CharactersPage = () => {
  const [page, setPage] = useState(1)
  const [name, setName] = useState('')
  const [status, setStatus] = useState<CharacterStatus | ''>('')
  const [species, setSpecies] = useState('')

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
      {/* Leyenda con separadores */}
      <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(57,255,20,0.2)' }} />
      <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem 0' }}>
        <StatusLegend />
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