import Breadcrumbs from 'nextjs-breadcrumbs'

const Breadcrumb = () => {
	return (
		<>
			<Breadcrumbs
				rootLabel='HOME'
				transformLabel={(title) => title.toUpperCase()}
				omitIndexList={[1]}
				listClassName='list_breadcrumb'
			/>
		</>
	)
}

export default Breadcrumb
