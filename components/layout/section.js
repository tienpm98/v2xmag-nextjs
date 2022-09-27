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
		<section className={`${className} ${noPadding ? 'px-0' : 'px-4'} md:px-0`}>
			<div className='flex justify-between lg:pt-40 lg:pb-40 pt-20 pb-20 items-center'>
				{title && (
					<h2 className={`text-12 lg:text-24 font-bold uppercase leading-tight`}>{title}</h2>
				)}
				{showViewAll && (
					<Link href={`${categoryTitle}`}>
						<span className='font-displayNormal uppercase underline leading-tight underline-offset-4 cursor-pointer lg:text-20 text-12'>
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
