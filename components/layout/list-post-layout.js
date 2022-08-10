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
			className={`flex flex-col flex-wrap lg:py-20 py-20 lg:flex-row justify-between ${
				hasBorderBottom ? 'border-b border-black' : ''
			} `}
		>
			<div
				className={`
				w-full
				flex pb-0 lg:pb-20
				justify-between
				${isSectionPost ? 'flex-wrap' : ''}
				${
					isScrollHorizontal
						? 'flex-row basic-full overflow-x-auto lg:overflow-auto gap-20 lg:gap-0'
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
