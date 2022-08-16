const GridLayout = ({ children }) => {
	return (
		<div className='grid lg:grid-rows-3 grid-rows-1 lg:grid-cols-3 grid-cols-1 gap-16'>
			{children}
		</div>
	)
}

export default GridLayout
