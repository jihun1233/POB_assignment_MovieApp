import BookmarkModal from 'routes/Modal/BookmarkModal'
import { Outlet } from 'react-router-dom'

import styles from './layout.module.scss'
import GNB from './GNB'
// TODO: Outlet 활용. Layout으로 바꾸기

const Layout = () => {
  return (
    <div className={styles.container}>
      <main>
        <Outlet />
      </main>
      <footer>
        <GNB />
      </footer>
      <BookmarkModal />
    </div>
  )
}

export default Layout
