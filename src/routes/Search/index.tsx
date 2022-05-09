import React from 'react'
import styles from './Search.module.scss'
import {BsSearch} from 'react-icons/bs'

const Search = (): JSX.Element => {
  return (
    <div>
      <div className={styles.searchBox}>
        <BsSearch />
      </div>
    </div>
  )
}

export default Search