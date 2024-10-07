"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";

import "swiper/css/thumbs";
import Image from "next/image";

function ProductDetailsGallery({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!Array.isArray(images)) throw new Error("Images prop must be an array");

  return (
    <>
      <Swiper thumbs={{ swiper: thumbsSwiper }} modules={[Thumbs]}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[450px]">
              <Image src={image.imageUrl} alt={image.desc} className="object-fill" fill />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="mt-[32px]"
        onSwiper={setThumbsSwiper}
        spaceBetween={18}
        slidesPerView={4.8}
        watchSlidesProgress={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative w-[93px] aspect-square">
              <Image src={image.imageUrl} alt={image.desc} fill />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ProductDetailsGallery;
