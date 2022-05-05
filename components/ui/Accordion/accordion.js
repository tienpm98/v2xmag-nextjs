import { useState } from 'react'
import AccordionLayout from './accordionLayout'
const Accordion = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	return (
		<div className='flex lg:hidden flex-col justify-center items-center'>
			<AccordionLayout
				title='Sections'
				index={1}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
			>
				This is Accordion 1 Content
			</AccordionLayout>

			<AccordionLayout
				title='Shop'
				index={2}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
			>
				This is Accordion 2 Content
			</AccordionLayout>
		</div>
	)
}

export default Accordion
