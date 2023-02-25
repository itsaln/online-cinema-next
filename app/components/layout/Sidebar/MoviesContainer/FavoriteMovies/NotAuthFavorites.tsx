import { FC } from 'react'

const NotAuthFavorites: FC = () => {
	return (
		<div className='mt-11 bg-gray-700 bg-opacity-20 py-2.5 2xl:py-3 px-4 2xl:px-5 rounded-lg text-white text-opacity-80'>
			For viewing favorites plz authorize!
		</div>
	)
}

export default NotAuthFavorites
