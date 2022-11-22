import type { GetStaticProps, NextPage } from 'next'

import Home from '@/screens/home/Home'
import { IHome } from '@/screens/home/home.interface'

import { IGalleryItem } from '@/ui/gallery/gallery.interface'
import { ISlide } from '@/ui/slider/slider.interface'

import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

import { getGenreList } from '@/utils/movie/getGenreList'

import { getActorsUrl } from '@/configs/api.config'
import { getMovieUrl } from '@/configs/url.config'

const HomePage: NextPage<IHome> = ({ slides, actors, trendingMovies }) => {
	return (
		<Home slides={slides} actors={actors} trendingMovies={trendingMovies} />
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll()

		const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
			_id: m._id,
			link: getMovieUrl(m.slug),
			bigPoster: m.bigPoster,
			subTitle: getGenreList(m.genres),
			title: m.title
		}))

		const { data: dataActors } = await ActorService.getAll()

		const actors: IGalleryItem[] = dataActors.slice(0, 7).map((actor) => ({
			name: actor.name,
			posterPath: actor.photo,
			link: getActorsUrl(actor.slug),
			content: {
				title: actor.name,
				subTitle: `+${actor.countMovies} movies`
			}
		}))

		const dataTrendingMovies = await MovieService.getMostPopularMovies()

		const trendingMovies: IGalleryItem[] = dataTrendingMovies
			.slice(0, 7)
			.map((movie) => ({
				name: movie.title,
				posterPath: movie.poster,
				link: getMovieUrl(movie.slug)
			}))

		return {
			props: {
				slides,
				actors,
				trendingMovies
			} as IHome
		}
	} catch (error) {
		return {
			props: {
				slides: [],
				actors: [],
				trendingMovies: []
			}
		}
	}
}

export default HomePage
