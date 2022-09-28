import Link from 'next/link'
import CoverImage from '../../ui/cover-image'
import PostTitle from './post-title'

export default function PostHeader({
	title,
	coverImage,
	date,
	author,
	excerpt,
	category,
}) {
	return (
		<div className='md:container mx-auto lg:pt-90'>
			<div className='lg:hidden flex justify-center py-18'>
				<Link href={`/category/${category?.id}`}>
					<span className='font-black text-12 leading-1 uppercase text-gray-default underline underline-offset-4 cursor-pointer'>
						{category?.name}
					</span>
				</Link>
			</div>
			<div className='flex flex-col justify-center text-center lg:pb-30 pb-18'>
				<PostTitle>{title}</PostTitle>
				<span className='text-15 text-black-1'>{excerpt}</span>
			</div>
			<div className='pb-20 lg:pb-50 -mx-5 px-20 lg:px-0 '>
				<CoverImage
					title={title}
					responsiveImage={coverImage.responsiveImage}
				/>
			</div>
		</div>
	)
}
