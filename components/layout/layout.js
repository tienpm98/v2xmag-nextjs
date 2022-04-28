import Footer from './footer'
import Header from './header'
import Container from './container'

export default function Layout({ children }) {
	return (
		<>
			<div className='min-h-screen'>
				<Container>
					<Header />
					<div className='px-24'>

					{children}
					</div>
				</Container>
			</div>
			<Footer />
		</>
	)
}
