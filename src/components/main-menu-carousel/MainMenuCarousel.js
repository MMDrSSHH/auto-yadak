"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

function MainMenuCarousel() {
  return (
    <div className="h-[550px] mt-[25px] relative">
      <Swiper
        modules={[Pagination]}
        pagination={{
          dynamicBullets: true,
          dynamicMainBullets: 1,
          clickable: true,
        }}
        className="h-full main-menu-carousel"
        spaceBetween={12}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <SwiperSlide
            key={item}
            className="bg-primary-500 text-white !flex justify-center items-center text-[48px] rounded-[10px]"
          >
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MainMenuCarousel;
