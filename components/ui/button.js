import React from 'react'

const Button = ({ title, className, onClick, disabled }, props) => {
	return (
		<div
			className={
				className +
				` w-100 h-40 text-white flex items-center justify-center rounded-42 cursor-pointer 
                ${disabled ? 'bg-gray-menu' : 'bg-black'}
                `
			}
			onClick={onClick}
			{...props}
		>
			<span className='text-xs font-bold'>{title}</span>
		</div>
	)
}

export default Button
