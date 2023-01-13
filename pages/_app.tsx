import '@/assets/styles/globals.scss'
import type { AppProps } from 'next/app'
import MainProvider from 'provider/MainProvider';


function App({ Component, pageProps }: AppProps) {
	return (
		<MainProvider>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default App;
