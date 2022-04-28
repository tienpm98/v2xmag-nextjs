import PostPreviewHorizontal from './post-preview-horizontal'

export default function TopPosts({ posts }) {
	const topPost = posts[0]
	/*
        big top-post should get the first post from api
        the rest-post should be slice from 1 to 4
    */
	const restPosts = posts.slice(1, 4)
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
			</div>
		</div>
	)
}
