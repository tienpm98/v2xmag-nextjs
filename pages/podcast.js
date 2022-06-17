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

	const morePosts = allPosts.slice(0, 3)

	const repeat = (a, n) => Array(n).fill(a).flat(1)

	const morePodcasts = repeat(morePosts, 4)
	const morePodcastsBeforeAds = morePodcasts.slice(0, 3)
	const morePodcastsAfterAds = morePodcasts.slice(3)

	const metaTags = blog.seo.concat(site.favicon)
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
	return (
		<>
			<Layout>
				<Head>{renderMetaTags(metaTags)}</Head>
				<div className='md:container mx-auto'>
					<Section title='podcast'>
						<Banner post={morePodcastsBeforeAds[0]} />
					</Section>
				</div>
				<div className='md:container mx-auto lg:py-35'>
					{morePosts.length > 0 && (
						<ListPodcast
							title='listen more'
							posts={morePodcastsBeforeAds}
							postsAfterAds={morePodcastsAfterAds}
							tags={tags}
						/>
					)}
				</div>
			</Layout>
		</>
	)
}
