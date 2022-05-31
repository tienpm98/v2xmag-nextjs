import React from 'react'

const FooterMenuItem = (item) => {
	return <li className='cursor-pointer hover:underline'>{item.name}</li>
}

const FooterMenu = ({ title, menuItems }) => {
	return (
		<ul className='flex flex-col gap-2 px-2'>
			<span className='font-bold'>{title}</span>
			<div className='flex flex-col gap-1 text-sm'>
				{menuItems.map((item, index) => (
					<FooterMenuItem key={index} {...item} />
				))}
			</div>
		</ul>
	)
}

export default FooterMenu
