"use client";

import React, { useState } from "react";
import { ConvertCardOutline, VerifyOutline } from "../icons";
import Warranty from "../warrranty/Warranty";
import formatCurrency from "@/utils/currencyFormatter";

function ProductDetailsAddToCart({ price }) {
  const [orderCount, setOrderCount] = useState(1);

  const countUp = () => {
    setOrderCount((prev) => prev + 1);
  };

  const countDown = () => {
    setOrderCount((prev) => (prev === 1 ? prev : prev - 1));
  };
  return (
    <div className="px-[16px] py-[20px] bg-white rounded-[24px]">
      {/* Price */}
      <div className="flex justify-between items-center text-[#242424]">
        <span className="font-medium">قیمت:</span>
        <span className="font-bold">{formatCurrency(price)} تومان</span>
      </div>

      {/* Warranties */}
      <div className="flex flex-wrap gap-[16px] mt-[16px]">
        <Warranty label="ضمانت اصالت کالا" icon={<VerifyOutline />} />
        <Warranty label="ضمانت بازگشت وجه" icon={<ConvertCardOutline />} />
      </div>

      {/* 1-day delivery request checkbox */}
      <div className="mt-[16px]">
        <label className="flex gap-[4px] items-center text-[12px] font-medium text-black">
          <input
            type="checkbox"
            className="accent-primary-800 w-[15px] aspect-square"
          />
          درخواست ارسال یک روزه داخل تهران
        </label>
      </div>

      {/* Order quantity */}
      <div className="flex justify-center mt-[42px]">
        <div className="flex rounded-[14px] overflow-hidden w-[60%] h-[50px] items-center bg-primary-500 text-white">
          <button
            className="w-full text-center text-[24px]"
            onClick={countDown}
          >
            -
          </button>
          <span className="w-full text-center text-[12px] font-bold">
            {orderCount}
          </span>
          <button className="w-full text-center text-[24px]" onClick={countUp}>
            +
          </button>
        </div>
      </div>

      {/* Add to cart btn */}
      <div className="flex justify-center mt-[24px]">
        <button className="bg-primary-500 text-white text-[14px] font-bold h-[50px] w-[80%] rounded-[14px]">
          افرودن به سبد خرید
        </button>
      </div>

      {/* product identifier */}
      <div className="text-center mt-[24px]">
        <span className="text-text-500 font-medium text-[12px]">
          شناسه محصول:102522556789
        </span>
      </div>
    </div>
  );
}

export default ProductDetailsAddToCart;
