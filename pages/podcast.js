import React, { useState } from 'react'
import Head from 'next/head'
import { request } from '@/lib/datocms'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import { metaTagsFragment, responsiveImageFragment } from '@/lib/fragments'

import Layout from '@/components/layout/layout'
import ListPodcast from '@/components/features/list-podcast'
import Section from '@/components/layout/section'
import Banner from '@/components/features/podcast/banner'

export async function getStaticProps({ preview }) {
	const graphqlRequest = {
		query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        blog {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
        allPosts(orderBy: date_DESC, first: 20) {
          title
          slug
          excerpt
          date
		  category {
			id
			slug
			name
		  }
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
          author {
            name
            picture {
              responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100}) {
                ...responsiveImageFragment
              }
            }
          }
        }
      }

      ${metaTagsFragment}
      ${responsiveImageFragment}
    `,
		preview,
	}

	return {
		props: {
			subscription: preview
				? {
						...graphqlRequest,
						initialData: await request(graphqlRequest),
						token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
						environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
				  }
				: {
						enabled: false,
						initialData: await request(graphqlRequest),
				  },
		},
	}
}

export default function Podcast({ subscription }) {
	const {
		data: { allPosts, site, blog },
	} = useQuerySubscription(subscription)

	const metaTags = blog.seo.concat(site.favicon)
	const morePosts = allPosts.slice(0, 3)

	const repeat = (a, n) => Array(n).fill(a).flat(1)

	const morePodcasts = repeat(morePosts, 4)
	const morePodcastsBeforeAds = morePodcasts.slice(0, 3)
	const morePodcastsAfterAds = morePodcasts.slice(3)

	const latestReleasePodcastsBeforeAds = [morePodcasts[0]]
	const latestReleasePodcastsAfterAds = morePodcasts.slice(1)
	const [podcastAfterAds, setPodcastAfterAds] = useState(
		latestReleasePodcastsAfterAds.slice(0, 4)
	)
	const [showMoreButton, setShowMoreButton] = useState(true)

	const tags = [
		{
			id: 1,
			title: 'techno',
		},
		{
			id: 2,
			title: 'vietnam',
		},
		{
			id: 3,
			title: 'v2mix',
		},
	]

	const handleReadMore = () => {
		setPodcastAfterAds(latestReleasePodcastsAfterAds)
		setShowMoreButton(false)
	}

	return (
		<>
			<Layout>
				<Head>{renderMetaTags(metaTags)}</Head>
				<div className='md:container mx-auto lg:block hidden'>
					<Section title='podcast'>
						<Banner post={morePodcasts[0]} />
					</Section>
				</div>
				<div className='block lg:hidden pt-18'>
					<Banner post={morePodcasts[0]} />
				</div>

				<div className='md:container mx-auto pb-20 lg:pb-35'>
					{morePosts.length > 0 && (
						<ListPodcast title='listen more' posts={morePodcasts} tags={tags} />
					)}
				</div>

				{/* Fetch Latest releases podcast mobile version*/}
				<div className='md:container mx-auto lg:py-35'>
					{showMoreButton && (
						<div
							className={`
						bg-black
						w-200 
						lg:hidden
						flex 
						items-center
						justify-center
						rounded-42
						cursor-pointer
						pt-12
						pb-14
						my-18
						mx-auto
						`}
							onClick={handleReadMore}
						>
							<span className='font-bold text-15 text-white'>Read More</span>
						</div>
					)}
				</div>
			</Layout>
		</>
	)
}
