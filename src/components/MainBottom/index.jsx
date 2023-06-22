import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './index.css'
import { Navigation, Pagination, Autoplay } from "swiper";

export function SlideCarroussel() {

    return(
      <div className="bg-mainVerde">
        <Swiper 
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{delay: 5000}}
        navigation={true}
        pagination={{clickable:true}}
        className="swiper-container">

          <SwiperSlide className="h-96 text-center flex flex-col items-center justify-center px-16 lg:px-64 space-y-8">
            <p className="text-xl sm:text-4xl font-medium text-white">O dizem nossos pacientes?</p>

            <p className="text-sm sm:text-xl text-gray-50">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore magni, 
              nesciunt deleniti vero omnis exercitationem voluptates repudiandae adipisci.
            </p>
            
          </SwiperSlide>

          <SwiperSlide className="h-96 text-center flex flex-col items-center justify-center px-16 lg:px-64 space-y-8">
            <p className="text-xl sm:text-4xl font-medium text-white">O dizem nossos pacientes?</p>

            <p className="text-sm sm:text-xl text-gray-50">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore magni, 
              nesciunt delenititates repudiandae adipisci.
            </p>

          </SwiperSlide>

        </Swiper>
      </div>
    )
  
}