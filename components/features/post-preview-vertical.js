import CoverImage from '../ui/cover-image'
import Link from 'next/link'
import TimeAgo from '../ui/timeAgo'
import Chip from '../ui/chip'

export default function PostPreviewVertical({
	title,
	coverImage,
	category,
	slug,
	author,
	isScrollHorizontal,
	isSectionPost,
	showAuthor,
	tags,
}) {
	return (
		<div
			className={`flex flex-col gap-1 justify-between py-2.5
			 ${isScrollHorizontal && 'flex-scroll-horizontal-80 lg:flex-auto'}
			 ${isSectionPost ? 'lg:flex-3' : ''}
			 `}
		>
			<div className='pb-2 lg:pb-5'>
				<div className='lg:pb-20'>
					<CoverImage
						slug={slug}
						title={title}
						responsiveImage={coverImage.responsiveImage}
					/>
				</div>
				<h3 className='pb-0 lg:pb-2.5 pt-5 font-displayNormal font-bold text-xl break-words'>
					<Link href={`/posts/${slug}`}>
						<a>{title}</a>
					</Link>
				</h3>
			</div>

			<div className='flex justify-between'>
				<h5 className='text-gray-400 uppercase underline font-black text-xs pb-2'>
					<Link href={`/category/${category.id}`}>
						<a>{category.name}</a>
					</Link>
				</h5>

				<div className='flex flex-col'>
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
