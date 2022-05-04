import Logo from '../../ui/Icon/logo'
import FaceBook from '@/components/ui/Icon/facebook'
import Container from '../container'
import FooterMenu from './footer-menu'
import Divide from '@/components/ui/divide'
import { footerMenu, footerNavigation } from 'constant/footer'
import FooterNavigation from './footer-navigation'
import Twitter from '@/components/ui/Icon/twitter'
import Instagram from '@/components/ui/Icon/instagram'
import Youtube from '@/components/ui/Icon/youtube'
import Tiktok from '@/components/ui/Icon/tiktok'
import Accordion from '@/components/ui/Accordion/accordion'

export default function Footer() {
	return (
		<footer className='bg-black text-white px-3.5'>
			<Container className='container mx-auto'>
				<div className='py-6 md:py-50 flex flex-col'>
					<div className='flex justify-center md:justify-between items-center pb-6 md:pb-45'>
						<a className='hidden md:flex w-fit flex-start' href='/'>
							<Logo className='text-white' />
						</a>
						<div className='flex gap-35'>
							<FaceBook />
							<Twitter />
							<Instagram />
							<Youtube />
							<Tiktok />
						</div>
					</div>
					<Divide className='border-white' />

					<div className='hidden md:flex flex-wrap justify-between'>
						{footerMenu.map((menu, index) => (
							<FooterMenu
								key={index}
								title={menu.title}
								menuItems={menu.menuItems}
							/>
						))}
					</div>
					<Accordion />
					<Divide className='border-white' />

					<div className='flex flex-wrap gap-4 justify-end py-6 md:py-10 items-center'>
						<div className='flex flex-wrap justify-center md:justify-between gap-4 md:gap-12'>
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
