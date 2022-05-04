import React from 'react'

const AdsLayout = ({ children, isHorizontal }) => {
	return (
		<div
			className={`flex flex-col w-full basis-auto ${
				isHorizontal ? '' : 'lg:basis-1/6'
			} text-center py-8 md:py-10`}
		>
			{children}
		</div>
	)
}

export default AdsLayout
