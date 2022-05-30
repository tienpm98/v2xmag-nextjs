const ListPostsLayout = ({
	children,
	adsHorizontal,
	isCol,
	isScrollHorizontal,
	hasBorderBottom,
	isSectionPost,
}) => {
	return (
		<div
			className={`flex flex-col flex-wrap pb-20 lg:flex-row justify-between ${
				hasBorderBottom ? 'border-b border-black' : ''
			} `}
		>
			<div
				className={`
				flex gap-4 pb-0 lg:pb-20 
				${isSectionPost ? 'flex-wrap' : ''}
				${
					isScrollHorizontal
						? 'flex-row basic-full overflow-x-auto lg:overflow-auto '
						: 'flex-col'
				}
				${isCol && 'flex-col lg:flex-row'}  
				${isCol && 'basis-full'}
				`}
			>
				{children}
			</div>

			{adsHorizontal && <div className='w-full'>{adsHorizontal}</div>}
		</div>
	)
}

export default ListPostsLayout
