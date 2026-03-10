interface SelectFilterProps {
  value: string
  onChange: (value: string) => void
  options: { label: string; value: string }[]
  placeholder: string
}

const SelectFilter = ({ value, onChange, options, placeholder }: SelectFilterProps) => {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{
        background: 'transparent',
        border: 'none',
        outline: 'none',
        color: value ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.35)',
        fontFamily: "'Nunito', sans-serif",
        fontSize: '0.875rem',
        cursor: 'pointer',
        flexShrink: 0,
        paddingRight: '1.5rem',
        appearance: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='rgba(57,255,20,0.5)' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 0rem center',
      }}
    >
      <option value="" style={{ background: '#071a07' }}>{placeholder}</option>
      {options.map(opt => (
        <option key={opt.value} value={opt.value} style={{ background: '#071a07' }}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}

export default SelectFilter