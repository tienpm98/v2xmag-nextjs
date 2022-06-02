import AdsLayout from '../layout/ads-layout'
import ListPostsLayout from '../layout/list-post-layout'
import Section from '../layout/section'
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
					<PostPreviewVertical
						isSectionPost
						key={post.slug}
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
						slug={post.slug}
						category={post.category}
						excerpt={post.excerpt}
						showAuthor
					/>
				))}
			/>
			{hasAds && <AdsLayout />}

			<div className='lg:pt-20'>
				<ListPostsLayout
					isCol
					isSectionPost
					children={afterAdsPosts.map((post) => (
						<PostPreviewVertical
							isSectionPost
							key={post.slug}
							title={post.title}
							coverImage={post.coverImage}
							date={post.date}
							author={post.author}
							slug={post.slug}
							category={post.category}
							excerpt={post.excerpt}
							showAuthor
						/>
					))}
				/>
			</div>
		</Section>
	)
}
