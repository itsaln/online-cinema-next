import { Head } from 'next/document'
import NextProgressBar from 'nextjs-progressbar'
import { FC, PropsWithChildren } from 'react'

import { accentColor } from '@/configs/constants'

import Favicons from '@/providers/HeadProvider/Favicons'

const HeadProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<NextProgressBar
				color={accentColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Head>
				<meta charSet='UTF-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, maximum-scale=1.0'
				/>

				<Favicons />

				<meta name='theme-color' content={'#181b1e'} />
				<meta name='msapplication-navbutton-color' content={'#181b1e'} />
				<meta name='app-mobile-web-app-status-bar-style' content={'#181b1e'} />
				<title>asfasfad</title>
			</Head>
			{children}
		</>
	)
}

export default HeadProvider
