interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

const SearchInput = ({ value, onChange, placeholder = 'Search character...' }: SearchInputProps) => {
  return (
    <div
      className="flex items-center gap-3 px-4 py-2 rounded-xl flex-1"
      style={{
        background: 'rgba(57,255,20,0.05)',
        border: '1px solid rgba(57,255,20,0.25)',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgba(57,255,20,0.6)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ flexShrink: 0 }}
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-sm"
        style={{
          color: 'rgba(255,255,255,0.85)',
          fontFamily: "'Nunito', sans-serif",
        }}
      />
      {value && (
        <button
          onClick={() => onChange('')}
          style={{ color: 'rgba(57,255,20,0.5)', fontSize: '0.85rem', lineHeight: 1 }}
        >
          ✕
        </button>
      )}
    </div>
  )
}

export default SearchInput