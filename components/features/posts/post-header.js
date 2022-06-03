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
}) {
	return (
		<div className='md:container mx-auto lg:pt-90'>
			<div className='flex flex-col justify-center text-center gap-5 lg:pb-30'>
				<PostTitle>{title}</PostTitle>
				<span className='lg:text-15 text-black-1'>{excerpt}</span>
			</div>
			<div className='pb-20 lg:pb-50 -mx-5 sm:mx-0'>
				<CoverImage
					title={title}
					responsiveImage={coverImage.responsiveImage}
				/>
			</div>
		</div>
	)
}
