import Layout from '@/components/layout/Layout'
import { FC } from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'

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
		<QueryClientProvider client={queryClient}><Layout>{children}</Layout></QueryClientProvider>
	)
}

export default MainProvider
