import { FC } from 'react'

import { ICatalog } from '@/ui/catalog-movies/catalog.interface'
import GalleryItem from '@/ui/gallery/GalleryItem'
import Description from '@/ui/heading/Description'
import Heading from '@/ui/heading/Heading'

import { getMovieUrl } from '@/config/url.config'

import Meta from '@/utils/meta/Meta'

import styles from './Catalog.module.scss'

const Catalog: FC<ICatalog> = ({ movies, title, description }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />

			{description && <Description text={description} />}

			<section className={styles.movies}>
				{movies.map((movie) => (
					<GalleryItem
						key={movie._id}
						item={{
							name: movie.title,
							posterPath: movie.poster,
							link: getMovieUrl(movie.slug),
							content: {
								title: movie.title
							}
						}}
						variant='horizontal'
					/>
				))}
			</section>
		</Meta>
	)
}

export default Catalog
