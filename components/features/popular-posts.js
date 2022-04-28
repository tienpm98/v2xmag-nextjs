import ListPostsLayout from '../layout/list-post-layout'
import PostPreviewVertical from './post-preview-vertical'
import Section from '../layout/section'

export default function PopularPost({ title, posts }) {
	return (
		<Section title={title}>
			<ListPostsLayout
				isCol={true}
				children={posts.map((post) => (
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
			/>
		</Section>
	)
}
