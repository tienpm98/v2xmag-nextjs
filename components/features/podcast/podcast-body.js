import Chip from '@/components/ui/chip'
import { StructuredText, Image } from 'react-datocms'

export default function PodcastBody({ content }) {
	const tagItems = ['picante', 'class of 2022', 'danny lomas', 'spring/summer']

	return (
		<div className='md:container mx-auto flex justify-center px-20'>
			<div className=''></div>
			<div className='prose text-white leading-loose max-w-65ch'>
				<StructuredText
					data={content}
					renderBlock={({ record }) => {
						if (record.__typename === 'ImageBlockRecord') {
							return <Image data={record.image.responsiveImage} />
						}

						return (
							<>
								<p>Don't know how to render a block!</p>
								<pre>{JSON.stringify(record, null, 2)}</pre>
							</>
						)
					}}
				/>

				<div className='flex gap-10'>
					{tagItems.map((tag, index) => (
						<Chip key={index} title={tag} />
					))}
				</div>
			</div>
		</div>
	)
}
