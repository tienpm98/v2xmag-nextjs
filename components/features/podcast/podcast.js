import Link from 'next/link'
import Chip from '@/components/ui/chip'
import { Play } from '@/components/ui/Icon/play'
import Section from '../../layout/section'
import AudioPlayer from './audio-player'
import LatestReleases from './latest-releases'
import CoverImage from '@/components/ui/cover-image'

export default function Podcast({ title, posts }) {
	const onClickPlayMobile = () => {
		console.log('click play mobile')
	}

	const chipItems = ['picante', 'class of 2022', 'danny lomas', 'spring/summer']
	return (
		<>
			<div className='md:container mx-auto'>
				<Section title={title} showViewAll>
					<div className='flex lg:gap-20 bg-gradient-to-b from-red-c1 to-black pt-40 px-65 lg:pt-56 lg:pb-80 lg:pl-102 lg:pb-36 relative  min-h-318'>
						<div>
							<div>
								<h2 className='capitalize text-white text-17 lg:text-40 max-w-lg font-displayNormal font-bold'>
									Sole Mates: Priya ahluwalia and the adidas origaninals
									superstar
								</h2>

								<h5 className='text-12 text-white uppercase underline font-black lg:pt-20'>
									<Link href='#'>
										<a>curture</a>
									</Link>
								</h5>
								<div className='hidden lg:flex items-center gap-10 lg:py-40'>
									<Play id='mask0_816_1170' />
								</div>
							</div>

							<div className='text-white text-15 leading-loose max-w-400 max-h-140 overflow-y-auto'>
								<span>
									There are many variations of passages of Lorem Ipsum
									available, but the majority have suffered alteration in some
									form, by injected humour, or randomised words which don't look
									even slightly believable. If you are going to use a passage of
									Lorem Ipsum, you need to be sure there isn't anything
									embarrassing hidden in the middle of text. All the Lorem Ipsum
									generators on the Internet tend to repeat predefined chunks as
									necessary, making this the first true generator on the
									Internet. It uses a dictionary of over 200 Latin words,
									combined with a handful of model sentence structures, to
									generate Lorem Ipsum which looks reasonable. The generated
									Lorem Ipsum is therefore always free from repetition, injected
									humour, or non-characteristic words etc.
								</span>
							</div>
							<div className='flex gap-10 lg:pt-65'>
								{chipItems.map((item, index) => (
									<Chip key={index} title={item} />
								))}
							</div>
						</div>

						<div className='flex flex-col items-center'>
							{posts.coverImage ? (
								<div className='lg:w-300 lg:h-300'>
									<CoverImage
										slug={slug}
										title={title}
										responsiveImage={posts.coverImage.responsiveImage}
									/>
								</div>
							) : (
								
									<img
										className='lg:w-300 lg:h-300'
										src='https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
									/>
							
							)}
						</div>
					</div>
				</Section>
			</div>
			<div className='md:container mx-auto'>
				<LatestReleases posts={posts} />
			</div>

			<div className='bg-black text-white mb-20 lg:mb-50'>
				<AudioPlayer />
			</div>
		</>
	)
}
