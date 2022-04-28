export default function FaceBook({ onClick }) {
	return (
		<div className='cursor-pointer' onClick={onClick}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 3333 3333'
				width='20'
				height='20'
				fill='currentColor'
				className='fill-white'
			>
				<path d='M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm186 1117h311V744h-311c-240 0-435 195-435 435v186h-249v373h249v994h373v-994h311l62-373h-373v-186c0-34 28-62 62-62z' />
			</svg>
		</div>
	)
}
