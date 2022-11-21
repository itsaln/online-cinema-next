import type { GetStaticProps, NextPage } from 'next'

import Home from '@/screens/home/Home'
import { IHome } from '@/screens/home/home.interface'

import { ISlide } from '@/ui/slider/slider.interface'

import { MovieService } from '@/services/movie.service'

import { getGenreList } from '@/utils/movie/getGenreList'

import { getMovieUrl } from '@/configs/url.config'

const HomePage: NextPage<IHome> = ({ slides }) => {
	return <Home slides={slides} />
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

		return {
			props: {
				slides
			} as IHome
		}
	} catch (error) {
		return {
			props: {
				slides: []
			}
		}
	}
}

export default HomePage
