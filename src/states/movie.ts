import { atom } from 'recoil'
import { IMovie, IMovieResponse } from 'types/movie'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

interface IMovieState extends IMovieResponse {
  currentMovieList: IMovie[]
  page: number
  keyword: string
}

interface IBookmark extends IMovie {
  order: number
}

interface IBookmarkModalState {
  isOpen: boolean
  isBookmarked: boolean
  movie: IMovie
}

export const movieListState = atom<IMovieState>({
  key: '#movieListState',
  default: { Response: 'False', Search: [], totalResults: 0, Error: '', page: 1, currentMovieList: [], keyword: '' },
})

export const bookmarkListState = atom<IBookmark[]>({
  key: '#bookmarkListState',
  default: [],
  effects_UNSTABLE: [persistAtom],
})

export const bookmarkModalState = atom<IBookmarkModalState>({
  key: '#bookmarkModalState',
  default: {
    isOpen: false,
    isBookmarked: false,
    movie: { Poster: '', Title: '', Type: '', Year: '', imdbID: '' },
  },
})
