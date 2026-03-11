import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Character } from '../types/api.types'

interface FavoritesStore {
  favorites: Character[]
  addFavorite: (character: Character) => void
  removeFavorite: (id: number) => void
  isFavorite: (id: number) => boolean
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (character) => {
        set(state => ({ favorites: [...state.favorites, character] }))
      },

      removeFavorite: (id) => {
        set(state => ({ favorites: state.favorites.filter(c => c.id !== id) }))
      },

      isFavorite: (id) => {
        return get().favorites.some(c => c.id === id)
      },
    }),
    { name: 'rick-and-morty-favorites' }
  )
)