import { useState } from 'react'
import MainLayout from '../../templates/mainLayout/MainLayout'
import CharacterGrid from '../../organisms/characterGrid/CharacterGrid'
import Pagination from '../../molecules/pagination/Pagination'
import SearchBar from '../../molecules/searchBar/SearchBar'
import Spinner from '../../atoms/spinner/Spinner'
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
      <div className="flex flex-col items-center gap-4 mt-16 text-center">
        <p className="text-red-400 text-lg">Something went wrong: {error}</p>
        <button
          onClick={() => setPage(1)}
          className="px-4 py-2 rounded-lg text-xs font-bold tracking-widest uppercase"
          style={{ border: '1px solid rgba(57,255,20,0.35)', color: '#39ff14' }}
        >
          Retry
        </button>
      </div>
    )

    if (!data.length) return (
      <div className="flex flex-col items-center mt-16 gap-2">
        <p className="text-2xl" style={{ fontFamily: "'Creepster', cursive", color: 'rgba(57,255,20,0.5)' }}>
          No characters found
        </p>
        <p className="text-xs tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>
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
            onNext={() => setPage(prev => prev + 1)}
            onPrev={() => setPage(prev => prev - 1)}
          />
        )}
      </>
    )
  }

  return (
    <MainLayout>
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