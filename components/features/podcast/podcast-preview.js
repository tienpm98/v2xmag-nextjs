import Link from 'next/link'
import TimeAgo from '@/components/ui/timeAgo'
import Chip from '@/components/ui/chip'
import CoverImage from '@/components/ui/cover-image'

export default function PodcastPreview({
	title,
	coverImage,
	category,
	slug,
	author,
	isScrollHorizontal,
	isSectionPost,
	showAuthor,
	tags,
	_publishedAt,
}) {
	return (
		<div
			className={`flex flex-col justify-between w-32-percent
			 ${isScrollHorizontal && 'flex-scroll-horizontal-70 lg:flex-none'}
			 ${isSectionPost ? 'lg:flex-3' : ''}
			 `}
		>
			<div className='pb-2 lg:pb-10'>
				<div className=''>
					<CoverImage
						slug={slug}
						title={title}
						responsiveImage={coverImage.responsiveImage}
						className='aspect-square'
					/>
				</div>

				<h3 className='pb-0 lg:pt-15 pt-5 font-displayNormal font-bold text-17 lg:text-20 break-words'>
					<Link href={`/podcast/${slug}`}>
						<a>{title}</a>
					</Link>
				</h3>
			</div>

			<div className='flex justify-between'>
				<h5 className='text-gray-category uppercase underline underline-offset-4 font-black text-15'>
					<Link href={`/category/${category.id}`}>
						<a>{category.name}</a>
					</Link>
			</h5>

				<div className='flex flex-col'>
					{showAuthor && (
						<p className='text-xs text-gray-default hidden lg:flex'>
							<span>by&nbsp;</span>
							<span>{author?.name}</span>
							&nbsp;/&nbsp;
							<span className='text-xs hidden lg:block'>
								<TimeAgo time={_publishedAt} />
							</span>
						</p>
					)}
				</div>

				{tags && (
					<div className='flex gap-5 items-center'>
						{tags.map((tag, index) => (
							<Chip key={index} title={tag.title} />
						))}
					</div>
				)}
			</div>
		</div>
	)
}
