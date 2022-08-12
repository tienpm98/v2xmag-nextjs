import Head from 'next/head'
import { request } from '@/lib/datocms'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import { metaTagsFragment, responsiveImageFragment } from '@/lib/fragments'

import Layout from '@/components/layout/layout'
import TopPost from '@/components/features/top-posts'
import SectionListLatestPosts from '@/components/features/section-list-latest-posts'
import Pagination from '@/components/features/pagination'
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
          _publishedAt
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

export default function Sections({ subscription }) {
	const {
		data: { allPosts, site, blog },
	} = useQuerySubscription(subscription)

	const morePosts = allPosts.slice(0, 3)

	const repeat = (a, n) => Array(n).fill(a).flat(1)

	const latestNews = repeat(morePosts, 4)
	const latestNewsBeforeAds = latestNews.slice(3)
	const latestNewsAfterAds = latestNews.slice(-3)

	const metaTags = blog.seo.concat(site.favicon)
	const handleLoadmore = () => {
		// handle loadmore
	}
	return (
		<>
			<Layout>
				<Head>{renderMetaTags(metaTags)}</Head>
				<div className='md:container mx-auto lg:py-65 py-18'>
					{morePosts.length > 0 && (
						<>
							<TopPost posts={allPosts} isVerticalPost hideAds isSectionPage />
							<div className='lg:hidden block px-20 pb-28'>
								<AdsLayout></AdsLayout>
							</div>
							<div className='lg:hidden block border-2 border-black mx-20 lg:mx-0'></div>
						</>
					)}
					{morePosts.length > 0 && (
						<SectionListLatestPosts
							title='latest news'
							posts={latestNewsBeforeAds}
							postsAfterAds={latestNewsAfterAds}
						/>
					)}
					<div className='block lg:hidden'>
						<div
							className={`
								bg-black
								text-white
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
							onClick={handleLoadmore}
						>
							<span className='font-bold text-15'>Load More</span>
						</div>
					</div>
					<div className='lg:block hidden'>
						<Pagination page={1} />
					</div>
				</div>
			</Layout>
		</>
	)
}
