const GridLayout = ({ children, adsComponent }) => {
	return (
		<div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-x-20 lg:gap-y-40 gap-x-20 gap-y-20'>
			<div className='lg:row-start-2 lg:col-span-3 row-start-4 col-span-1'>
				{adsComponent}
			</div>
			{children}
		</div>
	)
}

export default GridLayout
