import Head from 'next/head'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import { request } from '@/lib/datocms'
import { metaTagsFragment, responsiveImageFragment } from '@/lib/fragments'
import Link from 'next/link'

import Container from '@/components/layout/container'
import Layout from '@/components/layout/layout'
import PodcastHeader from '@/components/features/podcast/podcast-header'
import PodcastBody from '@/components/features/podcast/podcast-body'
import LatestReleases from '@/components/features/podcast/latest-releases'

export async function getStaticPaths() {
	const data = await request({ query: `{ allPosts { slug } }` })

	return {
		paths: data.allPosts.map((post) => `/podcast/${post.slug}`),
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

        morePosts: allPosts(orderBy: date_DESC, first: 3, filter: {slug: {neq: $slug}}) {
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
	const repeat = (a, n) => Array(n).fill(a).flat(1)

	const metaTags = post.seo.concat(site.favicon)
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}
	return (
		<Layout preview={preview}>
			<Head>{renderMetaTags(metaTags)}</Head>
			<Container className='bg-gradient-to-b from-red-c1 to-black'>
				<article className='lg:p-0 p-18 lg:mt-0 mt-18'>
					<PodcastHeader
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
						excerpt={post.excerpt}
					/>
					<div className='flex justify-around md:container mx-auto'>
						<div className='hidden lg:flex flex-col min-w-100'>
							<Link href={`/category/${post.category.id}`}>
								<span className='font-bold text-12 leading-1 uppercase text-white underline underline-offset-4 cursor-pointer'>
									{post.category.name}
								</span>
							</Link>
							<span className='text-12 leading-1 text-white lg:pt-20 lg:pb-40'>
								{new Date(post.date).toLocaleDateString('en-US', options)}
							</span>
						</div>
						<div className='podcast_body'>
							<PodcastBody content={post.content} />
						</div>
						<div className='lg:block hidden min-w-100'></div>
					</div>
				</article>

				<div className='md:container mx-auto border-b border-white pt-20 lg:pt-60'></div>
				{morePosts.length > 0 && (
					<div className='lg:block hidden md:container mx-auto text-white'>
						<LatestReleases sectionTitle='listen more' posts={morePosts} />
					</div>
				)}

				{morePosts.length > 0 && (
					<div className='lg:hidden md:container mx-auto block px-18 text-white'>
						<LatestReleases sectionTitle='latest releases' posts={morePosts} />
					</div>
				)}
			</Container>
		</Layout>
	)
}
