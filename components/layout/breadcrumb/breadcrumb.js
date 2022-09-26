import Breadcrumbs from 'nextjs-breadcrumbs'

const Breadcrumb = () => {
	return (
		<>
			<Breadcrumbs
				useDefaultStyle
				rootLabel='HOME'
				transformLabel={(title) => title.toUpperCase()}
				omitIndexList={[1]}
			/>
		</>
	)
}

export default Breadcrumb
