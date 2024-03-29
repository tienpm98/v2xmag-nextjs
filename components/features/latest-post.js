import ListPostsLayout from '../layout/list-post-layout'
import PostPreviewHorizontal from './post-preview-horizontal'
import Section from '../layout/section'

export default function LatestPosts({ title, posts }) {
	return (
		<Section title={title} showViewAll>
			<ListPostsLayout
				hasAds={true}
				hasBorderBottom={true}
				children={posts.map((post) => (
					<PostPreviewHorizontal
						key={post.slug}
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
						slug={post.slug}
						category={post.category}
						excerpt={post.excerpt}
						_publishedAt={post._publishedAt}
						showAuthor
					/>
				))}
			/>
		</Section>
	)
}
