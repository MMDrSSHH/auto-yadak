"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { ArrowUpOutline, TimerOutline } from "../icons";
import ProductCard from "../product-card/ProductCard";
import Timer from "./Timer";
import { useState } from "react";
import { FreeMode } from "swiper/modules";
// import "swiper/css/free-mode";

function SpecialEventCarousel() {
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(false);
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
        freeMode={true}
        modules={[FreeMode]}
        spaceBetween={20}
        // Init state for btns activation
        onBeforeInit={(swiper) => {
          setIsEnd(swiper.isEnd);
          setIsBeginning(swiper.isBeginning);
        }}
        // Moving to edges state for btns activation
        onToEdge={(swiper) => {
          setIsEnd(swiper.isEnd);
          setIsBeginning(swiper.isBeginning);
        }}
        // Moving from edges state for btns activation
        onFromEdge={(swiper) => {
          setIsEnd(swiper.isEnd);
          setIsBeginning(swiper.isBeginning);
        }}
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

        <ForwardBtn isActive={!isEnd} />
        <PrevBtn isActive={!isBeginning} />
      </Swiper>
    </div>
  );
}

const ForwardBtn = ({ isActive }) => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideNext()}
      style={{
        display: isActive ? "flex" : "none",
      }}
      className="bg-white border border-text-200 text-text-400 w-[40px] aspect-square rounded-full items-center justify-center absolute top-1/2 left-[16px] z-10"
    >
      <ArrowUpOutline className="-rotate-90" />
    </button>
  );
};

const PrevBtn = ({ isActive }) => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slidePrev()}
      style={{
        display: isActive ? "flex" : "none",
      }}
      className="bg-white border border-text-200 text-text-400 w-[40px] aspect-square rounded-full items-center justify-center absolute top-1/2 right-[16px] z-10"
    >
      <ArrowUpOutline className="rotate-90" />
    </button>
  );
};

export default SpecialEventCarousel;
