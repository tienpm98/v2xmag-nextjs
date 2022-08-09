import Link from 'next/link'
import CoverImage from '../ui/cover-image'
import TimeAgo from '../ui/timeAgo'

export default function TopHighlight({
	title,
	coverImage,
	excerpt,
	category,
	slug,
	date,
	author,
	uppercaseTitle,
	topTitle,
	showAuthor,
	isVerticalPost,
	isSectionPage,
}) {
	return (
		<div
			className={`flex flex-col lg:flex-row lg:gap-20 ${
				isVerticalPost ? 'lg:flex-col' : 'lg:flex-row'
			}`}
		>
			<div className={`${isSectionPage ? ' w-full' : 'lg:w-59-percent w-full'} pt-20 lg:pt-0`}>
				<CoverImage
					slug={slug}
					title={title}
					responsiveImage={coverImage.responsiveImage}
				/>
			</div>
			<div
				className={`flex flex-col text-center justify-between  pt-15 lg:pt-0 lg:px-0 px-4 ${
					isVerticalPost ? 'lg:text-center' : 'lg:text-left'
				}
                    ${isSectionPage ? 'w-80-percent mx-auto' : 'lg:w-42-percent w-full'}
                `}
			>
				<div
					className={`flex flex-col ${
						isVerticalPost ? 'lg:pt-5' : 'lg:pt-10-percen'
					}`}
				>
					<h3
						className={`mb-12 lg:mb-25 font-displayNormal font-bold text-3xl ${
							topTitle ? 'lg:text-45' : 'lg:text-40'
						} ${
							uppercaseTitle ? 'uppercase' : 'capitalize'
						} uppercase break-words lg:leading-topTitle`}
					>
						<Link href={`/posts/${slug}`}>
							<a>{title}</a>
						</Link>
					</h3>
				</div>
				<div className='flex flex-col lg:gap-30 gap-10'>
					<div className='flex flex-col'>
						<span className='text-xs lg:text-15'>{excerpt}</span>
						{showAuthor && (
							<p className='text-xs text-gray-8 hidden lg:flex'>
								<span>by&nbsp;</span>
								<span>{author.name}</span>
								&nbsp;/&nbsp;
								<span className='text-xs hidden lg:block'>
									<TimeAgo />
								</span>
							</p>
						)}
					</div>
					<h5 className='text-gray-8 uppercase underline font-black text-xs lg:pt-1.5 text-xs'>
						<Link href={`/category/${category.id}`}>
							<a>{category.name}</a>
						</Link>
					</h5>
				</div>
			</div>
		</div>
	)
}
