const Section = ({ title, className, showViewAll, children }) => {
	return (
		<section className={`${className} px-4 md:px-0`}>
			<div className='flex justify-between py-20 md:py-9'>
				{title && (
					<h2
						className={`text-xl font-bold tracking-tighter leading-tight uppercase`}
					>
						{title}
					</h2>
				)}
				{showViewAll && (
					<span className='font-displayNormal uppercase underline cursor-pointer'>
						View all
					</span>
				)}
			</div>

			{children}
		</section>
	)
}

export default Section
