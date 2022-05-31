import Router from 'next/router'
import Button from '../ui/button'

const Pagination = (props) => {
	return (
		<div className='flex w-full justify-between'>
			<Button
				title='PREVIOUS'
				onClick={() => Router.push(`/?page=${props.page - 1}`)}
				disabled={props.page <= 1}
			/>

			<Button
				title='NEXT'
				onClick={() => Router.push(`/?page=${props.page + 1}`)}
			/>
		</div>
	)
}

export default Pagination
