import { FC } from 'react'

import Menu from '@/components/layout/Navigation/MenuContainer/Menu'
import { firstMenu, userMenu } from '@/components/layout/Navigation/MenuContainer/menu.data'

import styles from './Menu.module.scss'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			{/*Genres menu*/}
			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer
