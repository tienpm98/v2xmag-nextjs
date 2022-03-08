import CoverImage from '../ui/cover-image'
import Link from 'next/link'

export default function PostPreviewVertical({
	title,
	coverImage,
	category,
	slug,
}) {
	return (
		<div className='flex flex-col-reverse gap-1 justify-between py-2 border-t border-black'>
			<div className='mb-2 md:mb-5'>
				<CoverImage
					slug={slug}
					title={title}
					responsiveImage={coverImage.responsiveImage}
				/>
			</div>
			<div className='basis-4'>
				<h5 className='text-red-500 uppercase underline font-black text-xs pb-2'>
					<Link href={`/category/${category.id}`}>
						<a>{category.name}</a>
					</Link>
				</h5>
				<h3 className='mb-2 font-black text-2xl uppercase break-words'>
					<Link href={`/posts/${slug}`}>
						<a>{title}</a>
					</Link>
				</h3>
			</div>
		</div>
	)
}
