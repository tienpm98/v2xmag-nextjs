import React from 'react'
import RightArrow from '../ui/Icon/right-arrow'

const EmailSubcribe = () => {
	return (
		<div className='flex flex-col items-center md:items-start'>
			<h3 className='text-md lg:text-15 py-1 text-black capitalize font-displayRegular font-normal'>
				Sign up & Don't miss our lastest news
			</h3>
			<form className='relative'>
				<input
					placeholder='Enter Your Email'
					className='
					placeholder:text-black
					font-bold font-displayRegular
					appearance-none py-3 block w-full lg:max-w-md min-w-205 lg:min-w-300 py-2 bg-transparent border-0 border-b border-b-black
					text-sm md:text-base 
      				focus:outline-none 
      				disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      				focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
				/>
				<RightArrow className='absolute right-0 top-15 cursor-pointer' />
			</form>
		</div>
	)
}

export default EmailSubcribe
