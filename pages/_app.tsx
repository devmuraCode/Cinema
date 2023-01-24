import '@/assets/styles/globals.scss'
import { TypeComponentAuthFields } from '@/shared/types/auth.types';
import type { AppProps } from 'next/app'
import MainProvider from 'provider/MainProvider';

type TypeAppProps = AppProps & TypeComponentAuthFields

function App({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default App;
