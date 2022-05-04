import { ArrowDown } from '../Icon/arrowDown'
import { ArrowUp } from '../Icon/arrowUp'

const AccordionLayout = ({
	title,
	children,
	index,
	activeIndex,
	setActiveIndex,
}) => {
	const handleSetIndex = (index) =>
		activeIndex !== index && setActiveIndex(index)

	return (
		<div className='w-full border-white border-b last:border-0 py-24'>
			<div
				onClick={() => handleSetIndex(index)}
				className='flex justify-between'
			>
				<div className='flex'>
					<div className='text-white font-bold uppercase'>{title}</div>
				</div>
				<div className='flex items-center justify-center'>
					{activeIndex === index ? <ArrowUp /> : <ArrowDown />}
				</div>
			</div>
			{activeIndex === index && <div className=''>{children}</div>}
		</div>
	)
}

export default AccordionLayout
