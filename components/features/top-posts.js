import PostPreviewVertical from './post-preview-vertical'
import PostPreviewHorizontal from './post-preview-horizontal'
import AdsLayout from '../layout/ads-layout'

export default function TopPosts({ posts }) {
	const topPost = posts[0]
	/*
        big top-post should get the first post from api
        the rest-post should be slice from 1 to 4
    */
	const restPosts = posts.slice(1, 4)
	return (
		<div className='flex flex-wrap justify-between py-4 md:py-6 border-b border-[#000000]'>
			<div className='basis-auto lg:basis-5/6 max-w-6xl'>
				<PostPreviewHorizontal
					key={topPost.slug}
					title={topPost.title}
					coverImage={topPost.coverImage}
					date={topPost.date}
					author={topPost.author}
					slug={topPost.slug}
					category={topPost.category}
					excerpt={topPost.excerpt}
				/>
				<div className='flex gap-4 flex-col md:flex-row py-5'>
					{restPosts.map((post) => (
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
				</div>
			</div>
			<AdsLayout>
				<span>ads vertical 1</span>
				<span>ads vertical 2</span>
			</AdsLayout>
			<AdsLayout isHorizontal={true}>
				<span>ads horizontal</span>
			</AdsLayout>
		</div>
	)
}
