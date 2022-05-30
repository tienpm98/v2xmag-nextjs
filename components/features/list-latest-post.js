import ListPostsLayout from '../layout/list-post-layout'
import Section from '../layout/section'
import AdsLayout from '../layout/ads-layout'
import PostPreviewVertical from './post-preview-vertical'

export default function ListLatestPosts({ title, posts }) {
	return (
		<Section title={title} showViewAll>
			<ListPostsLayout
				hasAds={true}
                isCol={true}
                isSectionPost
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
                        isSectionPost
						showAuthor
					/>
				))}
				adsHorizontal={<AdsLayout isHorizontal={true}></AdsLayout>}
			/>
		</Section>
	)
}
