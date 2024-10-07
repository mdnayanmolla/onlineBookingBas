import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TbWorld } from "react-icons/tb";
import { FaBusSimple } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import WhiteBtn from "../../components/buttons/WhiteBtn";
import { Link } from "react-router-dom";
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
            <div className="h-screen bg-primary flex items-center text-center">
              <div className="text-center w-full ">
                <div className="flex justify-center py-3">
                  <TbWorld className="text-7xl text-white" />
                </div>
                <h6 >Book your online bus ticket</h6>
                <p >I’m not superstitious, but I am a little stitious.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-screen bg-white flex items-center text-center space-y-4">
              <div className="text-center w-full ">
                <div className="flex justify-center py-3">
                  <FaBusSimple className="text-7xl text-center text-primary" />
                </div>
                <h3 className="text-primary">Digital Bus Management System</h3>
                <p >I’m not superstitious, but I am a little stitious.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-screen bg-primary flex items-center text-center space-y-4">
              <div className="text-center w-full ">
                <div className="flex justify-center py-3">
                  <IoMdNotifications className="text-7xl text-white" />
                </div>
                <h6>Through notificaitions keep yourself updated</h6>
                <p>I’m not superstitious, but I am a little stitious.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="absolute bottom-0 left-0 h-[70px] w-full z-10 px-6 mb-4">
         <Link to="/landing">
           <WhiteBtn title={"GET STARTED"} />
         </Link>
      </div>
    </>
  );
};

export default ProductCarousel;
