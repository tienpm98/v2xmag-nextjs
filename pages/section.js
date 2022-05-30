import Head from 'next/head'
import { request } from '@/lib/datocms'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import { metaTagsFragment, responsiveImageFragment } from '@/lib/fragments'

import Layout from '@/components/layout/layout'
import LatestPost from '@/components/features/latest-post'
import PopularPost from '@/components/features/popular-posts'
import TopPost from '@/components/features/top-posts'
import Podcast from '@/components/features/podcast/podcast'
import PostPreviewVertical from '@/components/features/post-preview-vertical'
import ListPostsLayout from '@/components/layout/list-post-layout'
import AdsLayout from '@/components/layout/ads-layout'
import ListLatestPosts from '@/components/features/list-latest-post'

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

export default function Section({ subscription }) {
	const {
		data: { allPosts, site, blog },
	} = useQuerySubscription(subscription)

	const morePosts = allPosts.slice(0, 3)

	const repeat = (a, n) => Array(n).fill(a).flat(1)

	const _morePosts = repeat(morePosts, 3)
	const metaTags = blog.seo.concat(site.favicon)
	console.log(_morePosts)
	return (
		<>
			<Layout>
				<Head>{renderMetaTags(metaTags)}</Head>
				<div className='md:container mx-auto'>
					{morePosts.length > 0 && (
						<TopPost posts={allPosts} isVerticalPost hideAds />
					)}
					{morePosts.length > 0 && (
						<ListLatestPosts title='latest news' posts={_morePosts} />
					)}
				</div>
			</Layout>
		</>
	)
}
