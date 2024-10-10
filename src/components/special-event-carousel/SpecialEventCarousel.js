"use client";

import React from "react";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import ProductCard from "../product-card/ProductCard";
import { ArrowUpOutline, TimerOutline } from "../icons";
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
          <Timer
            expiryTimestamp={
              new Date(
                Date.now() + 20 * 60 * 60 * 1000 + 10 * 60 * 1000 + 16 * 1000
              )
            }
          />
        </div>
      </div>

      {/* products carousel */}
      <Swiper
        className="flex-1 relative"
        slidesOffsetAfter={28}
        slidesOffsetBefore={28}
        slidesPerView={5.2}
        spaceBetween={20}
      >
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

        <ForwardBtn />
        <PrevBtn />
      </Swiper>
    </div>
  );
}

const ForwardBtn = () => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideNext()}
      className="bg-white border border-text-200 text-text-400 w-[40px] aspect-square rounded-full flex items-center justify-center absolute top-1/2 left-[16px] z-10"
    >
      <ArrowUpOutline className="-rotate-90" />
    </button>
  );
};

const PrevBtn = () => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slidePrev()}
      className="bg-white border border-text-200 text-text-400 w-[40px] aspect-square rounded-full flex items-center justify-center absolute top-1/2 right-[16px] z-10"
    >
      <ArrowUpOutline className="rotate-90" />
    </button>
  );
};

export default SpecialEventCarousel;
