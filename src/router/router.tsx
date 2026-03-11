import { createBrowserRouter } from 'react-router-dom'
import CharactersPage from '../components/pages/charactersPage/CharactersPage'
import CharacterDetailPage from '../components/pages/characterDetailPage/CharacterDetailPage'
import FavoritesPage from '../components/pages/favoritesPage/FavoritesPage'

export const router = createBrowserRouter([
  { path: '/', element: <CharactersPage /> },
  { path: '/characters', element: <CharactersPage /> },
  { path: '/characters/:id', element: <CharacterDetailPage /> },
  { path: '/favorites', element: <FavoritesPage /> },
])