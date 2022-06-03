import Head from 'next/head'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import { request } from '@/lib/datocms'
import { metaTagsFragment, responsiveImageFragment } from '@/lib/fragments'
import Link from 'next/link'

import Container from '@/components/layout/container'
import Layout from '@/components/layout/layout'
import PostBody from '@/components/features/posts/post-body'
import PostHeader from '@/components/features/posts/post-header'
import ReadNext from '@/components/features/read-next'
import Artical from '@/components/features/artical'
import TimeAgo from '@/components/ui/timeAgo'

export async function getStaticPaths() {
	const data = await request({ query: `{ allPosts { slug } }` })

	return {
		paths: data.allPosts.map((post) => `/posts/${post.slug}`),
		fallback: false,
	}
}

export async function getStaticProps({ params, preview = false }) {
	const graphqlRequest = {
		query: `
      query PostBySlug($slug: String) {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        post(filter: {slug: {eq: $slug}}) {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          title
          slug
          excerpt
          content {
            value
            blocks {
              __typename
              ...on ImageBlockRecord {
                id
                image {
                  responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                    ...responsiveImageFragment
                  }
                }
              }
            }
          }
          date
          ogImage: coverImage{
            url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
          }
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
          category {
            id
            slug
            name
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

        morePosts: allPosts(orderBy: date_DESC, first: 2, filter: {slug: {neq: $slug}}) {
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

      ${responsiveImageFragment}
      ${metaTagsFragment}
    `,
		preview,
		variables: {
			slug: params.slug,
		},
	}

	return {
		props: {
			subscription: preview
				? {
						...graphqlRequest,
						initialData: await request(graphqlRequest),
						token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
				  }
				: {
						enabled: false,
						initialData: await request(graphqlRequest),
				  },
			preview,
		},
	}
}

export default function Post({ subscription, preview }) {
	const {
		data: { site, post, morePosts },
	} = useQuerySubscription(subscription)

	const metaTags = post.seo.concat(site.favicon)
	const repeat = (a, n) => Array(n).fill(a).flat(1)
	const nextPosts = repeat(morePosts, 3)

	const articals = morePosts

	return (
		<Layout preview={preview}>
			<Head>{renderMetaTags(metaTags)}</Head>
			<Container className='md:container mx-auto'>
				<article>
					<PostHeader
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
						excerpt={post.excerpt}
					/>
					<div className='flex'>
						<div className='flex flex-col'>
							<Link href={`/category/${post.category.id}`}>
								<span className='font-black text-12 leading-1 uppercase text-gray-8 underline cursor-pointer'>
									{post.category.name}
								</span>
							</Link>
							<span className='text-12 leading-1 text-gray-8 lg:pt-20 lg:pb-40'>
								by <strong>{post.author.name}</strong>
								<TimeAgo />
							</span>
						</div>
						<PostBody content={post.content} />
						<div className='flex flex-col justify-between'>
							{articals.map((artical, index) => (
								<Artical
									key={index}
									slug={artical.slug}
									coverImage={artical.coverImage}
									title={artical.title}
								/>
							))}
						</div>
					</div>
				</article>

				<div className='border-b border-black pt-20 lg:pt-60'></div>
				{morePosts.length > 0 && (
					<ReadNext title='what to read next' posts={nextPosts} hasAds />
				)}
			</Container>
		</Layout>
	)
}
