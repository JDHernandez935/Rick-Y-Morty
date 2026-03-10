interface PaginationProps {
  currentPage: number
  totalPages: number
  onNext: () => void
  onPrev: () => void
}

const Pagination = ({ currentPage, totalPages, onNext, onPrev }: PaginationProps) => {
  return (
    <div className="flex justify-center items-center gap-6 mt-8">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-green-500 text-white rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-green-400 transition-colors"
      >
        ← Prev
      </button>
      <span className="text-white">
        {currentPage} / {totalPages}
      </span>
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-green-500 text-white rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-green-400 transition-colors"
      >
        Next →
      </button>
    </div>
  )
}

export default Pagination