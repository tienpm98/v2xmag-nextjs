import Section from '../layout/section'
import ListPostsLayout from '../layout/list-post-layout'
import ArticalPosts from './artical-posts'

export default function SectionListLatestPosts({
	title,
	posts,
	postsAfterAds,
}) {
	return (
		<Section title={title}>
			<ListPostsLayout
				isCol={true}
				isSectionPost
				children={posts.map((post) => (
					<ArticalPosts
						key={post.slug}
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
						slug={post.slug}
						category={post.category}
						excerpt={post.excerpt}
						isSectionPost
						_publishedAt={post._publishedAt}
						showAuthor
					/>
				))}
			/>
			<div className='pt-38 lg:py-0'>
				<ListPostsLayout
					isCol={true}
					isSectionPost
					children={postsAfterAds.map((post) => (
						<ArticalPosts
							key={post.slug}
							title={post.title}
							coverImage={post.coverImage}
							date={post.date}
							author={post.author}
							slug={post.slug}
							category={post.category}
							excerpt={post.excerpt}
							isSectionPost
							_publishedAt={post._publishedAt}
							showAuthor
						/>
					))}
				/>
			</div>
		</Section>
	)
}
