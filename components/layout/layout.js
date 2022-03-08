import Footer from './footer'
import Header from './header'
import Container from './container'

export default function Layout({ children }) {
	return (
		<>
			<div className='min-h-screen'>
				<Container>
					<Header />
					{children}
				</Container>
			</div>
			<Footer />
		</>
	)
}
