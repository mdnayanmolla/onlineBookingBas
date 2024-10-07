import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TbWorld } from "react-icons/tb";
import { FaBusSimple } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import WhiteBtn from "../../components/buttons/WhiteBtn";
const ProductCarousel = () => {
  return (
    <>
      <div className="h-screen relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "custom-bullet", // Custom class for the bullets
            bulletActiveClass: "custom-bullet-active", // Custom class for active bullet
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="h-screen bg-slate-200 flex items-center justify-center">
              <div>
                <TbWorld className="text-7xl text-white" />
                <h6>Book your online bus ticket</h6>
                <p>I’m not superstitious, but I am a little stitious.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-screen">
              <FaBusSimple className="text-7xl text-primary" />
              <h3>Digital Bus Management System</h3>
              <p>I’m not superstitious, but I am a little stitious.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-primary h-screen w-full">
              <IoMdNotifications className="text-7xl text-white" />
              <h6>Book your online bus ticket</h6>
              <p>I’m not superstitious, but I am a little stitious.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="absolute bottom-0 left-0 h-[70px] w-full z-10 px-10 mb-4">
        <WhiteBtn title={"GET STARTED"} />
      </div>
    </>
  );
};

export default ProductCarousel;
