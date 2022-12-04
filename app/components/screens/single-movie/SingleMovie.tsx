import { FC } from 'react'

import { IMoviePage } from '../../../../pages/movie/[slug]'
import Meta from '@/utils/meta/Meta'

const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies }) => {
	return <Meta title={movie.title} description={`Watch ${movie.title}`}>

	</Meta>
}

export default SingleMovie
