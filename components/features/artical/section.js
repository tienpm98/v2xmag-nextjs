import React from 'react'

const Section = ({ sectionTitle, children }) => {
	return (
		<div className='flex flex-col'>
			<span className='font-bold text-18 text-black-2 leading-1 py-10'>
				{sectionTitle}
			</span>
			{children}
		</div>
	)
}

export default Section
