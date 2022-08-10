import { useContext } from 'react'
import { Context } from '@/context'
import Section from '../../layout/section'
import AudioPlayer from './audio-player'
import LatestReleases from './latest-releases'
import Banner from './banner'

export default function Podcast({ title, posts }) {
	const { state, dispatch } = useContext(Context)

	const playPodcast = () => {
		dispatch({
			type: 'TOGGLE_PLAY',
			payload: !state.togglePlay,
		})
	}

	return (
		<>
			<div className='md:container mx-auto'>
				<Section title={title} showViewAll categoryTitle='podcast'>
					<Banner
						post={posts[0]}
						isPlaying={state.togglePlay}
						playPodcast={playPodcast}
					/>
					<LatestReleases posts={posts} />
				</Section>
			</div>

			<div className='bg-black text-white mb-20 lg:mb-50'>
				<AudioPlayer />
			</div>
		</>
	)
}
