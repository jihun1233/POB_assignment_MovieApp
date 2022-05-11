import { useEffect, useRef, useState, ReactElement, RefObject } from 'react'
import styles from './MovieList.module.scss'
import { IMovie } from 'types/movie'

interface Props {
  // 테스트중. 실제론 무조건 들어가게 만들 것
  // movies ?: IMovie[]
}

const MovieList = ({}: Props): JSX.Element => {
  const [movies, setMovies] = useState(DUMMY_MOVIE_DATAS)
  const [isLoading, setIsLoading] = useState(false)
  const [intersectionRef, setIntersectionRef] = useState<HTMLDListElement | null>(null)

  useEffect(() => {
    const getNextPage = () => {
      console.log('다음페이지 로드')

      if (isLoading) return
      setIsLoading(true)

      new Promise((resolve) => {
        setTimeout(resolve, 5000)
      }).then(() => {
        setMovies((prev) => [...prev, ...DUMMY_MOVIE_DATAS])
        setIsLoading(false)
      })
    }
    const handleIntersect = ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (entry.intersectionRatio >= 0.5 && !isLoading) {
        getNextPage()
      }
    }
    let observer: IntersectionObserver
    if (intersectionRef) {
      observer = new IntersectionObserver(handleIntersect, { threshold: 0.5 })
      observer.observe(intersectionRef)
    }

    return () => {
      observer && observer.disconnect()
    }
  }, [intersectionRef, isLoading])

  useEffect(() => {
    console.log('바뀜', isLoading)
  }, [isLoading])
  return (
    <ul className={styles.movieListBox}>
      {movies.map((movie, index) => {
        const key = `movie-item-${index}`
        return (
          <dl
            key={key}
            data-test={index === movies.length - 1 ? 'setIntersectionRef' : 'null'}
            ref={index === movies.length - 1 ? setIntersectionRef : null}
          >
            {/* 포스터 */}
            <dt>포스터</dt>
            <dd>
              <img className={styles.poster} src={movie.Poster} alt={`${movie.Title} Poster`} />
            </dd>
            <div className={styles.infoBox}>
              {/* 제목, 출시일, 타입 */}
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
      {/* <div /> */}
      {/* <button type='button' onClick={() => console.log(intersectionRef)}>
        test
      </button> */}
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
]
