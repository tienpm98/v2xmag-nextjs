const Section = ({ title, className, showViewAll, children }) => {
	return (
		<section className={className}>
			<div className='flex justify-between py-9'>
				{title && (
					<h2 className={`text-xl font-bold tracking-tighter leading-tight`}>
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
