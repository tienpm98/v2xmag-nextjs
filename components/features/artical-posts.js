import Link from 'next/link'
import TimeAgo from '../ui/timeAgo'
import Chip from '../ui/chip'
import CoverImage from '../ui/cover-image'

export default function ArticalPosts({
	title,
	coverImage,
	category,
	slug,
	author,
	showAuthor,
	_publishedAt,
	tags,
}) {
	return (
		<div className='flex flex-col justify-between'>
			<div className='pb-2 lg:pb-5'>
				<CoverImage
					slug={slug}
					title={title}
					responsiveImage={coverImage.responsiveImage}
					className='aspect-14/9 lg:aspect-8/5'
				/>

				<h3 className='pb-0 lg:pb-2.5 pt-5 font-displayNormal font-bold text-17 lg:text-20 break-words'>
					<Link href={`/posts/${slug}`}>
						<a>{title}</a>
					</Link>
				</h3>
			</div>

			<div className='flex justify-between'>
				<h5 className='text-gray-default uppercase underline underline-offset-4 font-black text-12'>
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
