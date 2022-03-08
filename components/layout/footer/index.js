import Logo from '../../ui/Icon/logo'
import Container from '../container'
import FooterMenu from './footer-menu'
import Divide from '@/components/ui/divide'
import { footerMenu, footerNavigation } from 'constant/footer'
import FooterNavigation from './footer-navigation'

export default function Footer() {
	return (
		<footer className='bg-black text-white'>
			<Container>
				<div className='py-6 md:py-12 flex flex-col'>
					<a className='w-fit flex-start py-6 md:py-10' href='/'>
						<Logo className='text-white' />
					</a>
					<Divide />

					<div className='flex flex-wrap justify-between'>
						{footerMenu.map((menu, index) => (
							<FooterMenu
								key={index}
								title={menu.title}
								menuItems={menu.menuItems}
							/>
						))}
					</div>
					<Divide />

					<div className='flex flex-wrap gap-4 justify-between py-6 md:py-10 items-center'>
						<div className='flex flex-col'>
							<label className='text-xs'>Location</label>
							<select className='appearance-none form-select px-1.5 py-2.5 w-60 border-0 border-b border-slate-50 bg-transparent focus:outline-0  focus:outline-transparent focus:border-slate-50 focus:shadow-transparent focus:ring-transparent'>
								<option className='text-black' defaultValue='Germany'>
									Germany
								</option>
								<option className='text-black' value='vn'>
									Vietnamese
								</option>
								<option className='text-black' value=''>
									Japanese
								</option>
								<option className='text-black' value=''>
									Italian
								</option>
							</select>
						</div>

						<div className='flex flex-wrap justify-between gap-4 md:gap-12'>
							<FooterNavigation footerNavigation={footerNavigation} />

							<p className='text-sm'>© Titel Media GmbH 2022</p>
						</div>
					</div>

					<Divide />

					<span className='text-sm text-[#666666] py-8'>
						*If you submitted your e-mail address and placed an order, we may
						use your e-mail address to inform you regularly about similar
						products without prior consent. You can object to the use of your
						e-mail address for this purpose at any time without incurring any
						costs other than the transmission costs according to the basic
						tariffs. Each newsletter contains an unsubcribe link, you can object
						to receiving the newsletter at any time by sending an e-mail to
						info@highsnobiety.com
						<br />
						<br />
						<h2 className='py-1'>WEB ACCESSIBILITY STATEMENT</h2>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using 'Content here, content
						here', making it look like readable English. Many desktop publishing
						packages and web page editors now use Lorem Ipsum as their default
						model text, and a search for 'lorem ipsum' will uncover many web
						sites still in their infancy. Various versions have evolved over the
						years, sometimes by accident, sometimes on purpose.
						<br />
						<br />
						<h2 className='py-1'>DISCLAIMER</h2>
						Contrary to popular belief, Lorem Ipsum is not simply random text.
						It has roots in a piece of classical Latin literature from 45 BC,
						making it over 2000 years old. Richard McClintock, a Latin professor
						at Hampden-Sydney College in Virginia, looked up one of the more
						obscure Latin words, consectetur, from a Lorem Ipsum passage, and
						going through the cites of the word in classical literature,
						discovered the undoubtable source. Lorem Ipsum comes from sections
						1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
						of Good and Evil) by Cicero, written in 45 BC. This book is a
						treatise on the theory of ethics, very popular during the
						Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
						amet..", comes from a line in section 1.10.32.
					</span>
				</div>
			</Container>
		</footer>
	)
}
