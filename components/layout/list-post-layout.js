const ListPostsLayout = ({
	children,
	adsHorizontal,
	isCol,
	hasBorderBottom,
}) => {
	return (
		<div
			className={`flex flex-col flex-wrap pb-8 lg:flex-row justify-between ${
				hasBorderBottom ? 'border-b border-black' : ''
			} `}
		>
			<div
				className={`flex gap-4 ${
					isCol ? 'flex-col md:flex-row' : 'flex-col'
				}  ${isCol ? 'basis-full' : 'basis-5/6'}
				`}
			>
				{children}
			</div>

			{adsHorizontal && <div className='w-full'>{adsHorizontal}</div>}
		</div>
	)
}

export default ListPostsLayout
