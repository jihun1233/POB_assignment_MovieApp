export interface IMovie {
  Title: string
  Year: number
  imdbID: string
  Type: string
  Poster: string
}

export interface IMovieResponse {
  Search: IMovie[]
  totalResults: number
  Response: 'True' | 'False' | 'None'
  Error?: string
}
