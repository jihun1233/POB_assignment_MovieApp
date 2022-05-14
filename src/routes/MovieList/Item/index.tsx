import { useRecoil } from 'hooks/state'
import { ForwardedRef, forwardRef } from 'react'
import { bookmarkListState, bookmarkModalState } from 'states/movie'
import { IMovie } from 'types/movie'
import styles from './Item.module.scss'

interface Props {
  movie: IMovie
}

const Item = forwardRef(({ movie }: Props, ref: ForwardedRef<HTMLLIElement>): JSX.Element => {
  const [, setBookmarkModal] = useRecoil(bookmarkModalState)
  const handleClick = () => {
    setBookmarkModal({ isOpen: true, movie })
  }

  return (
    <li className={styles.movieItem} ref={ref} role='row' onClick={handleClick}>
      <dl>
        <dt>포스터</dt>
        <dd className={styles.posterBox}>
          <img className={styles.poster} src={movie.Poster} alt={`${movie.Title} Poster`} />
        </dd>
        <div className={styles.infoBox}>
          <dt>제목</dt>
          <dd>
            <p>{movie.Title}</p>
          </dd>
          <dt>출시일</dt>
          <dd>
            <p>{movie.Year}</p>
          </dd>
          <dt>타입</dt>
          <dd>
            <p>{movie.Type}</p>
          </dd>
        </div>
      </dl>
    </li>
  )
})

Item.displayName = 'Item'
export default Item
