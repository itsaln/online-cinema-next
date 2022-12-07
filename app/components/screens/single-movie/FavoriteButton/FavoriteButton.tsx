import cn from 'classnames'
import { FC, useEffect, useState } from 'react'
import { useMutation } from 'react-query'

import { useFavorites } from '@/screens/favorites/useFavorites'

import { UserService } from '@/services/user.service'

import { toastError } from '@/utils/toast-error'

import styles from './FavoriteButton.module.scss'
import HeartImage from './heart-animation.png'

const FavoriteButton: FC<{ movieId: string }> = ({ movieId }) => {
	const [isSmashed, setIsSmashed] = useState(false)
	const { favoritesMovies, refetch } = useFavorites()

	useEffect(() => {
		if (!favoritesMovies) return

		const isHasMovie = favoritesMovies.some((f) => f._id === movieId)

		if (isSmashed !== isHasMovie) setIsSmashed(isHasMovie)
	}, [favoritesMovies, isSmashed, movieId])

	const { mutateAsync } = useMutation(
		'update favorites',
		() => UserService.toggleFavorite(movieId),
		{
			onSuccess: () => {
				setIsSmashed(!isSmashed)
				refetch()
			},
			onError: (error) => {
				toastError(error, 'Update favorite list')
			}
		}
	)

	return (
		<button
			onClick={() => mutateAsync()}
			className={cn(styles.button, {
				[styles.animate]: isSmashed
			})}
			style={{ backgroundImage: `url('${HeartImage.src}')` }}
		 />
	)
}

export default FavoriteButton
