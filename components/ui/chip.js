const Chip = ({ title }) => {
	return (
		<div className='flex justify-center items-center py-3 px-5 rounded-sm border border-gray-8 w-fit'>
			<span className='uppercase font-bold lg:text-15 text-8 text-gray-default leading-normal align-middle'>
				{title}
			</span>
		</div>
	)
}

export default Chip
