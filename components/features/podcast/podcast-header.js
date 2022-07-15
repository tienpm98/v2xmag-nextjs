import CoverImage from '../../ui/cover-image'
import PodcastTitle from './podcast-title'

export default function PodcastHeader({
	title,
	coverImage,
	date,
	author,
	excerpt,
}) {
	return (
		<div className='md:container mx-auto lg:pt-90'>
			<div className='flex flex-col justify-center text-center gap-5 lg:pb-30'>
				<PodcastTitle>{title}</PodcastTitle>
				<span className='lg:text-15 text-white'>{excerpt}</span>
			</div>
			<div className='pb-20 lg:pb-50 max-w-690 mx-auto'>
				<CoverImage
					title={title}
					responsiveImage={coverImage.responsiveImage}
				/>
			</div>
		</div>
	)
}
