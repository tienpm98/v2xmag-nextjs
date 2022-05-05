const TopPostsLayout = ({
	children,
	adsVertical,
	adsHorizontal,
	isCol,
	hasBorderBottom,
}) => {
	return (
		<div
			className={`flex flex-col flex-wrap pb-0 lg:pb-20 lg:flex-row ${
				hasBorderBottom ? 'border-b' : ''
			} `}
		>
			<div
				className={`flex gap-4 ${
					isCol ? 'flex-col lg:flex-row' : 'flex-col'
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

export default TopPostsLayout
