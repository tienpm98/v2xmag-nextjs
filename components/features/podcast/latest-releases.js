import ListPostsLayout from '@/components/layout/list-post-layout'
import Section from '@/components/layout/section'
import PostPreviewVertical from '../post-preview-vertical'

const LatestReleases = ({ posts }) => {
	const tags = [
		{
			title: 'TECHNO',
		},
		{
			title: 'VIETNAM',
		},
		{
			title: 'V2XMIX',
		},
	]
	return (
		<Section title='latest releases'>
			<ListPostsLayout
				isScrollHorizontal
				children={posts.map((post) => (
					<PostPreviewVertical
						key={post.slug}
						isScrollHorizontal
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
						slug={post.slug}
						category={post.category}
						excerpt={post.excerpt}
						tags={tags}
					/>
				))}
			/>
		</Section>
	)
}

export default LatestReleases
