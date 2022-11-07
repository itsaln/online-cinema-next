import { IMenu } from '@/components/layout/Navigation/MenuContainer/menu.interface'

const firstMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Home'
		},
		{
			icon: 'MdExplore',
			link: '/genres',
			title: 'Discovery'
		},
		{
			icon: 'MdRefresh',
			link: '/fresh',
			title: 'Home'
		},
		{
			icon: 'MdLocalFireDepartment',
			link: '/trending',
			title: 'Trending now'
		}
	]
}

export const userMenu: IMenu = {
	title: 'General',
	items: []
}

export const menus: IMenu[] = [firstMenu, userMenu]
