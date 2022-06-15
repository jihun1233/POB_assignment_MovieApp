import { Link, useLocation } from 'react-router-dom'
import { cx } from 'styles'

import styles from './GNB.module.scss'

const GNB = () => {
  const { pathname } = useLocation()
  return (
    <nav className={styles.gnb}>
      <ul>
        <li>
          <Link className={cx({ [styles.selected]: pathname === '/search' })} to='/search'>
            검색
          </Link>
        </li>
        <li>
          <Link className={cx({ [styles.selected]: pathname === '/bookmark' })} to='/bookmark'>
            즐겨찾기
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default GNB
