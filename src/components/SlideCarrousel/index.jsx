import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./index.css"

import { Navigation } from "swiper";

export function SlideCarrousel(){
  return (
    <div className="bg-cyan-400 ">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper container sm:py-12 "
      >
        <SwiperSlide className="h-96 text-center flex flex-col items-center justify-center px-16 lg:px-64 space-y-8">
          <p className="text-xl sm:text-4xl font-medium text-white">O que dizem nossos pacientes?</p>
          <p className="text-sm sm:text-xl text-gray-50">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In et
            dolor voluptatem, unde harum ducimus."
          </p>
        </SwiperSlide>
        <SwiperSlide className="h-96 text-center flex flex-col items-center justify-center px-16 lg:px-64 space-y-8">
          <p className="text-xl sm:text-4xl font-medium text-white">O que dizem nossos pacientes?</p>
          <p className="text-sm sm:text-xl text-gray-50">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In et
            dolor voluptatem, unde harum ducimus."
          </p>
        </SwiperSlide>
        <SwiperSlide className="h-96 text-center flex flex-col items-center justify-center px-16 lg:px-64 space-y-8">
          <p className="text-xl sm:text-4xl font-medium text-white">O que dizem nossos pacientes?</p>
          <p className="text-sm sm:text-xl text-gray-50">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In et
            dolor voluptatem, unde harum ducimus."
          </p>
        </SwiperSlide>
        <SwiperSlide className="h-96 text-center flex flex-col items-center justify-center px-16 lg:px-64 space-y-8">
          <p className="text-xl sm:text-4xl font-medium text-white">O que dizem nossos pacientes?</p>
          <p className="text-sm sm:text-xl text-gray-50">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In et
            dolor voluptatem, unde harum ducimus."
          </p>
        </SwiperSlide>
        <SwiperSlide className="h-96 text-center flex flex-col items-center justify-center px-16 lg:px-64 space-y-8">
          <p className="text-xl sm:text-4xl font-medium text-white">O que dizem nossos pacientes?</p>
          <p className="text-sm sm:text-xl text-gray-50">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In et
            dolor voluptatem, unde harum ducimus."
          </p>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}