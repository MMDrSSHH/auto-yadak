"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../product-card/ProductCard";
import { TimerOutline } from "../icons";
import Timer from "./Timer";

function SpecialEventCarousel() {
  return (
    <div className=" py-[32px] mt-[64px] bg-[#E3314F] rounded-[24px] flex">
      {/* Right timer wrapper */}
      <div className="w-[220px]">
        <div className="w-full h-full flex flex-col items-center justify-center gap-[22px]">
          <TimerOutline className="text-white text-[66px]" />
          <span className="text-[28px] font-bold text-white">اتوآف</span>

          {/* Timer */}
          <Timer />
        </div>
      </div>

      {/* products carousel */}
      <Swiper className="flex-1" slidesPerView={5.2} spaceBetween={20}>
        <SwiperSlide>
          <ProductCard
            discount={50}
            discountPrice={2500000}
            price={5000000}
            rating={"4/2"}
            title="لاستیک پژو 207 یزد تایر"
            imageUrl="/assets/207-yazd-tire.png"
            className="border-[1.5px] border-transparent transition-colors hover:border-text-400"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            discount={50}
            discountPrice={2500000}
            price={5000000}
            rating={"4/2"}
            title="لاستیک پژو 207 یزد تایر"
            imageUrl="/assets/207-yazd-tire.png"
            className="border-[1.5px] border-transparent transition-colors hover:border-text-400"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            discount={50}
            discountPrice={2500000}
            price={5000000}
            rating={"4/2"}
            title="لاستیک پژو 207 یزد تایر"
            imageUrl="/assets/207-yazd-tire.png"
            className="border-[1.5px] border-transparent transition-colors hover:border-text-400"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            discount={50}
            discountPrice={2500000}
            price={5000000}
            rating={"4/2"}
            title="لاستیک پژو 207 یزد تایر"
            imageUrl="/assets/207-yazd-tire.png"
            className="border-[1.5px] border-transparent transition-colors hover:border-text-400"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            discount={50}
            discountPrice={2500000}
            price={5000000}
            rating={"4/2"}
            title="لاستیک پژو 207 یزد تایر"
            imageUrl="/assets/207-yazd-tire.png"
            className="border-[1.5px] border-transparent transition-colors hover:border-text-400"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            discount={50}
            discountPrice={2500000}
            price={5000000}
            rating={"4/2"}
            title="لاستیک پژو 207 یزد تایر"
            imageUrl="/assets/207-yazd-tire.png"
            className="border-[1.5px] border-transparent transition-colors hover:border-text-400"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SpecialEventCarousel;
