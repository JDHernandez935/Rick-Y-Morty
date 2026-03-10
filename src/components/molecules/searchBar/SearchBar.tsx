import SearchInput from '../../atoms/searchInput/SearchInput'
import SelectFilter from '../../atoms/selectFilter/SelectFilter'
import type { CharacterStatus } from '../../../types/api.types'

const STATUS_OPTIONS = [
  { label: 'Alive', value: 'alive' },
  { label: 'Dead', value: 'dead' },
  { label: 'Unknown', value: 'unknown' },
]

const SPECIES_OPTIONS = [
  { label: 'Human', value: 'Human' },
  { label: 'Alien', value: 'Alien' },
  { label: 'Humanoid', value: 'Humanoid' },
  { label: 'Robot', value: 'Robot' },
  { label: 'Animal', value: 'Animal' },
  { label: 'Mythological Creature', value: 'Mythological Creature' },
  { label: 'Unknown', value: 'unknown' },
]

interface SearchBarProps {
  name: string
  status: string
  species: string
  onNameChange: (value: string) => void
  onStatusChange: (value: CharacterStatus | '') => void
  onSpeciesChange: (value: string) => void
}

const SearchBar = ({ name, status, species, onNameChange, onStatusChange, onSpeciesChange }: SearchBarProps) => {
  const hasFilters = name || status || species

  const handleClearAll = () => {
    onNameChange('')
    onStatusChange('')
    onSpeciesChange('')
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem 1.25rem',
          borderRadius: '1rem',
          background: 'rgba(6,13,6,0.8)',
          border: '1px solid rgba(57,255,20,0.15)',
          backdropFilter: 'blur(8px)',
        }}
      >
        {/* Input */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <SearchInput value={name} onChange={onNameChange} />
        </div>

        {/* Divisor vertical */}
        <div style={{ width: '1px', height: '20px', background: 'rgba(57,255,20,0.15)', flexShrink: 0 }} />

        {/* Status */}
        <SelectFilter
          value={status}
          onChange={val => onStatusChange(val as CharacterStatus | '')}
          options={STATUS_OPTIONS}
          placeholder="Status"
        />

        {/* Divisor vertical */}
        <div style={{ width: '1px', height: '20px', background: 'rgba(57,255,20,0.15)', flexShrink: 0 }} />

        {/* Species */}
        <SelectFilter
          value={species}
          onChange={onSpeciesChange}
          options={SPECIES_OPTIONS}
          placeholder="Species"
        />

        {hasFilters && (
          <>
            <div style={{ width: '1px', height: '20px', background: 'rgba(57,255,20,0.15)', flexShrink: 0 }} />
            <button
              onClick={handleClearAll}
              style={{
                flexShrink: 0,
                background: 'transparent',
                border: 'none',
                color: 'rgba(255,68,68,0.7)',
                padding: '0 0.5rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,68,68,1)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,68,68,0.7)'
              }}
            >
              ✕ Clear
            </button>
          </>
        )}
      </div>

      <hr style={{ margin: '1.5rem 0', borderColor: 'rgba(57,255,20,0.15)' }} />
    </div>
  )
}

export default SearchBar