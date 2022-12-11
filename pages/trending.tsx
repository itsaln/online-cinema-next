import { GetStaticProps, NextPage } from 'next'

import Catalog from '@/ui/catalog-movies/Catalog'

import { MovieService } from '@/services/movie.service'

import { IMovie } from '@/shared/types/movie.types'

const TrendingPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			title='Trending movies'
			movies={movies || []}
			description='Trending movies in excellent quality: legal, safe, without ads'
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const movies = await MovieService.getMostPopularMovies()

		return {
			props: {
				movies
			}
		}
	} catch (error) {
		return {
			notFound: true
		}
	}
}

export default TrendingPage
