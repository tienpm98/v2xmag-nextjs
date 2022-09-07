import React from 'react'

const FooterMenuItem = (item) => {
	return (
		<li className='cursor-pointer hover:underline underline-offset-4'>
			{item.name}
		</li>
	)
}

const FooterMenu = ({ title, menuItems }) => {
	return (
		<ul className='flex flex-col gap-20 px-2'>
			<span className='font-black'>{title}</span>
			<div className='flex flex-col text-14 leading-22'>
				{menuItems.map((item, index) => (
					<FooterMenuItem key={index} {...item} />
				))}
			</div>
		</ul>
	)
}

export default FooterMenu
