import ListPostsLayout from '../layout/list-post-layout'
import Section from '../layout/section'
import AdsLayout from '../layout/ads-layout'
import PostPreviewVertical from './post-preview-vertical'

export default function ListPodcast({ title, posts, postsAfterAds, tags }) {
	return (
		<Section title={title}>
			<ListPostsLayout
				hasAds={true}
				isCol={true}
				isSectionPost
				children={posts.map((post) => (
					<PostPreviewVertical
						key={post.slug}
						title={post.title}
						coverImage={post.coverImage}
						slug={post.slug}
						category={post.category}
						excerpt={post.excerpt}
						isSectionPost
						tags={tags}
					/>
				))}
				adsHorizontal={<AdsLayout isHorizontal={true}></AdsLayout>}
			/>
			<div className='lg:pt-0 pt-18'>
				<ListPostsLayout
					isCol={true}
					isSectionPost
					children={postsAfterAds.map((post) => (
						<PostPreviewVertical
							key={post.slug}
							title={post.title}
							coverImage={post.coverImage}
							slug={post.slug}
							category={post.category}
							excerpt={post.excerpt}
							isSectionPost
							tags={tags}
						/>
					))}
				/>
			</div>
		</Section>
	)
}
