import { FC } from 'react'

import SkeletonLoader from '@/ui/SkeletonLoader'
import AdminTableHeader from '@/ui/admin-table/AdminTable/AdminTableHeader'
import AdminTableItem from '@/ui/admin-table/AdminTable/AdminTableItem'
import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'

import styles from './AdminTable.module.scss'

interface IAdminTable {
	tableItems: ITableItem[]
	isLoading: boolean
	headerItems: string[]
	removeHandler: (id: string) => void
}

const AdminTable: FC<IAdminTable> = ({
	headerItems,
	isLoading,
	removeHandler,
	tableItems
}) => {
	const confirmDelete = (id: string) => {
		if (confirm('Вы точно хотите удалить пользователя?')) removeHandler(id)
	}

	return (
		<div>
			<AdminTableHeader headerItems={headerItems} />

			{isLoading ? (
				<SkeletonLoader count={1} height={48} className='mt-4' />
			) : tableItems.length ? (
				tableItems.map((tableItem) => (
					<AdminTableItem
						key={tableItem._id}
						tableItem={tableItem}
						removeHandler={() => confirmDelete(tableItem._id)}
					/>
				))
			) : (
				<div className={styles.notFound}>Elements not found</div>
			)}
		</div>
	)
}

export default AdminTable
