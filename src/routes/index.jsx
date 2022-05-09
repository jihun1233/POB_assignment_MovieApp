import styles from './Routes.module.scss'

import Weather from './Weathers'
import PageRouter from './PageRouter'

const App = () => {
  return (
    <div className={styles.app}>
      {/* <TodoList /> */}
      <PageRouter />
    </div>
  )
}

export default App
