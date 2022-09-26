import Breadcrumbs from 'nextjs-breadcrumbs'

const Breadcrumb = () => {
	return (
		<div
			className='
			[&>nav>ol]:flex [&>nav>ol]:items-center [&>nav>ol]:list-none [&>nav>ol]:p-0
			[&>nav>ol>li]:p-0 [&>nav>ol>li]:m-0 [&>nav>ol>li]:mr-4
			[&>nav>ol>li:after]:content-["›"] [&>nav>ol>li:after]:inline-block [&>nav>ol>li:after]:ml-4
			[&>nav>ol>li:last-child:after]:content-[""]
			[&>nav>ol>li>a]:text-12 [&>nav>ol>li>a]:no-underline [&>nav>ol>li>a]:text-black [&>nav>ol>li>a]:font-displayNormal [&>nav>ol>li>a]:font-bold
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
