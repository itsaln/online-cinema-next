import { FC } from 'react'

import { IMovie } from '@/shared/types/movie.types'

import styles from './SearchList.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { getMovieUrl } from '@/configs/url.config'

const SearchList: FC<{ movies: IMovie[] }> = ({movies}) => {
	return <div className={styles.list}>
		{movies.length ? movies.map(movie => (
			<Link key={movie._id} href={getMovieUrl(movie.slug)}>
				<a>
					<Image
						src={movie.poster}
						width={50}
						height={50}
						alt={movie.title}
						objectFit='cover'
						objectPosition='top'
						draggable={false}
					/>
					<span>{movie.title}</span>
				</a>
			</Link>
		)) : <div className='text-white text-center my-4'>Movies not found!</div>}
	</div>
}

export default SearchList
