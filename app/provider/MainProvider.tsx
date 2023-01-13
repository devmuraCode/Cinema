import Layout from '@/components/layout/Layout'
import { FC } from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import ReduxToast from './ReduxToast'
import { store } from '@/store/store'
import HeadProvider from './HeadProvider'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

interface Props {
	children: React.ReactNode
}
const MainProvider: FC<Props> = ({ children }) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToast />
					<Layout>{children}</Layout>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}

export default MainProvider
