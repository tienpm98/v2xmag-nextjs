const GridLayout = ({ children, adsComponent }) => {
	return (
		<div className='grid lg:grid-cols-3 grid-cols-1 gap-20'>
			<div className='lg:row-start-2 lg:col-span-3 row-start-4 col-span-1'>{adsComponent}</div>
			{children}
		</div>
	)
}

export default GridLayout
