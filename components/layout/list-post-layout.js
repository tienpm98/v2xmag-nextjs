const ListPostsLayout = ({
	children,
	isCol,
	isScrollHorizontal,
	isSectionPost,
}) => {
	return (
		<div
			className={`flex flex-col flex-wrap py-20 lg:flex-row justify-between overflow-hidden`}
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
		</div>
	)
}

export default ListPostsLayout
