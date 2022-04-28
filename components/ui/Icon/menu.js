export default function MenuIcon({ onClick }) {
	return (
		<div className='cursor-pointer z-10' onClick={onClick}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='26'
				height='19'
				viewBox='0 0 26 19'
				fill='none'
				className='fill-white'
			>
				<path
					d='M1.3871 1H24.6258'
					stroke='white'
					strokeWidth='2'
					strokeLinecap='square'
				/>
				<path
					d='M1.3913 9H18.6087'
					stroke='white'
					strokeWidth='2'
					strokeLinecap='square'
				/>
				<path
					d='M1.3871 18H24.6258'
					stroke='white'
					strokeWidth='2'
					strokeLinecap='square'
				/>
			</svg>
		</div>
	)
}
