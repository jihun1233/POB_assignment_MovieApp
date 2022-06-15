import posterNotFound from 'assets/posterNotFound.png'
import { DragEvent, ForwardedRef, forwardRef, MouseEvent, SyntheticEvent, useEffect, useState } from 'react'
import { bookmarkListState, bookmarkModalState } from 'states/movie'
import { useRecoil } from 'hooks/state'
import { IMovie } from 'types/movie'
import { AiFillStar } from 'react-icons/ai'
import { cx } from 'styles'

import styles from './MovieItem.module.scss'

interface Props {
  movie: IMovie
  isBookmarked: boolean
}

const MovieItem = forwardRef(({ movie, isBookmarked }: Props, ref: ForwardedRef<HTMLLIElement>) => {
  const [, setBookmarkModal] = useRecoil(bookmarkModalState)
  const [bookmarks, setBookmarks] = useRecoil(bookmarkListState)
  const [isDragOver, setIsDragOver] = useState(false)
  const swapOrder = (targetId: string) => {
    const id = movie.imdbID

    if (targetId === id) return
    const currentIndex = bookmarks.findIndex((bookmark) => bookmark.imdbID === id)
    const targetIndex = bookmarks.findIndex((bookmark) => bookmark.imdbID === targetId)
    if (currentIndex === undefined || targetIndex === undefined) return

    const newBookmarks = [...bookmarks]
    const currentOrder = newBookmarks[currentIndex].order
    const targetOrder = newBookmarks[targetIndex].order
    newBookmarks[currentIndex] = { ...newBookmarks[currentIndex], order: targetOrder }
    newBookmarks[targetIndex] = { ...newBookmarks[targetIndex], order: currentOrder }

    setBookmarks(newBookmarks)
  }
  const handleClick = () => {
    setBookmarkModal({ isOpen: true, movie, isBookmarked })
  }
  const handleDragStart = (e: DragEvent) => {
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('movieId', movie.imdbID)
  }
  const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragOver(true)
  }
  const handleDrop = (e: DragEvent) => {
    const id = e.dataTransfer.getData('movieId')
    swapOrder(id)
  }
  const handleDragLeaveEnd = (e: MouseEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }
  const handleImgError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const { currentTarget } = e
    currentTarget.onerror = null
    currentTarget.src = posterNotFound
  }
  useEffect(() => {
    setIsDragOver(false)
  }, [bookmarks])
  return (
    <li
      className={cx(styles.movieItem, { [styles.dragOver]: isDragOver })}
      ref={ref}
      role='row'
      onClick={handleClick}
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeaveEnd}
      onDrop={handleDrop}
      onDragEnd={handleDragLeaveEnd}
    >
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
