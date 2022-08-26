const RightArrow = ({ className, onClick }) => {
	return (
		<svg
			onClick={onClick}
			className={className}
			width='11'
			height='10'
			viewBox='0 0 11 10'
			fill='black'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M10.0605 3.93948L6.84075 0.719727L5.78025 1.78023L8.25 4.24998H0.75V5.74998H8.25L5.78025 8.21973L6.84075 9.28023L10.0605 6.06048C10.3417 5.77918 10.4997 5.39772 10.4997 4.99998C10.4997 4.60223 10.3417 4.22077 10.0605 3.93948Z' />
		</svg>
	)
}

export default RightArrow
