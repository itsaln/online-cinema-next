import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'

import Navigation from '@/components/layout/Navigation/Navigation'
import Sidebar from '@/components/layout/Sidebar/Sidebar'

import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={cn(styles.center, 'custom-scroll')}>{children}</div>
			<Sidebar />
		</div>
	)
}

export default Layout
