import { Image } from 'react-datocms'
import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({
	title,
	responsiveImage,
	slug,
	className,
}) {
	const image = (
		<Image
			data={{
				...responsiveImage,
				alt: `Cover Image for ${title}`,
			}}
			pictureStyle={{ objectFit: 'cover' }}
			className={cn(`shadow-small ${className}`, {
				'hover:shadow-medium transition-shadow duration-200': slug,
			})}
		/>
	)
	return (
		<>
			{slug ? (
				<Link href={`/posts/${slug}`}>
					<a aria-label={title}>{image}</a>
				</Link>
			) : (
				image
			)}
		</>
	)
}
