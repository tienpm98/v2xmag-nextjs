import Head from 'next/head'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'

import HeroBanner from '@/components/features/hero-banner'
import Layout from '@/components/layout/layout'
import LatestPost from '@/components/features/latest-post'
import PopularPost from '@/components/features/popular-posts'
import TopPost from '@/components/features/top-posts'
import Container from '@/components/layout/container'
import { request } from '@/lib/datocms'
import { metaTagsFragment, responsiveImageFragment } from '@/lib/fragments'

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

	const heroPost = allPosts[0]
	const morePosts = allPosts.slice(0, 3)
	const metaTags = blog.seo.concat(site.favicon)

	return (
		<>
			<Container>
				{heroPost && (
					<HeroBanner
						title={heroPost.title}
						coverImage={heroPost.coverImage}
						date={heroPost.date}
						author={heroPost.author}
						slug={heroPost.slug}
						excerpt={heroPost.excerpt}
					/>
				)}
			</Container>
			<Layout>
				<Head>{renderMetaTags(metaTags)}</Head>

				{morePosts.length > 0 && <TopPost posts={allPosts} />}
				{morePosts.length > 0 && (
					<LatestPost title='LATEST' posts={morePosts} />
				)}
				{morePosts.length > 0 && (
					<PopularPost title='POPULAR' posts={morePosts} isSmallFont={true} />
				)}
			</Layout>
		</>
	)
}
