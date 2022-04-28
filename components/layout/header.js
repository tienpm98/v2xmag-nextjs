import { useContext } from 'react'
import { Context } from '@/context'

import GolbeIcon from '../ui/Icon/globe'
import MenuIcon from '../ui/Icon/menu'
import MoonIcon from '../ui/Icon/moon'
import PersonIcon from '../ui/Icon/person'
import SearchIcon from '../ui/Icon/search'
import Logo from '../ui/Icon/logo'

import Menu from '../features/menu'
import Contact from '../features/contact'

export default function Header() {
	const { dispatch } = useContext(Context)
	const clickMenu = () => {
		dispatch({
			type: 'TOGGLE_MENU',
			payload: true,
		})
	}
	return (
		<>
			<div className='flex h-14 w-full py-10 bg-black '>
				<div className='container mx-auto flex justify-between items-center text-white'>
					<div className='flex gap-2'>
						<span className='font-black px-2.5 py-2 text-xs cursor-pointer'>
							SECTIONS
						</span>
						<span className='font-black px-2.5 py-2 text-xs cursor-pointer'>
							SHOP
						</span>
					</div>
					<div className='flex justify-center'>
						<a href='/' className='w-28'>
							<Logo />
						</a>
					</div>
					<div className='flex items-center gap-8'>
						<MoonIcon />
						<GolbeIcon />
						<PersonIcon />
						<SearchIcon />
					</div>
				</div>
			</div>
		</>
	)
}
