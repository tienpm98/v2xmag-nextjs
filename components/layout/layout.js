import { useContext } from 'react'
import { Context } from '@/context'
import Footer from './footer'
import Header from './header'
import Container from './container'
import Menu from '../features/menu'

export default function Layout({ children }) {
	const { dispatch } = useContext(Context)

	const clickMenu = () => {
		dispatch({
			type: 'TOGGLE_MENU',
			payload: true,
		})
	}

	return (
		<>
			<div className='min-h-screen'>
				<Container>
					<Header />
					<div
						className={`sticky flex lg:hidden w-full border-b-section border-gray-menu font-black z-50 bg-white
						 `}
					>
						<span
							className='flex-50 py-18 text-center uppercase border-r-section border-gray-menu hover:underline leading-base'
							onClick={clickMenu}
						>
							sections
						</span>
						<span className='flex-50 py-18 text-center uppercase hover:underline leading-base'>
							shop
						</span>
					</div>
					<div className=''>{children}</div>
				</Container>
			</div>
			<Footer />
			<Menu />
		</>
	)
}
