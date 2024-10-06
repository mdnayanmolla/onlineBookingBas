import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';  // Import Swiper core styles
import 'swiper/css/pagination';  // Import Swiper pagination styles

const GetStarted = () => {
  return (
    <div className="bg-blue-500 h-screen"> {/* Ensure bg-primary is defined or use bg-blue-500 */}
      <Swiper
        modules={[Pagination]} // Enable pagination
        pagination={{ clickable: true }} // Enable clickable dots
        spaceBetween={30}
        slidesPerView={1} // Default 1 slide per view
        breakpoints={{
          // Configure breakpoints for responsiveness
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GetStarted;
