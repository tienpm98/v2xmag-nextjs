import { useContext } from 'react'
import { Context } from '@/context'
import { useScrollDirection } from 'hooks/useScrollDirection'

import MoonIcon from '../ui/Icon/moon'
import PersonIcon from '../ui/Icon/person'
import SearchIcon from '../ui/Icon/search'
import HeaderLogo from '../ui/Icon/headerLogo'
import Menu from '../features/menu'

export default function Header() {
	const { dispatch } = useContext(Context)
	const scrollDirection = useScrollDirection()

	const clickMenu = () => {
		dispatch({
			type: 'TOGGLE_MENU',
			payload: true,
		})
	}

	return (
		<>
			<div
				className={`
				flex w-full bg-black sticky z-50
				transition-all duration-500
				 ${scrollDirection === 'down' ? '-top-80' : 'top-0'} 
					`}
			>
				<div className='container mx-auto flex justify-between items-center text-white px-30 lg:px-0 py-20 lg:pt-27 lg:pb-23'>
					<div className='hidden lg:flex gap-26'>
						<span
							className='font-black text-12 lg:text-15 cursor-pointer hover:underline'
							onClick={clickMenu}
						>
							SECTIONS
						</span>
						{/* <span className='font-black text-xs lg:text-[15px] cursor-pointer hover:underline'>
							SHOP
						</span> */}
					</div>
					<div className='lg:hidden flex'>
						<PersonIcon />
					</div>
					<div className='flex justify-center'>
						<a href='/'>
							<HeaderLogo />
						</a>
					</div>
					<div className='hidden lg:flex items-center gap-30'>
						<MoonIcon />
						{/* <GolbeIcon /> */}
						<PersonIcon />
						<SearchIcon />
					</div>

					<div className='lg:hidden flex '>
						<SearchIcon />
					</div>
				</div>
			</div>

			<Menu />
		</>
	)
}
