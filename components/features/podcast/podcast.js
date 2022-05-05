import AdsLayout from '@/components/layout/ads-layout'
import { Play } from '@/components/ui/Icon/play'
import Seekbar from '@/components/ui/Icon/seekbar'
import Link from 'next/link'
import Section from '../../layout/section'
import Carousel from './carousel'

export default function Podcast({ title }) {
	const onClickPlayMobile = () => {
		console.log('click play mobile')
	}
	return (
		<Section title={title} showViewAll>
			<div className='bg-black pt-40 px-16 lg:pt-56 lg:pl-102 lg:pb-36 relative mb-60 lg:mb-140 min-h-318'>
				<div>
					<h2 className='capitalize text-white text-17 lg:text-40 max-w-lg font-displayNormal font-bold'>
						Sole Mates: Priya ahluwalia and the adidas origaninals superstar
					</h2>
					<span className='text-12 text-gray-8 pb-8'>
						by <strong>Minoto Minh</strong> / 1 hour ago
					</span>
					<h5 className='text-12 text-gray-8 uppercase underline font-black '>
						<Link href='#'>
							<a>curture</a>
						</Link>
					</h5>
				</div>

				<div className='hidden lg:flex items-center gap-10 lg:pt-70'>
					<Play id='mask0_816_1170' />
					<Seekbar />
				</div>

				<Carousel onClick={onClickPlayMobile} />
			</div>

			<AdsLayout />
		</Section>
	)
}
