import React, { FormEvent, useState } from 'react'
import styles from './Search.module.scss'
import { BsSearch } from 'react-icons/bs'
import { getMovieApi } from 'services/movie'
import MovieList from 'routes/MovieList'

const Search = (): JSX.Element => {
  const [searchKeyword, setSearchKeyword] = useState('apple')
  // 없으면 검색 x, 너무많은 결과 에러에 대응
  const [page, setPage] = useState(1)

  const getMovieData = () => {
    getMovieApi({ s: searchKeyword, page }).then(console.log)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    getMovieData()
  }

  return (
    <div className={styles.searchPageBox}>
      <form onSubmit={handleSubmit}>
        <input type='text' />
        <button type='submit'>
          <BsSearch />
        </button>
      </form>
      <section className={styles.movieListBox}>
        <MovieList />
      </section>
    </div>
  )
}

export default Search
