import { atom } from 'recoil'
import { IMovie, IMovieResponse } from 'types/movie'

interface IMovieState extends IMovieResponse {
  currentMovieList: IMovie[]
  page: number
}

export const movieListState = atom<IMovieState>({
  key: '#movieListState',
  default: { Response: 'None', Search: [], totalResults: 0, Error: '', page: 1, currentMovieList: [] },
})

export const bookmarkListState = atom<IMovie[]>({
  key: '#bookmarkListState',
  default: [],
})
