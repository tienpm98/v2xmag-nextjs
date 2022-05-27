import Head from 'next/head'
import { request } from '@/lib/datocms'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import { metaTagsFragment, responsiveImageFragment } from '@/lib/fragments'

import HeroBanner from '@/components/features/hero-banner'
import Layout from '@/components/layout/layout'
import LatestPost from '@/components/features/latest-post'
import PopularPost from '@/components/features/popular-posts'
import TopPost from '@/components/features/top-posts'
import Container from '@/components/layout/container'
import Podcast from '@/components/features/podcast/podcast'

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

export default function Index({ subscription }) {
	const {
		data: { allPosts, site, blog },
	} = useQuerySubscription(subscription)

	const morePosts = allPosts.slice(0, 3)
	const metaTags = blog.seo.concat(site.favicon)

	return (
		<>
			<Layout>
				<Head>{renderMetaTags(metaTags)}</Head>
				<div className='md:container mx-auto'>
					{morePosts.length > 0 && <TopPost posts={allPosts} />}
					{morePosts.length > 0 && (
						<LatestPost title='latest news' posts={morePosts} />
					)}
					{morePosts.length > 0 && (
						<PopularPost title='popular' posts={morePosts} />
					)}
				</div>
				<Podcast title='podcast' />
			</Layout>
		</>
	)
}
