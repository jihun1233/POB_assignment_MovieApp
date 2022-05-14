import { useEffect, useRef, useState, ReactElement, RefObject } from 'react'
import styles from './MovieList.module.scss'
import { IMovie } from 'types/movie'
import { useIntersection } from 'react-use'
import { useRecoil } from 'hooks/state'
import { movieListState } from 'states/movie'

interface Props {}

const MovieList = ({}: Props): JSX.Element => {
  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, { root: null, rootMargin: '0px', threshold: 0.5 })
  const [movies, setMovies] = useRecoil(movieListState)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    console.log(intersection)
    const getNextPage = () => {
      setIsLoading(true)
      setMovies((prev) => ({ ...prev, currentMovieList: [...movies.currentMovieList, ...DUMMY_MOVIE_DATAS] }))
      setTimeout(() => {
        setIsLoading(false)
      }, 5000)
    }
    if (intersection?.isIntersecting && !isLoading) {
      console.log(intersection)

      getNextPage()
    }
  }, [intersection, isLoading, movies.currentMovieList, setMovies])
  return (
    <ul className={styles.movieListBox}>
      {movies.currentMovieList.map((movie, index) => {
        const key = `movie-item-${index}`
        return (
          <dl key={key} ref={movies.currentMovieList.length - 1 === index ? intersectionRef : null}>
            <dt>포스터</dt>
            <dd className={styles.posterBox}>
              <img className={styles.poster} src={movie.Poster} alt={`${movie.Title} Poster`} />
            </dd>
            <div className={styles.infoBox}>
              <dt>제목</dt>
              <dd>{movie.Title}</dd>
              <dt>출시일</dt>
              <dd>{movie.Year}</dd>
              <dt>타입</dt>
              <dd>{movie.Type}</dd>
            </div>
          </dl>
        )
      })}
    </ul>
  )
}

export default MovieList

const DUMMY_MOVIE_DATAS = [
  {
    Title: 'Iron Man',
    Year: '2008',
    imdbID: 'tt0371746',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
  },
  {
    Title: 'Iron Man 3',
    Year: '2013',
    imdbID: 'tt1300854',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Iron Man 2',
    Year: '2010',
    imdbID: 'tt1228705',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg',
  },
  {
    Title: 'The Iron Giant',
    Year: '1999',
    imdbID: 'tt0129167',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMjIxNDU2Njk0OV5BMl5BanBnXkFtZTgwODc3Njc3NjE@._V1_SX300.jpg',
  },
  {
    Title: 'The Man in the Iron Mask',
    Year: '1998',
    imdbID: 'tt0120744',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZjM2YzcxMmQtOTc2Mi00YjdhLWFlZjUtNmFmMDQzYzU2YTk5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Iron Fist',
    Year: '2017–2018',
    imdbID: 'tt3322310',
    Type: 'series',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMjI5Mjg1NDcyOV5BMl5BanBnXkFtZTgwMjAxOTQ5MTI@._V1_SX300.jpg',
  },
  {
    Title: 'The Iron Lady',
    Year: '2011',
    imdbID: 'tt1007029',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BODEzNDUyMDE3NF5BMl5BanBnXkFtZTcwMTgzOTg3Ng@@._V1_SX300.jpg',
  },
  {
    Title: 'Iron Sky',
    Year: '2012',
    imdbID: 'tt1034314',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTM2MDg5MzgxNF5BMl5BanBnXkFtZTcwODUzNjMxOA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Man with the Iron Fists',
    Year: '2012',
    imdbID: 'tt1258972',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTg5ODI3ODkzOV5BMl5BanBnXkFtZTcwMTQxNjUwOA@@._V1_SX300.jpg',
  },
  {
    Title: '3-Iron',
    Year: '2004',
    imdbID: 'tt0423866',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYzBmODdkMzItNTk0NS00MDc5LWFmZjgtNmNlZmNhMzFlMmQ3XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_SX300.jpg',
  },
  {
    Title: 'Iron Man: Armored Adventures',
    Year: '2008–2012',
    imdbID: 'tt0837143',
    Type: 'series',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZWNjZTJjZmYtYjhjZS00ZjgwLWFjY2UtMzBlMDkzZmM3M2FiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Man of Iron',
    Year: '1981',
    imdbID: 'tt0082222',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTM5MzI3NTM5Nl5BMl5BanBnXkFtZTgwMTU0MjkwMTE@._V1_SX300.jpg',
  },
  {
    Title: 'Iron Man',
    Year: '1994–1996',
    imdbID: 'tt0115218',
    Type: 'series',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDJjMDI0YzQtOWM2OC00NmJhLTk3YWMtYmY5NDBkZmVlM2NjXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_SX300.jpg',
  },
  {
    Title: 'The Man in the Iron Mask',
    Year: '1977',
    imdbID: 'tt0074853',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZTc1NzhhYjMtOTA0MC00YzIwLThlMzktMTM1N2RmMjA4MjI5XkEyXkFqcGdeQXVyMTk0MjQ3Nzk@._V1_SX300.jpg',
  },
  {
    Title: 'Iron Man & Hulk: Heroes United',
    Year: '2013',
    imdbID: 'tt3221698',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMDVlZjcxZWYtZWEzZS00NjY3LTlmZjItNzljZWM1ZTMwZmM5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Iron Man',
    Year: '2008',
    imdbID: 'tt1233205',
    Type: 'game',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNjMwNDkwNDctYjQ0MS00OTdlLWE0MmEtYzdjOGNmYmRhZDhmXkEyXkFqcGdeQXVyNjQ1Njk4MzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Man in the Iron Mask',
    Year: '1939',
    imdbID: 'tt0031619',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMGMyNmFlNmItNzJmYS00NmNiLWE0OTAtZWU0MGMxZTI2ODA0XkEyXkFqcGdeQXVyMTE2NzA0Ng@@._V1_SX300.jpg',
  },
  {
    Title: 'Iron Man and Captain America: Heroes United',
    Year: '2014',
    imdbID: 'tt3911200',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMDIzMTIyYWEtYTAzZi00YzZjLTg5MGUtM2JiN2RjMDBjZmI3XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg',
  },
  {
    Title: 'Iron Man',
    Year: '2010',
    imdbID: 'tt1707807',
    Type: 'series',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMDFjZmEyZTAtMGRmOC00M2FlLTkyNTEtMjE1YzM3YTlhOTUwXkEyXkFqcGdeQXVyMjY4MzQzNDk@._V1_SX300.jpg',
  },
  {
    Title: 'Iron Man',
    Year: '1966',
    imdbID: 'tt0206490',
    Type: 'series',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMjExODc1ODYzNV5BMl5BanBnXkFtZTcwMjgyMzYyMQ@@._V1_SX300.jpg',
  },
]
