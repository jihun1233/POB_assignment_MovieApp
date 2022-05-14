import { useRecoil } from 'hooks/state'
import { bookmarkModalState } from 'states/movie'
import { IMovie } from 'types/movie'
import styles from './Item.module.scss'

interface Props {
  movie: IMovie
}

const Item = ({ movie }: Props): JSX.Element => {
  const { Poster, Title, Type, Year, imdbID } = movie
  return (
    <div className={styles.modalItem}>
      <img className={styles.poster} src={Poster} alt={`${Title} Poster`} />
      <div className={styles.info}>
        <dl>
          <dt>제목</dt>
          <dd className={styles.title}>
            <h1>{Title}</h1>
          </dd>
          <div className={styles.details}>
            <dt>개봉 연도</dt>
            <dd className={styles.year}>{Year}</dd>
            <dt>유형</dt>
            <dd className={styles.type}>{Type}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default Item
