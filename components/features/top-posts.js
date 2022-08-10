import Section from '../layout/section'
import ListPostsLayout from '../layout/list-post-layout'
import AdsLayout from '../layout/ads-layout'
import PostPreviewVertical from './post-preview-vertical'
import TopHighlight from './top-highlight'

export default function TopPosts({
	posts,
	isVerticalPost,
	isSectionPage,
	hideAds,
}) {
	const topPost = posts[0]
	const restPosts = posts.slice(1, 4)
	/*
        big top-post should get the first post from api
        the rest-post should be slice from 1 to 4
    */
	return (
		<div className='flex flex-wrap justify-between lg:pt-60'>
			<div className='basis-auto'>
				<TopHighlight
					key={topPost.slug}
					title={topPost.title}
					coverImage={topPost.coverImage}
					date={topPost.date}
					author={topPost.author}
					slug={topPost.slug}
					category={topPost.category}
					excerpt={topPost.excerpt}
					uppercaseTitle={true}
					isVerticalPost={isVerticalPost}
					isSectionPage={isSectionPage}
				/>

				<Section title='Highlights'>
					<ListPostsLayout
						hasAds={true}
						isScrollHorizontal
						hasBorderBottom={true}
						children={restPosts.map((post) => (
							<PostPreviewVertical
								key={post.slug}
								title={post.title}
								coverImage={post.coverImage}
								date={post.date}
								author={post.author}
								slug={post.slug}
								category={post.category}
								excerpt={post.excerpt}
								isScrollHorizontal
							/>
						))}
						adsHorizontal={
							hideAds ? null : <AdsLayout isHorizontal={true}></AdsLayout>
						}
					/>
				</Section>
			</div>
		</div>
	)
}
