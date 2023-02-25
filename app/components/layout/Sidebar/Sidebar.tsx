import cn from 'classnames'
import { FC } from 'react'

import MoviesContainer from './MoviesContainer/MoviesContainer'
import Search from './Search/Search'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<div className={cn(styles.sidebar, 'hide-scroll')}>
			<Search />
			<MoviesContainer />
		</div>
	)
}

export default Sidebar