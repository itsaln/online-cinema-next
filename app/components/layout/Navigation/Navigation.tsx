import cn from 'classnames'
import { FC } from 'react'

import Logo from '@/components/layout/Navigation/Logo'
import MenuContainer from '@/components/layout/Navigation/MenuContainer/MenuContainer'

import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<div className={cn(styles.navigation, 'custom-scroll')}>
			<Logo />
			<MenuContainer />
		</div>
	)
}

export default Navigation
