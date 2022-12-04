import { FC } from 'react'

import styles from './Banner.module.scss'

interface IBanner {
	image: string
	Detail?: FC | null
}

const Banner: FC<IBanner> = () => {
	return (
	    <div>Banner</div>
	)
}

export default Banner
