import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, EffectCoverflow } from 'swiper/modules';
//ts-ignore;
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

function App() {
  return (
    <>
      <Swiper
      className='w-full h-screen'
      speed={800}
      loop={true}
      direction={'vertical'}
      mousewheel={true}
      effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
      modules={[EffectCoverflow, Mousewheel, Pagination]}
    >
      <SwiperSlide className='bg-gradient-to-b from-[#f77438] to-[#1c1619]'>
        <div className='flex justify-center'>
          <img src="./1.png" width="480"/>
        </div>
      </SwiperSlide>
        <SwiperSlide className='bg-gradient-to-b from-[#004695] to-[#091527]'>
        <div className='flex justify-center'>
          <img src="./2.png" width="480" />
        </div>
      </SwiperSlide>
      <SwiperSlide className='bg-gradient-to-b from-[#d6adc7] to-[#3f1b68]'>
        <div className='flex justify-center'>
          <img src="./3.png" width="480"  />
        </div>
      </SwiperSlide>
    </Swiper>
    </>
  )
}

export default App
