"use client";

import Image from "next/image";
import React from "react";
import { RatingStarFilled } from "../icons";

function ProductCard({
  discount = null,
  imageUrl,
  title,
  rating,
  discountPrice = null,
  price,
  className = "",
}) {
  return (
    <div className={`bg-white rounded-[16px] h-[320px] relative ${className}`}>
      {/* Discount percent */}
      {discount && (
        <div
          dir="ltr"
          className="bg-[#D42E4A] z-10 flex justify-center items-center w-[28px] h-[30px] absolute top-0 left-[12px] rounded-b-full pb-[4px] text-white text-[10px] font-semibold"
        >
          {discount}%
        </div>
      )}

      {/* Image section */}
      <div className="h-[150px] w-full relative rounded-t-[16px] overflow-hidden">
        <Image src={imageUrl} alt={title} fill />
      </div>

      {/* Details */}
      <div className="p-[8px] flex flex-col justify-between h-[calc(100%-150px)]">
        {/* Title */}
        <span className="text-text-900 font-medium text-[16px] line-clamp-2">
          {title}
        </span>

        {/* Bottom details */}
        <div className="flex flex-col gap-[8px]">
          {/* Rating */}
          <div className="flex self-end">
            <span className="text-text-300 font-normal text-[12px]">
              {rating}
            </span>
            <RatingStarFilled className="text-[#FFAE00] text-[15px]" />
          </div>

          {/* non-discount price */}
          {discountPrice && (
            <span className="self-end line-through text-[#929292] text-[12px] font-medium">
              {price}تومان
            </span>
          )}

          {/* discount price */}
          <span className="self-end text-text-900 text-[14px] font-bold">
            {discountPrice ? discountPrice : price}تومان
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
