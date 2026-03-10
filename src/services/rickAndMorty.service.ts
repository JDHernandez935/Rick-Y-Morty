import { API_CONFIG } from './api.config'
import type {
  Character,
  CharacterFilters,
  Episode,
  EpisodeFilters,
  Location,
  LocationFilters,
  PaginatedResponse,
} from '../types/api.types'

const buildQueryString = <T extends object>(filters: T): string => {
  const params = new URLSearchParams()
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      params.append(key, String(value))
    }
  })
  const query = params.toString()
  return query ? `?${query}` : ''
}

const fetcher = async <T>(url: string): Promise<T> => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`)
  }
  return response.json() as Promise<T>
}

const { BASE_URL, ENDPOINTS } = API_CONFIG

// ── Characters ───────────────────────────────────────────
export const getCharacters = (filters: CharacterFilters = {}) =>
  fetcher<PaginatedResponse<Character>>(
    `${BASE_URL}${ENDPOINTS.CHARACTER}${buildQueryString(filters)}`
  )

export const getCharacterById = (id: number) =>
  fetcher<Character>(`${BASE_URL}${ENDPOINTS.CHARACTER}/${id}`)

export const getCharactersByIds = (ids: number[]) =>
  fetcher<Character[]>(`${BASE_URL}${ENDPOINTS.CHARACTER}/${ids.join(',')}`)

// ── Locations ────────────────────────────────────────────
export const getLocations = (filters: LocationFilters = {}) =>
  fetcher<PaginatedResponse<Location>>(
    `${BASE_URL}${ENDPOINTS.LOCATION}${buildQueryString(filters)}`
  )

export const getLocationById = (id: number) =>
  fetcher<Location>(`${BASE_URL}${ENDPOINTS.LOCATION}/${id}`)

export const getLocationsByIds = (ids: number[]) =>
  fetcher<Location[]>(`${BASE_URL}${ENDPOINTS.LOCATION}/${ids.join(',')}`)

// ── Episodes ─────────────────────────────────────────────
export const getEpisodes = (filters: EpisodeFilters = {}) =>
  fetcher<PaginatedResponse<Episode>>(
    `${BASE_URL}${ENDPOINTS.EPISODE}${buildQueryString(filters)}`
  )

export const getEpisodeById = (id: number) =>
  fetcher<Episode>(`${BASE_URL}${ENDPOINTS.EPISODE}/${id}`)

export const getEpisodesByIds = (ids: number[]) =>
  fetcher<Episode[]>(`${BASE_URL}${ENDPOINTS.EPISODE}/${ids.join(',')}`)