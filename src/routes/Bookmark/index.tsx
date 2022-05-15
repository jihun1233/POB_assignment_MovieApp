import DraggableMovieItem from 'components/MovieItem/DraggableMovieItem'
import { useRecoil } from 'hooks/state'
import { bookmarkListState } from 'states/movie'
import styles from './Bookmark.module.scss'

const Bookmark = (): JSX.Element => {
  const [bookmarks] = useRecoil(bookmarkListState)
  const bookmarksSorted = [...bookmarks].sort((a, b) => a.order - b.order)

  return (
    <div className={styles.bookmark}>
      <h1>즐겨찾기</h1>
      <section className={styles.bookmarkListBox}>
        <ul>
          {bookmarksSorted.map((bookmark) => (
            <DraggableMovieItem key={`bookmark ${bookmark.imdbID}`} movie={bookmark} isBookmarked />
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Bookmark
