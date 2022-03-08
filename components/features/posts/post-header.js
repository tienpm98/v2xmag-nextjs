import Avatar from '../../ui/avatar'
import Date from '../../ui/date'
import CoverImage from '../../ui/cover-image'
import PostTitle from './post-title'

export default function PostHeader({ title, coverImage, date, author }) {
	return (
		<>
			<div className='mb-8 md:mb-16 -mx-5 sm:mx-0'>
				<CoverImage
					title={title}
					responsiveImage={coverImage.responsiveImage}
				/>
			</div>

			<div className='max-w-2xl mx-auto'>
				<PostTitle>{title}</PostTitle>
				<div className='block md:hidden mb-6'>
					<Avatar name={author.name} picture={author.picture} />
				</div>
				<div className='mb-6 text-lg'>
					<Date dateString={date} />
				</div>
			</div>
		</>
	)
}
