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
}) {
	return (
		<div className='flex flex-col gap-1 md:flex-row md:gap-9 py-2.5'>
			<div className='basis-7/12'>
				<CoverImage
					slug={slug}
					title={title}
					responsiveImage={coverImage.responsiveImage}
				/>
			</div>
			<div className='flex flex-col text-center md:text-left justify-end basis-6 md:basis-1/2'>
				<h3
					className={`mb-2 md:mb-2.5 font-displayNormal font-bold text-3xl ${
						topTitle ? 'md:text-45' : 'md:text-40'
					} ${
						uppercaseTitle ? 'uppercase' : 'capitalize'
					} uppercase break-words md:leading-topTitle`}
				>
					<Link href={`/posts/${slug}`}>
						<a>{title}</a>
					</Link>
				</h3>

				<div className='flex flex-col'>
					<span className='pb-2 md:pb-2.5 text-xs md:text-15'>{excerpt}</span>
					{showAuthor && (
						<p className='text-xs hidden md:flex'>
							<span>by&nbsp;</span>
							<span className='text-gray-400'>{author.name}</span>
							&nbsp;/&nbsp;
							<span className='text-xs hidden md:block'>
								<TimeAgo />
							</span>
						</p>
					)}
				</div>

				<h5 className='text-gray-400 uppercase underline font-black text-xs md:pt-1.5 text-xs'>
					<Link href={`/category/${category.id}`}>
						<a>{category.name}</a>
					</Link>
				</h5>
			</div>
		</div>
	)
}
