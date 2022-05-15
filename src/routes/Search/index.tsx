import { ChangeEvent, FormEvent, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { getMovieApi } from 'services/movie'
import { movieListState } from 'states/movie'
import MovieList from 'routes/Search/MovieList'
import { useRecoil } from 'hooks/state'
import styles from './Search.module.scss'

const Search = (): JSX.Element => {
  const [movies, setMovies, resetMovies] = useRecoil(movieListState)
  const [searchKeyword, setSearchKeyword] = useState('')
  // 없으면 검색 x, 너무많은 결과 에러에 대응
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value)
  }
  const getMovieData = () => {
    resetMovies()
    getMovieApi({ s: searchKeyword, page: 1 }).then((res) => {
      // if (res.Response === 'True') {
      setMovies({ ...res, page: 1, currentMovieList: res.Search, keyword: searchKeyword })
      // } else {
      //   resetMovies()
      // }
    })
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!searchKeyword) return
    getMovieData()
  }
  const getErrorMsg = (errorMessage: string | undefined) => {
    switch (errorMessage) {
      case 'Too many results.':
        return '결과가 너무 많습니다.'
      case 'Movie not found!':
      default:
        return '검색 결과가 없습니다'
    }
  }
  return (
    <div className={styles.searchPageBox}>
      <form onSubmit={handleSubmit}>
        <input type='text' value={searchKeyword} onChange={handleInputChange} />
        <button type='submit'>
          <BsSearch />
        </button>
      </form>
      <section>
        {movies.Response === 'False' ? <p>{getErrorMsg(movies.Error)}</p> : null}
        <MovieList />
      </section>
    </div>
  )
}

export default Search
