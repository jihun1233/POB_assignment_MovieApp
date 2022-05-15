export interface IMovie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface IMovieResponse {
  Search: IMovie[]
  totalResults: number
  Response: 'True' | 'False'
  Error?: string
}

export interface IMovieState extends IMovieResponse {
  currentMovieList: IMovie[]
  page: number
  keyword: string
}

export interface IBookmark extends IMovie {
  order: number
}

export interface IBookmarkModalState {
  isOpen: boolean
  isBookmarked: boolean
  movie: IMovie
}
