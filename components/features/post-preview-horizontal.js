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
	date,
	author,
	uppercaseTitle,
	topTitle,
	showAuthor,
	isVerticalPost,
}) {
	return (
		<div
			className={`flex flex-col gap-1 lg:flex-row lg:gap-20 py-2.5 ${
				isVerticalPost ? 'lg:flex-col' : 'lg:flex-row'
			}`}
		>
			<div className='basis-7/12'>
				<CoverImage
					slug={slug}
					title={title}
					responsiveImage={coverImage.responsiveImage}
				/>
			</div>
			<div
				className={`flex flex-col text-center  justify-between basis-6 lg:basis-1/2 pt-15 lg:pt-0 ${
					isVerticalPost ? 'lg:text-center' : 'lg:text-left'
				}`}
			>
				<div
					className={`flex flex-col ${
						isVerticalPost ? 'lg:pt-5' : 'lg:pt-10-percen'
					}`}
				>
					<h3
						className={`mb-2 lg:mb-25 font-displayNormal font-bold text-3xl ${
							topTitle ? 'lg:text-45' : 'lg:text-40'
						} ${
							uppercaseTitle ? 'uppercase' : 'capitalize'
						} uppercase break-words lg:leading-topTitle`}
					>
						<Link href={`/posts/${slug}`}>
							<a>{title}</a>
						</Link>
					</h3>

					<div className='flex flex-col'>
						<span className='pb-2 lg:pb-2.5 text-xs lg:text-15'>{excerpt}</span>
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
				</div>

				<h5 className='text-gray-8 uppercase underline font-black text-xs lg:pt-1.5 text-xs'>
					<Link href={`/category/${category.id}`}>
						<a>{category.name}</a>
					</Link>
				</h5>
			</div>
		</div>
	)
}
