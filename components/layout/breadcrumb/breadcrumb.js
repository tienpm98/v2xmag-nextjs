import Breadcrumbs from 'nextjs-breadcrumbs'

const Breadcrumb = () => {
	return (
		<div className='next_breadcrumb'>
			<Breadcrumbs
				rootLabel='HOME'
				transformLabel={(title) => title.toUpperCase()}
				omitIndexList={[1]}
				listClassName='list_breadcrumb'
			/>
		</div>
	)
}

export default Breadcrumb
