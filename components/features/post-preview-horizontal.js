// import Date from '../ui/date'
import CoverImage from '../ui/cover-image'
import Link from 'next/link'
import TimeAgo from '../ui/timeAgo'

export default function PostPreviewHorizontal({
	title,
	coverImage,
	excerpt,
	category,
	slug,
	author,
	_publishedAt,
	uppercaseTitle,
	topTitle,
	showAuthor,
	isVerticalPost,
}) {
	return (
		<div
			className={`flex flex-col gap-1 lg:flex-row lg:gap-20 pb-20 lg:pb-30 ${
				isVerticalPost ? 'lg:flex-col' : 'lg:flex-row'
			}`}
		>
			<div className='lg:w-1/2 w-full'>
				<CoverImage
					slug={slug}
					title={title}
					responsiveImage={coverImage.responsiveImage}
					className='lg:aspect-5/3 h-full'
				/>
			</div>
			<div
				className={`flex flex-col justify-between basis-6 lg:basis-1/2 ${
					isVerticalPost ? 'lg:text-center' : 'lg:text-left'
				}`}
			>
				<div
					className={`flex flex-col ${
						isVerticalPost ? 'lg:pt-5' : 'lg:pt-10-percen lg:my-auto'
					}`}
				>
					<h3
						className={`mb-2 lg:mb-25 font-displayNormal font-bold ${
							topTitle
								? 'lg:text-45 md:text-24px leading-1.1'
								: 'lg:text-40 md:text-24px text-17 leading-1.1'
						} ${
							uppercaseTitle ? 'uppercase' : 'capitalize'
						} uppercase break-words lg:leading-topTitle`}
					>
						<Link href={`/posts/${slug}`}>
							<a>{title}</a>
						</Link>
					</h3>

					<div className='flex flex-col'>
						<span className='hidden lg:block pb-2 lg:pb-2.5 text-xs lg:text-15'>
							{excerpt}
						</span>

						{showAuthor && (
							<p className='text-xs text-gray-default hidden lg:flex'>
								<span>by&nbsp;</span>
								<span>{author.name}</span>
								&nbsp;/&nbsp;
								<span className='text-xs hidden lg:block'>
									<TimeAgo time={_publishedAt} />
								</span>
							</p>
						)}
					</div>
				</div>

				<div className='flex justify-between'>
					<h5 className='text-gray-default uppercase underline underline-offset-4 font-black text-xs lg:pt-1.5 text-xs'>
						<Link href={`/category/${category.id}`}>
							<a>{category.name}</a>
						</Link>
					</h5>

					<p className='lg:hidden flex text-12 text-gray-default'>
						<span>by&nbsp;</span>
						<span>{author.name}</span>
						&nbsp;/&nbsp;
						<span className='text-xs lg:block'>
							<TimeAgo time={_publishedAt} />
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}
