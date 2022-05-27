import Footer from './footer'
import Header from './header'
import Container from './container'

export default function Layout({ children }) {
	return (
		<>
			<div className='min-h-screen'>
				<Container>
					<Header />
					<div className='lg:hidden flex w-full border-b-section border-gray-menu font-black'>
						<span className='flex-50 py-18 text-center uppercase border-r-section border-gray-menu'>
							sections
						</span>
						<span className='flex-50 py-18 text-center uppercase'>shop</span>
					</div>
					{children}
				</Container>
			</div>
			<Footer />
		</>
	)
}
