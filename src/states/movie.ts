import { atom } from 'recoil'
import { IBookmark, IBookmarkModalState, IMovieState } from 'types/movie'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const movieListState = atom<IMovieState>({
  key: '#movieListState',
  default: {
    Response: 'False',
    Search: [],
    totalResults: 0,
    Error: '검색결과가 없습니다.',
    page: 1,
    currentMovieList: [],
    keyword: '',
  },
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
