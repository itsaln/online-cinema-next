import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Layout from '@/components/layout/Layout'

import ReduxToast from '@/providers/ReduxToast'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<ReduxToast />
			<Layout>{children}</Layout>
		</QueryClientProvider>
	)
}

export default MainProvider
