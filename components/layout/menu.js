const Menu = ({ clickOutside, isShow, children }) => {
	return (
		<div
			onClick={clickOutside}
			className={`
			flex
			flex-col 
			justify-center 
			items-center md:items-start 
			fixed 
			bg-blur 
			slide
			top-131
			lg:top-80
			left-0
			
			${isShow ? 'w-screen' : 'w-0'} 
			${isShow ? 'opacity-80' : 'opacity-0'}
			${isShow ? 'z-50' : '-z-10'}
			`}
		>
			{children}
		</div>
	)
}

export default Menu
