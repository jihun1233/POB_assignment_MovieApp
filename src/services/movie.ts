import { axios } from 'hooks/worker'
import { IMovieResponse } from 'types/movie.d'

const MOVIE_BASE_URL = process.env.REACT_APP_API_URL

interface Params {
  s: string
  page: number
}

export const getMovieApi = (params: Params) =>
  axios.get<IMovieResponse>(`${MOVIE_BASE_URL}`, {
    params,
  })
