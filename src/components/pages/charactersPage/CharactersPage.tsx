import { useState } from 'react'
import MainLayout from '../../templates/mainLayout/MainLayout'
import CharacterGrid from '../../organisms/characterGrid/CharacterGrid'
import Pagination from '../../molecules/pagination/Pagination'
import Spinner from '../../atoms/spinner/Spinner'
import { useCharacters } from '../../../hooks/useCharacters'

const CharactersPage = () => {
  const [page, setPage] = useState(1)
  const { data, info, loading, error } = useCharacters({ page })

  const handleNext = () => setPage(prev => prev + 1)
  const handlePrev = () => setPage(prev => prev - 1)

  const renderContent = () => {
    if (loading) return <Spinner />

    if (error) return (
      <div className="flex flex-col items-center gap-4 mt-16 text-center">
        <p className="text-red-400 text-lg">Something went wrong: {error}</p>
        <button
          onClick={() => setPage(1)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 transition-colors"
        >
          Retry
        </button>
      </div>
    )

    if (!data.length) return (
      <div className="flex flex-col items-center mt-16 text-gray-400 text-lg">
        <p>No characters found.</p>
      </div>
    )

    return (
      <>
        <CharacterGrid characters={data} />
        {info && (
          <Pagination
            currentPage={page}
            totalPages={info.pages}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </>
    )
  }

  return (
    <MainLayout>
      {renderContent()}
    </MainLayout>
  )
}

export default CharactersPage