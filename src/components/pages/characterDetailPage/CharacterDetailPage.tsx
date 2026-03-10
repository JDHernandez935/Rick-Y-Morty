import { useNavigate, useParams } from 'react-router-dom'
import MainLayout from '../../templates/mainLayout/MainLayout'
import CharacterDetail from '../../organisms/characterDetail/CharacterDetail'
import Spinner from '../../atoms/spinner/Spinner'
import { useCharacter } from '../../../hooks/useCharacter'

const CharacterDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { data: character, loading, error } = useCharacter(Number(id))

  const renderContent = () => {
    if (loading) return <Spinner />

    if (error) return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '4rem' }}>
        <p style={{ color: '#ff4444' }}>Something went wrong: {error}</p>
        <button
          onClick={() => navigate('/characters')}
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
          ← Back
        </button>
      </div>
    )

    if (!character) return null

    return <CharacterDetail character={character} />
  }

  return (
    <MainLayout>
      {/* Botón volver */}
      <button
        onClick={() => navigate('/characters')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '2rem',
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
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(57,255,20,0.08)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
        }}
      >
        ← Back to characters
      </button>

      {renderContent()}
    </MainLayout>
  )
}

export default CharacterDetailPage