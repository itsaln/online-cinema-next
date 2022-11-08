import { FC } from 'react'

import Search from '@/components/layout/Sidebar/Search/Search'

import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<Search />
			{/*movies container*/}
		</div>
	)
}

export default Sidebar
