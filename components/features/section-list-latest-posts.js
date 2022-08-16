import Section from '../layout/section'
import ArticalPosts from './artical-posts'
import GridLayout from '../layout/grid-layout'

export default function SectionListLatestPosts({ title, posts }) {
	return (
		<Section title={title}>
			<GridLayout
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
		</Section>
	)
}
