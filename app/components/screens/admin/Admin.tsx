import { FC } from 'react'

import Statistics from '@/screens/admin/Statistics/Statistics'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const Admin: FC = () => {
	return (
		<Meta title='Admin panel'>
			<AdminNavigation />
			<Heading title='Some statistics' />
			<Statistics />
		</Meta>
	)
}

export default Admin
