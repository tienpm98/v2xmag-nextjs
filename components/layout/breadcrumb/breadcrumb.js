import Breadcrumbs from 'nextjs-breadcrumbs'
import styles from './breadcrumb.module.css'
const Breadcrumb = () => {
	return (
		<div className={styles.breadcrumb_text}>
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
