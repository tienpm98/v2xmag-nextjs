import Breadcrumbs from 'nextjs-breadcrumbs'

const Breadcrumb = () => {
	return (
		<div className='next_breadcrumb'>
			<Breadcrumbs
				useDefaultStyle
				rootLabel='HOME'
				transformLabel={(title) => title.toUpperCase()}
				omitIndexList={[1]}
			/>
		</div>
	)
}

export default Breadcrumb
