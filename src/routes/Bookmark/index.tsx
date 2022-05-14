import MovieItem from 'components/MovieItem'
import { useRecoil } from 'hooks/state'
import { bookmarkListState } from 'states/movie'
import styles from './Bookmark.module.scss'

const Bookmark = (): JSX.Element => {
  const [bookmarks] = useRecoil(bookmarkListState)

  return (
    <div className={styles.bookmark}>
      <h1>즐겨찾기</h1>
      <section className={styles.bookmarkListBox}>
        <ul>
          {bookmarks.map((bookmark) => (
            <MovieItem key={`bookmark ${bookmark.imdbID}`} movie={bookmark} isBookmarked />
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Bookmark
