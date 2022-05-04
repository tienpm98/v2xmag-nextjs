import Section from '../layout/section'
import ListPostsLayout from '../layout/list-post-layout'
import AdsLayout from '../layout/ads-layout'
import PostPreviewVertical from './post-preview-vertical'
import PostPreviewHorizontal from './post-preview-horizontal'
export default function TopPosts({ posts }) {
	const topPost = posts[0]
	const restPosts = posts.slice(1, 4)
	/*
        big top-post should get the first post from api
        the rest-post should be slice from 1 to 4
    */
	return (
		<div className='flex flex-wrap justify-between py-4 md:py-6'>
			<div className='basis-auto'>
				<PostPreviewHorizontal
					key={topPost.slug}
					title={topPost.title}
					coverImage={topPost.coverImage}
					date={topPost.date}
					author={topPost.author}
					slug={topPost.slug}
					category={topPost.category}
					excerpt={topPost.excerpt}
					uppercaseTitle={true}
				/>

				<Section title='Highlights'>
					<ListPostsLayout
						hasAds={true}
						isCol={true}
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
							/>
						))}
						adsHorizontal={
							<AdsLayout isHorizontal={true}>adsHorizontal</AdsLayout>
						}
					/>
				</Section>
			</div>
		</div>
	)
}
