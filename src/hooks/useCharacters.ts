import { useEffect, useReducer } from 'react'
import { getCharacters } from '../services/rickAndMorty.service'
import type { ApiInfo, Character, CharacterFilters } from '../types/api.types'

interface UseCharactersState {
  data: Character[]
  info: ApiInfo | null
  loading: boolean
  error: string | null
}

type Action =
  | { type: 'SUCCESS'; payload: { data: Character[]; info: ApiInfo } }
  | { type: 'ERROR'; payload: string }

const INITIAL_STATE: UseCharactersState = {
  data: [],
  info: null,
  loading: true,
  error: null,
}

const reducer = (state: UseCharactersState, action: Action): UseCharactersState => {
  switch (action.type) {
    case 'SUCCESS':
      return { data: action.payload.data, info: action.payload.info, loading: false, error: null }
    case 'ERROR':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export const useCharacters = (filters: CharacterFilters = {}) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const filtersKey = JSON.stringify(filters)

  useEffect(() => {
    let cancelled = false

    getCharacters(filters)
      .then(response => {
        if (cancelled) return
        dispatch({ type: 'SUCCESS', payload: { data: response.results, info: response.info } })
      })
      .catch((err: Error) => {
        if (cancelled) return
        dispatch({ type: 'ERROR', payload: err.message })
      })

    return () => { cancelled = true }
  }, [filtersKey])

  return state
}