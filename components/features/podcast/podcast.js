import Link from 'next/link'
import Chip from '@/components/ui/chip'
import { Play } from '@/components/ui/Icon/play'
import Section from '../../layout/section'
import AudioPlayer from './audio-player'
import LatestReleases from './latest-releases'
import CoverImage from '@/components/ui/cover-image'
import Banner from './banner'

export default function Podcast({ title, posts }) {
	const onClickPlayMobile = () => {
		console.log('click play mobile')
	}

	const chipItems = ['picante', 'class of 2022', 'danny lomas', 'spring/summer']
	return (
		<>
			<div className='md:container mx-auto'>
				<Section title={title} showViewAll categoryTitle='podcast'>
					<Banner post={posts[0]} />
					<LatestReleases posts={posts} />
				</Section>
			</div>

			<div className='bg-black text-white mb-20 lg:mb-50'>
				<AudioPlayer />
			</div>
		</>
	)
}
