import React from 'react'

const AdsLayout = ({ children, isHorizontal }) => {
	return (
		<div
			className={`flex flex-col w-full basis-auto ${
				isHorizontal ? '' : 'lg:basis-1/6'
			} text-center pt-23 lg:py-10`}
		>
			<div className='h-250 lg:h-350 bg-gray-400'>{children}</div>
		</div>
	)
}

export default AdsLayout
