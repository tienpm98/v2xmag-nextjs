import Link from 'next/link'
import CoverImage from '@/components/ui/cover-image'
import Title from './title'

const ArticalCard = ({ title, slug, coverImage }) => {
	return (
		<div className='max-w-255 flex flex-col rounded-3 shadow-small min-w-255'>
			<CoverImage
				slug={slug}
				title={title}
				responsiveImage={coverImage.responsiveImage}
				className='aspect-3/2'
			/>
			<Link href={`/posts/${slug}`}>
				<div className='px-20 pt-25 pb-40 cursor-pointer'>
					<Title title={title} />
				</div>
			</Link>
		</div>
	)
}

export default ArticalCard
