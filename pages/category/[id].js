import Head from 'next/head'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import { request } from '@/lib/datocms'
import { metaTagsFragment, responsiveImageFragment } from '@/lib/fragments'

import HeroBanner from '@/components/features/hero-banner'
import Layout from '@/components/layout/layout'
import PostPreviewVertical from '@/components/features/post-preview-vertical'
import ListPostsLayout from '@/components/layout/list-post-layout'

export async function getStaticPaths() {
	const data = await request({ query: `{ allPosts { category {id} } }` })
	return {
		paths: data.allPosts.map((post) => `/category/${post.category.id}`),
		fallback: false,
	}
}

export async function getStaticProps({ params, preview }) {
	const graphqlRequest = {
		query: `
     		query PostByCategoryId($id: ItemId) {
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
		postsByCategory: allPosts(orderBy: date_DESC, first: 20, filter:{category: {
				eq: $id
			} }) {
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
		variables: {
			id: params.id,
		},
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

export default function Category({ subscription }) {
	const {
		data: { postsByCategory, site, blog },
	} = useQuerySubscription(subscription)
	const heroPost = postsByCategory[0]
	const morePosts = postsByCategory.slice(0)
	const metaTags = blog.seo.concat(site.favicon)
	return (
		<>
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
			<Layout>
				<Head>{renderMetaTags(metaTags)}</Head>

				{morePosts.length > 0 && (
					<ListPostsLayout isCol={true}>
						{morePosts.map((post) => (
							<PostPreviewVertical
								key={post.slug}
								title={post.title}
								coverImage={post.coverImage}
								date={post.date}
								author={post.author}
								slug={post.slug}
								category={post.category}
								excerpt={post.excerpt}
							/>
						))}
					</ListPostsLayout>
				)}
			</Layout>
		</>
	)
}
