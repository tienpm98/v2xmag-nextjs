import Link from 'next/link'

const Section = ({
	title,
	className,
	showViewAll,
	categoryTitle,
	children,
	noPadding,
}) => {
	return (
		<section
			className={`${className} ${
				noPadding ? 'px-0' : 'px-4'
			} md:px-0 last:pb-16`}
		>
			<div className='flex justify-between pt-20 pb-15 md:py-9'>
				{title && (
					<h2
						className={`text-12 lg:text-20 font-bold tracking-tighter leading-tight uppercase`}
					>
						{title}
					</h2>
				)}
				{showViewAll && (
					<Link href={`${categoryTitle}`}>
						<span className='font-displayNormal uppercase underline cursor-pointer lg:text-20 text-12'>
							View all
						</span>
					</Link>
				)}
			</div>

			{children}
		</section>
	)
}

export default Section
