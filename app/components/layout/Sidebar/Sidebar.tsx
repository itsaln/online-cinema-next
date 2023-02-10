import cn from 'classnames'
import { FC } from 'react'

import MoviesContainer from '@/components/layout/Sidebar/MoviesContainer/MoviesContainer'
import Search from '@/components/layout/Sidebar/Search/Search'

import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<div className={cn(styles.sidebar, 'custom-scroll')}>
			<Search />
			<MoviesContainer />
		</div>
	)
}

export default Sidebar
