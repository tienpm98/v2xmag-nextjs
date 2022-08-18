import Section from '../layout/section'
import AdsLayout from '../layout/ads-layout'
import GridLayout from '../layout/grid-layout'
import PodcastItems from './podcast-items'

export default function ListPodcast({ title, posts, tags }) {
	return (
		<Section title={title}>
			<GridLayout
				adsComponent={<AdsLayout></AdsLayout>}
				children={posts.map((post) => (
					<PodcastItems
						key={post.slug}
						title={post.title}
						coverImage={post.coverImage}
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
