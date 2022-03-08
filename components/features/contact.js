import { Context } from '@/context'
import { useState, useContext } from 'react'
import Layout from '@/components/layout/menu'

const Contact = () => {
	const { state, dispatch } = useContext(Context)

	return (
		<Layout
			isShow={state.toggleContact}
			clickOutside={() =>
				dispatch({
					type: 'TOGGLE_CONTACT',
					payload: false,
				})
			}
		>
			<div className='w-full h-full lg:h-fit flex flex-col items-center lg:flex-row justify-around lg:justify-between font-black text-center md:text-left md:pl-36 md:pr-36'>
				<ul className='h-fit lg:h-full'>
					<li className='text-60 md:text-100 uppercase text-black leading-87.5'>
						<a href='#'>Contact</a>
					</li>
				</ul>

				<div className='text-20 md:text-20 text-black leading-87.5 text-right'>
					<p className='m-5'>
						V2X magazine 69
						<br />
						nguyentrai. phamngulaoward
						<br />
						district 1. hochiminhcity
						<br />
						VN. 70000
					</p>

					<p className='m-5'>
						editorial
						<br />
						editorial@v2x.com
					</p>

					<p className='m-5'>
						advertising
						<br />
						advertising@v2x.com
					</p>

					<p className='m-5'>
						production
						<br />
						production@v2x.com
					</p>

					<p className='m-5'>
						back issues
						<br />
						backissues@v2x.com
					</p>

					<p className='m-5'>
						merchandise queries
						<br />
						merchandise@v2x.com
					</p>

					<p className='m-5'>
						careers
						<br />
						ukhr@v2x.com
					</p>

					<p className='m-5'>
						online photography submissions
						<br />
						photography@v2x.com
					</p>
				</div>
			</div>
		</Layout>
	)
}

export default Contact
