import type { AppProps } from 'next/app'

import MainProvider from '@/providers/MainProvider'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

import '@/assets/styles/globals.scss'
import '@/assets/styles/react-select.scss'

type TypeAppProps = AppProps & TypeComponentAuthFields

function MyApp({ Component, pageProps }: TypeAppProps) {
	// console.log('API_URL:---', process.env.APP_URL)
	// console.log('API_SERVER_URL:---', process.env.APP_SERVER_URL)

	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default MyApp
