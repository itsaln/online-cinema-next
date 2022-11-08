import { FC } from 'react'

import SearchList from '@/components/layout/Sidebar/Search/SearchList/SearchList'
import { useSearch } from '@/components/layout/Sidebar/Search/useSearch'

import styles from './Search.module.scss'
import SearchField from '@/ui/search-field/SearchField'

const Search: FC = () => {
	const { isSuccess, data, handleSearch, searchTerm } = useSearch()

	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	)
}

export default Search
