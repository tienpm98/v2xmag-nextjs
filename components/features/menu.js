import { useState, useContext } from 'react'
import { Context } from '@/context'

import Layout from '@/components/layout/menu'
import EmailSubcribe from './email-subcribe'
import Close from '../ui/Icon/close'

const menuItems = [
	{
		id: 0,
		name: 'culture',
		path: '#',
	},
	{ id: 1, name: 'design', path: '#' },
	{
		id: 2,
		name: 'sneaker',
		path: '#',
	},
	{
		id: 3,
		name: 'style',
		path: '#',
	},
	{
		id: 3,
		name: 'podcast',
		path: '/podcast',
	},
]

const subMenuItems = [
	{
		id: 0,
		name: 'shop',
		path: '#',
	},
	{ id: 1, name: 'features', path: '#' },
	{
		id: 2,
		name: 'company',
		path: '#',
	},
	{
		id: 3,
		name: 'more',
		path: '/sections',
	},
]

export default function Menu() {
	const { state, dispatch } = useContext(Context)
	const [hover, setHover] = useState(-1)

	const onMouseEnter = (id) => {
		setHover(id)
	}

	const onClick = (path) => {
		if (path === '#') {
			dispatch({
				type: 'TOGGLE_CONTACT',
				payload: true,
			})
		}
	}

	const clickOutside = () => {
		dispatch({
			type: 'TOGGLE_MENU',
			payload: false,
		})
	}

	return (
		<Layout isShow={state.toggleMenu}>
			<ul className='h-full w-full lg:w-fit bg-white font-white text-center lg:text-left px-35 lg:px-100  pt-23 lg:pt-40 pb-45 lg:pb-75 border-gray-menu lg:border-t relative box-border'>
				<div
					className='absolute right-40 cursor-pointer'
					onClick={clickOutside}
				>
					<Close />
				</div>
				<div className='flex flex-col justify-between h-full'>
					<div className='flex flex-col gap-30'>
						<div className='flex flex-col pt-40 lg:pt-65'>
							{menuItems.map((item, index) => (
								<li
									key={index}
									className='text-25 lg:text-30 uppercase text-black font-black hover:underline leading-60'
									onMouseEnter={() => onMouseEnter(item.id)}
									onMouseLeave={() => setHover(-1)}
								>
									<a
										className='inline-block w-full'
										href={item.path}
										onClick={() => onClick(item.path)}
									>
										{item.name}
									</a>
								</li>
							))}
						</div>

						<div className='flex flex-col lg:py-30 text-15 leading-30'>
							{subMenuItems.map((item, index) => (
								<li
									key={index}
									className='text-15 uppercase text-black leading-tight hover:underline underline-offset-4 leading-extra'
									onMouseEnter={() => onMouseEnter(item.id)}
									onMouseLeave={() => setHover(-1)}
								>
									<a
										className='inline-block w-full'
										href={item.path}
										onClick={() => onClick(item.path)}
									>
										{item.name}
									</a>
								</li>
							))}
						</div>
					</div>
					<EmailSubcribe />
				</div>
			</ul>
		</Layout>
	)
}
