import styles from './Routes.module.scss'

import PageRouter from './PageRouter'

const App = () => {
  return (
    <div className={styles.app}>
      <PageRouter />
    </div>
  )
}

export default App
