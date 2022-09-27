import Breadcrumbs from 'nextjs-breadcrumbs'

const Breadcrumb = ({ isPodcast }) => {
	return (
		<>
			<Breadcrumbs
				rootLabel='HOME'
				transformLabel={(title) => title.toUpperCase()}
				omitIndexList={[1]}
				listClassName={isPodcast ? 'list_breadcrumb podcast_body' : 'list_breadcrumb'}
			/>
		</>
	)
}

export default Breadcrumb
