import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <div className="max-w-full flex justify-center overflow-hidden ">
      <div className="w-full">
        <Swiper
          className="max-w-screen-2xl"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }} // Auto-play settings
          navigation
          // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className="max-h-[80vh] ">
              <img
                className="object-cover w-full h-[600px] bg-center "
                src="img/4.jpg"
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="max-h-[80vh] ">
              <img
                className="object-cover w-full h-[600px] bg-center "
                src="img/2.jpg"
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-h-[80vh] ">
              <img
                className="object-cover w-full h-[600px] bg-center "
                src="img/1.jpg"
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-h-[80vh] ">
              <img
                className="object-cover w-full h-[600px] bg-center "
                src="img/5.jpg"
              ></img>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
