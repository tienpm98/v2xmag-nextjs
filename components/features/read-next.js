import AdsLayout from '../layout/ads-layout'
import ListPostsLayout from '../layout/list-post-layout'
import Section from '../layout/section'
import ArticalPosts from './artical-posts'
import PostPreviewVertical from './post-preview-vertical'

export default function ReadNext({ title, posts, hasAds }) {
	const beforeAdsPosts = posts.slice(3)
	const afterAdsPosts = posts.slice(-3)

	return (
		<Section title={title}>
			<ListPostsLayout
				isCol
				isSectionPost
				children={beforeAdsPosts.map((post) => (
					<ArticalPosts
						key={post.slug}
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
						slug={post.slug}
						category={post.category}
						excerpt={post.excerpt}
						_publishedAt={post._publishedAt}
					/>
				))}
			/>
			<div className='pb-20 lg:pb-0'>{hasAds && <AdsLayout />}</div>

			<div className='lg:pt-20 lg:block hidden'>
				<ListPostsLayout
					isCol
					isSectionPost
					children={afterAdsPosts.map((post) => (
						<ArticalPosts
							key={post.slug}
							title={post.title}
							coverImage={post.coverImage}
							date={post.date}
							author={post.author}
							slug={post.slug}
							category={post.category}
							excerpt={post.excerpt}
							_publishedAt={post._publishedAt}
						/>
					))}
				/>
			</div>
		</Section>
	)
}
