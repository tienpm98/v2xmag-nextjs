import Head from 'next/head'
import { request } from '@/lib/datocms'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import { metaTagsFragment, responsiveImageFragment } from '@/lib/fragments'

import Layout from '@/components/layout/layout'
import LatestPost from '@/components/features/latest-post'
import PopularPost from '@/components/features/popular-posts'
import TopPost from '@/components/features/top-posts'
import Podcast from '@/components/features/podcast/podcast'

import SectionDivide from '@/components/ui/section-divide'

import AdsLayout from '@/components/layout/ads-layout'

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
		
        allPosts(orderBy: _publishedAt_DESC, first: 20) {
			title
			slug
			excerpt
			date
			_publishedAt
		  isHighlighted
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

	const highlightedPosts = allPosts.filter(
		(post) => post.isHighlighted === true
	)

	return (
		<>
			<Layout>
				<Head>{renderMetaTags(metaTags)}</Head>
				<div className='md:container mx-auto'>
					<TopPost posts={highlightedPosts} />
					<div className='lg:pb-40 pb-20 px-16 lg:px-0 md:px-0'>
						<AdsLayout></AdsLayout>
					</div>
					<SectionDivide />
					{morePosts.length > 0 && (
						<LatestPost title='latest news' posts={morePosts} />
					)}
					<div className='lg:pb-40 pb-20 px-16 lg:px-0 md:px-0'>
						<AdsLayout></AdsLayout>
					</div>
					<SectionDivide />
					{morePosts.length > 0 && (
						<PopularPost title='popular' posts={morePosts} />
					)}
					<SectionDivide />
				</div>
				<Podcast title='podcast' posts={morePosts} />
			</Layout>
		</>
	)
}
