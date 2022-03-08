const Section = ({ title, isSmallFont, className, children }) => {
	return (
		<section className={className}>
			{title && (
				<h2
					className={`my-9 ${
						isSmallFont ? 'md:text-4xl' : 'md:text-8xl'
					} text-4xl font-bold tracking-tighter leading-tight`}
				>
					{title}
				</h2>
			)}
			{children}
		</section>
	)
}

export default Section
