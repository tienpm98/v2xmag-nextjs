const AdsLayout = ({ children }) => {
	return (
		<div className={`flex flex-col w-full basis-auto`}>
			<div className='h-250 lg:h-350 bg-gray-400'>{children}</div>
		</div>
	)
}

export default AdsLayout
