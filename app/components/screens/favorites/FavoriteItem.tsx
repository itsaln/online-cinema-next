import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import FavoriteButton from '@/screens/single-movie/FavoriteButton/FavoriteButton'

import { IMovie } from '@/shared/types/movie.types'

import { getMovieUrl } from '@/configs/url.config'

import styles from './Favorites.module.scss'

const FavoriteItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.itemWrapper}>
			<FavoriteButton movieId={movie._id} />
			<Link href={getMovieUrl(movie.slug)}>
				<a className={styles.item}>
					<Image
						src={movie.bigPoster}
						alt={movie.title}
						layout='fill'
						draggable={false}
						priority
					/>
				</a>
			</Link>
		</div>
	)
}

export default FavoriteItem
