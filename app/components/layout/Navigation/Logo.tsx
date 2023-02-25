import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href='/'>
			<a className='block px-9 2xl:px-layout mb-10'>
				<Image
					src={logoImage}
					width={247}
					height={34}
					alt='Online cinema'
					draggable={false}
				/>
			</a>
		</Link>
	)
}

export default Logo
