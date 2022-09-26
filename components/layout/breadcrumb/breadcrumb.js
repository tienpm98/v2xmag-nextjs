import Breadcrumbs from 'nextjs-breadcrumbs'

const Breadcrumb = () => {
	return (
		<div
			className='
			list_breadcrumb:flex list_breadcrumb:items-center list_breadcrumb:list-none list_breadcrumb:p-0
			breadcrumb_items:p-0 breadcrumb_items:m-0 breadcrumb_items:mr-4
			breadcrumb_next:content-["›"] breadcrumb_next:inline-block breadcrumb_next:ml-4
			breadcrumb_items_last:after:content-[""]
			breadcrumb_link:text-12 breadcrumb_link:no-underline breadcrumb_link:text-black breadcrumb_link:font-displayNormal breadcrumb_link:font-bold
		'
		>
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
