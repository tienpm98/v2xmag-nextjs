import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Chip from '@/components/ui/chip'
import { Play } from '@/components/ui/Icon/play'
import CoverImage from '@/components/ui/cover-image'
import CD from 'public/images/cd.png'

const Banner = ({ post, isPlaying, playPodcast }) => {
	const [expanded, setExpanded] = useState(false)

	const chipItems = ['picante', 'class of 2022', 'danny lomas', 'spring/summer']
	const toggledClass = expanded ? 'expanded' : 'collapsed'
	const handleReadMore = () => {
		setExpanded(!expanded)
	}

	return (
		<div className='flex lg:gap-20 bg-gradient-to-b from-red-c1 to-black pt-30 pb-56 lg:pb-0 lg:pt-40 px-65 lg:pt-56 lg:pb-80 lg:pl-102 lg:pb-36 relative  min-h-318'>
			<div className='flex-30'>
				<div>
					<h2 className='mx-auto lg:mx-0 text-center lg:text-left capitalize text-white text-17 lg:text-40 max-w-lg font-displayNormal font-bold'>
						Sole Mates: Priya ahluwalia and the adidas origaninals superstar
					</h2>

					<h5 className='text-center lg:text-left text-12 text-white uppercase underline font-black pt-15 pb-30 lg:pt-20 lg:pb-0'>
						<Link href='#'>
							<a>curture</a>
						</Link>
					</h5>

					<div className='lg:hidden block flex-50 pb-30'>
						{post.coverImage ? (
							<div className='lg:w-70% lg:pt-10%'>
								<CoverImage
									title={post.title}
									responsiveImage={post.coverImage.responsiveImage}
								/>
							</div>
						) : (
							<img
								className='lg:w-[70%] lg:pt-[10%]'
								src='https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
							/>
						)}
					</div>

					<div
						className='hidden lg:flex items-center gap-10 lg:py-40'
						onClick={playPodcast}
					>
						<Play id='mask0_816_1170' />
					</div>
				</div>

				<div
					className={`mx-auto lg:mx-0 podcast_description text-white max-w-400 lg:max-h-140 overflow-y-auto ${toggledClass} `}
				>
					<span className='text-15 leading-loose'>
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour, or randomised words which don't look even slightly
						believable. If you are going to use a passage of Lorem Ipsum, you
						need to be sure there isn't anything embarrassing hidden in the
						middle of text. All the Lorem Ipsum generators on the Internet tend
						to repeat predefined chunks as necessary, making this the first true
						generator on the Internet. It uses a dictionary of over 200 Latin
						words, combined with a handful of model sentence structures, to
						generate Lorem Ipsum which looks reasonable. The generated Lorem
						Ipsum is therefore always free from repetition, injected humour, or
						non-characteristic words etc.
					</span>
				</div>

				<div
					className={`
					bg-white
					w-200 
					lg:hidden
					flex items-center justify-center
					rounded-42
					cursor-pointer
					pt-12
					pb-14
					mt-30
					mx-auto
					`}
					onClick={handleReadMore}
				>
					<span className='font-bold text-15'>
						{expanded ? 'Read Less' : 'Read More'}
					</span>
				</div>
				<div className='hidden lg:flex gap-10 lg:pt-65'>
					{chipItems.map((item, index) => (
						<Chip key={index} title={item} />
					))}
				</div>
			</div>

			<div className='lg:flex hidden flex-col justify-center flex-50'>
				{post.coverImage ? (
					<div className='lg:max-w-345 lg:m-h-345 h-345 z-10 relative'>
						<CoverImage
							title={post.title}
							responsiveImage={post.coverImage.responsiveImage}
						/>
						<div
							className='absolute w-320 h-320'
							style={{
								top: isPlaying ? '15px' : '51%',
								left: '50%',
								transform: 'translate(0,-50%)',
								zIndex: -1,
								animation: isPlaying ? 'spin 4s linear infinite' : 'none',
							}}
						>
							<Image alt='cd' src={CD} width={320} height={320} />
						</div>
					</div>
				) : (
					<img
						className='lg:w-[70%] lg:pt-[10%]'
						src='https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
					/>
				)}
			</div>
		</div>
	)
}

export default Banner
