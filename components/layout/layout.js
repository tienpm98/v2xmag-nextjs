import { useContext } from 'react'
import { Context } from '@/context'
import { useScrollDirection } from 'hooks/useScrollDirection'

import Footer from './footer'
import Header from './header'
import Container from './container'
import Menu from '../features/menu'

export default function Layout({ children }) {
	const { state, dispatch } = useContext(Context)
	const scrollDirection = useScrollDirection()
	const toggleMenu = state.toggleMenu

	const clickMenu = () => {
		dispatch({
			type: 'TOGGLE_MENU',
			payload: true,
		})
	}

	const checkScroll = () => {
		if (toggleMenu) {
			return 'top-70'
		}
		if (!toggleMenu) {
			if (scrollDirection === 'down') {
				return '-top-70'
			} else {
				return 'top-70'
			}
		}
	}

	return (
		<>
			<div className='min-h-screen'>
				<Container>
					<Header />
					<div
						className={`sticky flex lg:hidden w-full border-gray-menu font-black z-50 bg-white
						transition-all duration-500
						border-b border-t border-gray-menu
						${checkScroll()}
						 `}
					>
						<span
							className='flex-50 py-18 text-center uppercase border-r-section border-gray-menu hover:underline underline-offset-4 leading-base'
							onClick={clickMenu}
						>
							sections
						</span>
						<span className='flex-50 py-18 text-center uppercase hover:underline underline-offset-4 leading-base'>
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
