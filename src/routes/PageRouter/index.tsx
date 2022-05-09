import React from 'react'
import styles from './PageRouter.module.scss'
import { Routes, Route } from 'react-router-dom'
import Search from 'routes/Search'
import Bookmark from 'routes/Bookmark'

const PageRouter = () => {
  return (
    <div className={styles.container}>
      <main>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
      </main>
      <footer>
        <span>검색</span>
        <span>즐겨찾기</span>
      </footer>
    </div>
  )
}

export default PageRouter