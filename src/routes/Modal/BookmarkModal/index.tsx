import { useRecoil } from 'hooks/state'
import { bookmarkListState, bookmarkModalState } from 'states/movie'
import { useClickAway } from 'react-use'
import { cx } from 'styles'
import styles from './BookmarkModal.module.scss'
import Portal from '../Portal'
import { useRef } from 'react'
import Item from './Item/Item'

const BookmarkModal = (): JSX.Element => {
  const [bookmarkModal, setBookmarkModal, resetBookmarkModal] = useRecoil(bookmarkModalState)
  const [bookmarks, setBookmarks] = useRecoil(bookmarkListState)
  const { isOpen, isBookmarked, movie } = bookmarkModal
  const modalRef = useRef(null)
  const closeModal = () => {
    resetBookmarkModal()
  }
  const addBookmark = () => {
    const maxOrder = bookmarks.reduce((acc, bookmark) => (bookmark.order > acc ? bookmark.order : acc), 0)
    const newState = [...bookmarks, { ...movie, order: maxOrder + 1 }]
    setBookmarks(newState)
    closeModal()
  }
  const removeBookmark = () => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.imdbID !== bookmarkModal.movie.imdbID))
    closeModal()
  }
  useClickAway(modalRef, closeModal)
  return (
    <Portal>
      {isOpen ? (
        <div className={styles.modalBox}>
          <div className={styles.modalContent} ref={modalRef}>
            <Item movie={movie} />
            <div className={styles.buttonBox}>
              {isBookmarked ? (
                <button className={cx(styles.bookmarkButton, styles.remove)} type='button' onClick={removeBookmark}>
                  즐겨찾기에서 삭제
                </button>
              ) : (
                <button className={cx(styles.bookmarkButton, styles.add)} type='button' onClick={addBookmark}>
                  즐겨찾기에 추가
                </button>
              )}
              <button className={styles.closeButton} type='button' onClick={closeModal}>
                닫기
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </Portal>
  )
}

export default BookmarkModal