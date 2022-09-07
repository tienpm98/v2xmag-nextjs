const FooterNavigation = ({ footerNavigation }) => {
	return (
		<ul className='flex gap-4 text-sm'>
			{footerNavigation.map((item, index) => (
				<li
					key={index}
					className='cursor-pointer hover:underline underline-offset-4'
				>
					{item.name}
				</li>
			))}
		</ul>
	)
}

export default FooterNavigation
