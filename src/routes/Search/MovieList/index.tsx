import { useEffect, useState } from 'react'
import styles from './MovieList.module.scss'
import { useRecoil } from 'hooks/state'
import { bookmarkListState, movieListState } from 'states/movie'
import MovieItem from 'components/MovieItem'
import { useInView } from 'react-intersection-observer'
import { getMovieApi } from 'services/movie'

const MovieList = (): JSX.Element => {
  // const intersectionRef = useRef(null)
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true })
  // const intersection = useIntersection(intersectionRef, { root: null, rootMargin: '0px', threshold: 0.5 })
  const [movies, setMovies] = useRecoil(movieListState)
  const { page, keyword, totalResults } = movies
  const [bookmarks] = useRecoil(bookmarkListState)
  const [isLoading, setIsLoading] = useState(false)
  const getIsBookmarked = (id: string) => {
    return bookmarks.some((movie) => movie.imdbID === id)
  }

  useEffect(() => {
    if (!inView || isLoading) return
    if (page * 10 >= totalResults) return
    setIsLoading(true)
    getMovieApi({ page: page + 1, s: keyword })
      .then((res) => {
        setMovies((prev) => ({
          ...res,
          keyword: prev.keyword,
          page: page + 1,
          currentMovieList: [...prev.currentMovieList, ...res.Search],
        }))
      })
      .then(() => {
        setIsLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <div className={styles.movieListBox}>
      <ul>
        {movies.currentMovieList.map((movie, index) => {
          const key = `movie-item-${index}`
          return (
            <MovieItem
              key={key}
              isBookmarked={getIsBookmarked(movie.imdbID)}
              movie={movie}
              ref={movies.currentMovieList.length - 1 === index ? ref : null}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default MovieList
