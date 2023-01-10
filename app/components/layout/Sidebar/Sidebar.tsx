import Search from '@/components/layout/Sidebar/Search/Search'
import SearchField from '@/components/ui/search-field/SearchField'
import { FC } from 'react'
import MoviesContainer from './MoviesContainer/MoviesContainer'

import styles from './Sidebar.module.scss'

const Sidebar:FC = () => {
  return (
    <div className={styles.sidebar}>
      <Search/>
      <MoviesContainer/>
    </div>
  )
}

export default Sidebar