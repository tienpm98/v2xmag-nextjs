import React from 'react'

const EmailSubcribe = () => {
	return (
		<div className='p-5 md:p-16 flex flex-col mb-4 bg-zinc-400 items-center md:items-start'>
			<h3 className='text-md md:text-2xl my-4 text-white'>
				Subcribe to V2X newsletter
			</h3>
			<form>
				<input
					placeholder='Your Email'
					className='
					placeholder:text-white
					appearance-none py-3 block w-full md:max-w-md md:min-w-300 px-3 py-2 bg-transparent border border-white text-white text-sm md:text-base
      				focus:outline-none 
      				disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      				invalid:border-pink-500 invalid:text-pink-600
      				focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
				/>
			</form>
		</div>
	)
}

export default EmailSubcribe
