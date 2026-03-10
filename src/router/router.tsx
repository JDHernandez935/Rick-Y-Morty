import { createBrowserRouter } from 'react-router-dom'
import CharactersPage from '../components/pages/charactersPage/CharactersPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <CharactersPage />,
  },
  {
    path: '/characters',
    element: <CharactersPage />,
  },
])