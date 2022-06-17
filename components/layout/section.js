import Link from 'next/link'

const Section = ({
	title,
	className,
	showViewAll,
	categoryTitle,
	children,
}) => {
	return (
		<section className={`${className} px-4 md:px-0 last:pb-16`}>
			<div className='flex justify-between pt-20 pb-6 md:py-9'>
				{title && (
					<h2
						className={`text-xl font-bold tracking-tighter leading-tight uppercase`}
					>
						{title}
					</h2>
				)}
				{showViewAll && (
					<Link href={`${categoryTitle}`}>
						<span className='font-displayNormal uppercase underline cursor-pointer'>
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
