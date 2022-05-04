import Footer from './footer'
import Header from './header'
import Container from './container'

export default function Layout({ children }) {
	return (
		<>
			<div className='min-h-screen'>
				<Container>
					<Header />
					<div className='md:hidden flex w-full border-b-0.5 border-gray-menu font-black'>
						<span className='flex-[1_1_50%] py-18 text-center uppercase border-r-0.5 border-gray-menu'>
							sections
						</span>
						<span className='flex-[1_1_50%] py-18 text-center uppercase'>
							shop
						</span>
					</div>
					<div className='md:px-24'>{children}</div>
				</Container>
			</div>
			<Footer />
		</>
	)
}
