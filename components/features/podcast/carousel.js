import { Play } from '@/components/ui/Icon/play'

const CarouselComponent = ({ onClick }) => {
	return (
		<div className='w-190 h-190 lg:w-545 lg:h-364 absolute right-0 left-0 ml-auto mr-auto top-50-percent lg:right-50 lg:left-auto lg:top-40-percent z-10'>
			<div
				className='flex justify-center items-center h-full lg:hidden absolute right-0 left-0 ml-auto mr-auto'
				onClick={onClick}
			>
				<Play id='mask0_816_1171' />
			</div>
			<img
				className='object-cover w-full h-full'
				src='https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png'
			/>
		</div>
	)
}

export default CarouselComponent
