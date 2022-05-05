const ListPostsLayout = ({
	children,
	adsHorizontal,
	isCol,
	isScrollHorizontal,
	hasBorderBottom,
}) => {
	return (
		<div
			className={`flex flex-col flex-wrap pb-8 lg:flex-row justify-between ${
				hasBorderBottom ? 'border-b border-black' : ''
			} `}
		>
			<div
				className={`
				flex gap-4 pb-20 lg:pb-40 
				${
					isScrollHorizontal
						? 'flex-row basic-full overflow-x-auto lg:overflow-auto '
						: 'flex-col'
				}
				${isCol && 'flex-col lg:flex-row'}  
				${isCol && 'basis-full' }
				`}
			>
				{children}
			</div>

			{adsHorizontal && <div className='w-full'>{adsHorizontal}</div>}
		</div>
	)
}

export default ListPostsLayout
