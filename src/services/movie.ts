import { axios } from 'hooks/worker'
import { IMovieResponse } from 'types/movie.d'

const MOVIE_BASE_URL = process.env.REACT_APP_API_URL
const MOVIE_API_KEY = process.env.REACT_APP_API_KEY

interface Params {
  s: string
  page: number
}

export const getMovieApi = (params: Params) =>
  axios
    .get<IMovieResponse>(`${MOVIE_BASE_URL}`, {
      params: { ...params, apikey: MOVIE_API_KEY },
    })
    .then((res) => {
      const { Response, Search, totalResults, Error } = res.data
      return {
        Response,
        Search: Search ?? [],
        totalResults: totalResults ?? 0,
        Error: Error ?? '',
        page: params.page,
      }
    })
