import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import SingleMovie from '@/screens/single-movie/SingleMovie'

import { IGalleryItem } from '@/ui/gallery/gallery.interface'

import { getMovieUrl } from '@/config/url.config'

import { MovieService } from '@/services/movie.service'

import { IMovie } from '@/shared/types/movie.types'

import Error404 from '../404'

const MoviePage: NextPage<{
	movie: IMovie | undefined
	similarMovies: IGalleryItem[]
}> = ({ movie, similarMovies }) => {
	return movie ? (
		<SingleMovie similarMovies={similarMovies || []} movie={movie} />
	) : (
		<Error404 />
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: movies } = await MovieService.getAll()
		const paths = movies.map((movie) => ({ params: { slug: movie.slug } }))

		return {
			paths,
			fallback: 'blocking'
		}
	} catch (error) {
		return {
			paths: [],
			fallback: false
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: movie } = await MovieService.getBySlug(String(params?.slug))
		const { data: dataSimilarMovies } = await MovieService.getByGenres(
			movie.genres.map((genre) => genre._id)
		)
		const similarMovies: IGalleryItem[] = dataSimilarMovies
			.filter((m) => m._id !== movie._id)
			.map((movie) => ({
				name: movie.title,
				posterPath: movie.poster,
				link: getMovieUrl(movie.slug)
			}))

		return {
			props: {
				similarMovies,
				movie
			}
		}
	} catch (error) {
		return {
			notFound: true
		}
	}
}

export default MoviePage
