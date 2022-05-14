import React from 'react'
import styles from './PageRouter.module.scss'
import { Routes, Route, Navigate } from 'react-router-dom'
import Search from 'routes/Search'
import Bookmark from 'routes/Bookmark'
import GNB from './GNB'

const PageRouter = () => {
  return (
    <div className={styles.container}>
      <main>
        <Routes>
          <Route path='/' element={<Navigate replace to='/search' />} />
          <Route path='/search' element={<Search />} />
          <Route path='/bookmark' element={<Bookmark />} />
        </Routes>
      </main>
      <footer>
        <GNB />
      </footer>
    </div>
  )
}

export default PageRouter
