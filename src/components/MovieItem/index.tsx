import { useRecoil } from 'hooks/state'
import { ForwardedRef, forwardRef, SyntheticEvent } from 'react'
import { bookmarkModalState } from 'states/movie'
import { IMovie } from 'types/movie'
import { AiFillStar } from 'react-icons/ai'
import { cx } from 'styles'
import styles from './MovieItem.module.scss'
import posterNotFound from 'assets/posterNotFound.png'

interface Props {
  movie: IMovie
  isBookmarked: boolean
}

const MovieItem = forwardRef(({ movie, isBookmarked }: Props, ref: ForwardedRef<HTMLLIElement>): JSX.Element => {
  const [, setBookmarkModal] = useRecoil(bookmarkModalState)

  const handleClick = () => {
    setBookmarkModal({ isOpen: true, movie, isBookmarked })
  }
  const handleImgError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const { currentTarget } = e
    currentTarget.onerror = null
    currentTarget.src = posterNotFound
  }
  return (
    <li className={styles.movieItem} ref={ref} role='row' onClick={handleClick}>
      <dl>
        <dt>포스터</dt>
        <dd className={styles.posterBox}>
          <img className={styles.poster} src={movie.Poster} alt={`${movie.Title} Poster`} onError={handleImgError} />
        </dd>
        <div className={styles.infoBox}>
          <dt>제목</dt>
          <dd>
            <p className={styles.title}>{movie.Title}</p>
          </dd>
          <dt>개봉 연도</dt>
          <dd>
            <p>{movie.Year}</p>
          </dd>
          <dt>유형</dt>
          <dd>
            <p>{movie.Type}</p>
          </dd>
        </div>
        <AiFillStar className={cx(styles.bookmarkIcon, { [styles.active]: isBookmarked })} />
      </dl>
    </li>
  )
})

MovieItem.displayName = 'MovieItem'
export default MovieItem
