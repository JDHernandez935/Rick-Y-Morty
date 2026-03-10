import { useEffect, useReducer } from 'react'
import { getEpisodesByIds } from '../services/rickAndMorty.service'
import type { Episode } from '../types/api.types'

interface UseEpisodesState {
  data: Episode[]
  loading: boolean
  error: string | null
}

type Action =
  | { type: 'SUCCESS'; payload: Episode[] }
  | { type: 'ERROR'; payload: string }

const INITIAL_STATE: UseEpisodesState = {
  data: [],
  loading: true,
  error: null,
}

const reducer = (_state: UseEpisodesState, action: Action): UseEpisodesState => {
  switch (action.type) {
    case 'SUCCESS':
      return { data: action.payload, loading: false, error: null }
    case 'ERROR':
      return { data: [], loading: false, error: action.payload }
    default:
      return _state
  }
}

// Extrae el ID numérico desde una URL como "https://rickandmortyapi.com/api/episode/12"
const extractIdFromUrl = (url: string): number => {
  const parts = url.split('/')
  return Number(parts[parts.length - 1])
}

export const useEpisodes = (episodeUrls: string[]) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const episodesKey = JSON.stringify(episodeUrls)

  useEffect(() => {
    if (!episodeUrls.length) return
    let cancelled = false

    const ids = episodeUrls.map(extractIdFromUrl)

    getEpisodesByIds(ids)
      .then(response => {
        if (cancelled) return
        // La API devuelve un objeto si es 1 episodio, array si son varios
        const episodes = Array.isArray(response) ? response : [response]
        dispatch({ type: 'SUCCESS', payload: episodes })
      })
      .catch((err: Error) => {
        if (cancelled) return
        dispatch({ type: 'ERROR', payload: err.message })
      })

    return () => { cancelled = true }
  }, [episodesKey])

  return state
}