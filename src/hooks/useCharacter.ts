import { useEffect, useReducer } from 'react'
import { getCharacterById } from '../services/rickAndMorty.service'
import type { Character } from '../types/api.types'

interface UseCharacterState {
  data: Character | null
  loading: boolean
  error: string | null
}

type Action =
  | { type: 'SUCCESS'; payload: Character }
  | { type: 'ERROR'; payload: string }

const INITIAL_STATE: UseCharacterState = {
  data: null,
  loading: true,
  error: null,
}

const reducer = (_state: UseCharacterState, action: Action): UseCharacterState => {
  switch (action.type) {
    case 'SUCCESS':
      return { data: action.payload, loading: false, error: null }
    case 'ERROR':
      return { data: null, loading: false, error: action.payload }
    default:
      return _state
  }
}

export const useCharacter = (id: number) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  useEffect(() => {
    let cancelled = false

    getCharacterById(id)
      .then(response => {
        if (cancelled) return
        dispatch({ type: 'SUCCESS', payload: response })
      })
      .catch((err: Error) => {
        if (cancelled) return
        dispatch({ type: 'ERROR', payload: err.message })
      })

    return () => { cancelled = true }
  }, [id])

  return state
}