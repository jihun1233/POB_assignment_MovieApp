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
