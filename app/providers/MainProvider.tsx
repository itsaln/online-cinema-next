import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import Layout from '@/components/layout/Layout'

import HeadProvider from '@/providers/HeadProvider/HeadProvider'
import ReduxToast from '@/providers/ReduxToast'

import { store } from '@/store/store'
import AuthProvider from '@/providers/AuthProvider/AuthProvider'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

const MainProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({ children, Component }) => {
	return (
		// <HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToast />
					<AuthProvider Component={Component}>
						<Layout>{children}</Layout>
					</AuthProvider>
				</QueryClientProvider>
			</Provider>
		// </HeadProvider>
	)
}

export default MainProvider
