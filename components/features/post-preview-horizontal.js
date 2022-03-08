import Date from '../ui/date'
import CoverImage from '../ui/cover-image'
import Link from 'next/link'

export default function PostPreviewHorizontal({
	title,
	coverImage,
	date,
	author,
	category,
	slug,
}) {
	return (
		<div className='flex flex-col-reverse gap-1 md:flex-row md:gap-9 py-2.5'>
			<div className='mb-2 md:mb-4 basis-7/12'>
				<CoverImage
					slug={slug}
					title={title}
					responsiveImage={coverImage.responsiveImage}
				/>
			</div>
			<div className='basis-4 md:basis-80'>
				<h5 className='text-red-500 uppercase underline font-black text-xs pb-2 md:pb-4'>
					<Link href={`/category/${category.id}`}>
						<a>{category.name}</a>
					</Link>
				</h5>
				<h3 className='mb-2 md:mb-8 font-black text-2xl uppercase break-words'>
					<Link href={`/posts/${slug}`}>
						<a>{title}</a>
					</Link>
				</h3>

				<p className='font-black text-xs hidden md:block'>
					By <span className='text-red-500'>{author.name}</span>
				</p>
				<div className='font-black text-xs hidden md:block'>
					<Date dateString={date} />
				</div>
			</div>
		</div>
	)
}
