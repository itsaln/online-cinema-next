import { INavItem } from '@/ui/admin-navigation/admin-navigation.interface'
import { getAdminHomeUrl, getAdminUrl } from '@/configs/url.config'

export const navItems: INavItem[] = [
	{
		title: 'Statistics',
		link: getAdminHomeUrl()
	},
	{
		title: 'Users',
		link: getAdminUrl('users')
	},
	{
		title: 'Movies',
		link: getAdminUrl('movies')
	},
	{
		title: 'Actors',
		link: getAdminUrl('actors')
	},
	{
		title: 'Genres',
		link: getAdminUrl('genres')
	}
]
