import CoverImage from '../ui/cover-image'

export default function HeroBanner({
	title,
	coverImage,
	slug,
}) {
	return (
		<div className='mb-5 md:mb-10 '>
			<CoverImage
				className=''
				title={title}
				responsiveImage={coverImage.responsiveImage}
				slug={slug}
			/>
		</div>
	)
}
