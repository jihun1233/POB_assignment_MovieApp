import { IMovie } from 'types/movie'
import styles from './Item.module.scss'

interface Props {
  movie: IMovie
}

const Item = ({ movie }: Props): JSX.Element => {
  const { Poster, Title, Type, Year } = movie
  return (
    <div className={styles.modalItem}>
      <img className={styles.poster} src={Poster} alt={`${Title} Poster`} />
      <div className={styles.info}>
        <dl>
          <dt>제목</dt>
          <dd className={styles.title}>
            <p>{Title}</p>
          </dd>
          <div className={styles.details}>
            <dt>개봉 연도</dt>
            <dd className={styles.year}>
              <p>{Year}</p>
            </dd>
            <dt>유형</dt>
            <dd className={styles.type}>
              <p>{Type}</p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default Item
