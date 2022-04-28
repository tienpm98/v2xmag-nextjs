import Logo from '../../ui/Icon/logo'
import FaceBook from '@/components/ui/Icon/facebook'
import Container from '../container'
import FooterMenu from './footer-menu'
import Divide from '@/components/ui/divide'
import { footerMenu, footerNavigation } from 'constant/footer'
import FooterNavigation from './footer-navigation'

export default function Footer() {
	return (
		<footer className='bg-black text-white px-2.5'>
			<Container className='container mx-auto'>
				<div className='py-6 md:py-12 flex flex-col'>
					<div className='flex justify-between items-center'>
						<a className='w-fit flex-start py-6 md:py-10' href='/'>
							<Logo className='text-white' />
						</a>
						<div className='flex gap-4'>
							<FaceBook />
						</div>
					</div>
					<Divide className='border-white' />

					<div className='flex flex-wrap justify-between'>
						{footerMenu.map((menu, index) => (
							<FooterMenu
								key={index}
								title={menu.title}
								menuItems={menu.menuItems}
							/>
						))}
					</div>
					<Divide className='border-white' />

					<div className='flex flex-wrap gap-4 justify-end py-6 md:py-10 items-center'>
						<div className='flex flex-wrap justify-between gap-4 md:gap-12'>
							<FooterNavigation footerNavigation={footerNavigation} />

							<p className='text-sm'>© V2X Media 2022</p>
						</div>
					</div>

					<Divide className='border-white' />
				</div>
			</Container>
		</footer>
	)
}
