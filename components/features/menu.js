import { useState, useContext } from 'react'
import { Context } from '@/context'

import Layout from '@/components/layout/menu'

const menuItems = [
	{
		id: 0,
		name: 'Art',
		path: '#',
	},
	{ id: 1, name: 'Culture', path: '#' },
	{
		id: 2,
		name: 'Fashion',
		path: '#',
	},
	{
		id: 3,
		name: 'Life',
		path: '#',
	},
	{
		id: 4,
		name: 'Music',
		path: '#',
	},
	{
		id: 5,
		name: 'News',
		path: '#',
	},
	{
		id: 6,
		name: 'People',
		path: '#',
	},
	{
		id: 7,
		name: 'Contact',
		path: '#',
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

	return (
		<Layout
			clickOutside={() =>
				dispatch({
					type: 'TOGGLE_MENU',
					payload: false,
				})
			}
			isShow={state.toggleMenu}
		>
			<ul className='font-black text-center md:text-left md:pl-36 w-fit'>
				{menuItems.map((item, index) => (
					<li
						key={index}
						className='text-60 md:text-100 uppercase text-black leading-tight'
						onMouseEnter={() => onMouseEnter(item.id)}
						onMouseLeave={() => setHover(-1)}
						style={{
							color:
								hover === index ? 'black' : hover === -1 ? 'black' : 'gray',
						}}
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
			</ul>
		</Layout>
	)
}
