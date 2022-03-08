const ListPostsLayout = ({
	children,
	adsVertical,
	adsHorizontal,
	hasAds,
	isCol,
	hasBorderBottom,
}) => {
	return (
		<div
			className={`flex flex-col flex-wrap pb-8 lg:flex-row justify-between ${
				hasBorderBottom ? 'border-b' : ''
			} `}
		>
			<div
				className={`flex gap-4 ${hasAds ? 'max-w-6xl' : ''}  ${
					isCol ? 'flex-col md:flex-row' : 'flex-col'
				}  ${isCol ? 'basis-full' : 'basis-5/6'}
				`}
			>
				{children}
			</div>
			{adsVertical && (
				<div className='flex lg:basis-1/6 flex-col'>{adsVertical}</div>
			)}
			{adsHorizontal && <div className='w-full'>{adsHorizontal}</div>}
		</div>
	)
}

export default ListPostsLayout
