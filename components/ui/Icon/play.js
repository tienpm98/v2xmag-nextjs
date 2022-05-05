export const Play = ({ id, onClick }) => {
	return (
		<svg
			width='52'
			height='52'
			viewBox='0 0 52 52'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			onClick={onClick}
			className='cursor-pointer'
		>
			<circle cx='26' cy='26' r='26' fill='white' />
			<mask
				id={id}
				style={{ maskType: 'alpha' }}
				maskUnits='userSpaceOnUse'
				x='20'
				y='16'
				width='17'
				height='20'
			>
				<path
					d='M35.1987 24.4995C36.3315 25.1792 36.3315 26.821 35.1987 27.5007L23.0167 34.8099C21.8503 35.5097 20.3664 34.6695 20.3664 33.3093L20.3664 18.6909C20.3664 17.3307 21.8503 16.4905 23.0167 17.1903L35.1987 24.4995Z'
					fill='black'
				/>
			</mask>
			<g mask={`url(#${id})`}>
				<rect x='16.8999' y='15.6001' width='20.8' height='20.8' fill='black' />
			</g>
		</svg>
	)
}
