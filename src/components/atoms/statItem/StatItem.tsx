interface StatItemProps {
  label: string
  value: string
}

const StatItem = ({ label, value }: StatItemProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
      <span style={{
        color: 'rgba(57,255,20,0.55)',
        fontSize: '0.65rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
      }}>
        {label}
      </span>
      <span style={{
        color: 'rgba(255,255,255,0.85)',
        fontSize: '0.9rem',
        fontWeight: 600,
        textAlign: 'center',
      }}>
        {value}
      </span>
    </div>
  )
}

export default StatItem