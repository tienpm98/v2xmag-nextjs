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
			<div className='flex justify-between items-center h-14 w-full'>
				<MenuIcon onClick={clickMenu} />
				<div className='flex justify-center absolute mx-auto left-0 right-0'>
					<a href='/' className='w-28'>
						<Logo />
					</a>
				</div>
				<div className='flex items-center gap-4 z-10'>
					<span className='text-xs font-black  cursor-pointer hover:underline'>
						FOLLOW
					</span>
					<MoonIcon />
					<GolbeIcon />
					<PersonIcon />
					<SearchIcon />
					<button className='rounded-md px-2.5 py-2 bg-black text-white text-xs'>
						SHOP HBX
					</button>
				</div>
			</div>

			<Menu />
			<Contact />
		</>
	)
}
