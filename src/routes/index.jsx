import { Routes, Route, Navigate } from 'react-router-dom'

import styles from './Routes.module.scss'
import Layout from './Layout'
import Search from './Search'
import Bookmark from './Bookmark'

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Navigate replace to='/search' />} />
          <Route path='search' element={<Search />} />
          <Route path='bookmark' element={<Bookmark />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
