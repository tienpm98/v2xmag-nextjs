import Link from 'next/link'
import Avatar from '../../ui/avatar'
import Date from '../../ui/date'
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
					<span className='font-black text-12 leading-1 uppercase text-gray-8 underline cursor-pointer'>
						{category?.name}
					</span>
				</Link>
			</div>
			<div className='flex flex-col justify-center text-center gap-5 lg:pb-30 pb-18 px-20'>
				<PostTitle>{title}</PostTitle>
				<span className='lg:text-15 text-black-1'>{excerpt}</span>
			</div>
			<div className='px-20 pb-20 lg:pb-50 -mx-5 sm:mx-0'>
				<CoverImage
					title={title}
					responsiveImage={coverImage.responsiveImage}
				/>
			</div>
		</div>
	)
}
