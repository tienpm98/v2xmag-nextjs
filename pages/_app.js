import { Provider } from '@/context'
import '@/styles/index.css'

function MyApp({ Component, pageProps }) {
	return (
		<Provider>
			<Component {...pageProps} />
		</Provider>
	)
}

export default MyApp
