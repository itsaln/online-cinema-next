import { FC } from 'react'

import { IHome } from '@/screens/home/home.interface'

import Gallery from '@/ui/gallery/Gallery'
import Heading from '@/ui/heading/Heading'
import SubHeading from '@/ui/heading/SubHeading'
import Slider from '@/ui/slider/Slider'

import Meta from '@/utils/meta/Meta'

const Home: FC<IHome> = ({ slides, actors, trendingMovies }) => {
	return (
		<Meta
			title='Watch movies online'
			description='Watch MovieApp movies and TV shows online or stream right to your browser.'
		>
			<Heading
				title='Watch movies online'
				className='text-gray-300 mb-8 text-lg 2xl:text-xl'
			/>

			{slides.length ? (
				<Slider slides={slides} />
			) : (
				<div className='text-danger'>Movies not found</div>
			)}

			<div className='mt-10'>
				<SubHeading title='Trending now' />
				{trendingMovies.length ? (
					<Gallery items={trendingMovies} />
				) : (
					<div className='text-danger'>Movies not found</div>
				)}
			</div>

			<div className='mt-10'>
				<SubHeading title='Best actors' />
				{actors.length ? (
					<Gallery items={actors} />
				) : (
					<div className='text-danger'>Actors not found</div>
				)}
			</div>
		</Meta>
	)
}

export default Home
