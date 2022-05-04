import CoverImage from '../ui/cover-image'
import Link from 'next/link'

export default function PostPreviewVertical({
	title,
	coverImage,
	category,
	slug,
}) {
	return (
		<div className='flex flex-col gap-1 justify-between py-2.5'>
			<div className='pb-2 md:pb-5'>
				<CoverImage
					slug={slug}
					title={title}
					responsiveImage={coverImage.responsiveImage}
				/>
				<h3 className='pb-0 md:pb-2.5 pt-5 font-displayNormal font-bold text-xl break-words'>
					<Link href={`/posts/${slug}`}>
						<a>{title}</a>
					</Link>
				</h3>
			</div>

			<h5 className='text-gray-400 uppercase underline font-black text-xs pb-2'>
				<Link href={`/category/${category.id}`}>
					<a>{category.name}</a>
				</Link>
			</h5>
		</div>
	)
}
