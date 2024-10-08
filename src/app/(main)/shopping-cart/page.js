import Container from "@/components/layout/Container";
import React from "react";

function ShoppingCartPage() {
  return (
    <Container>
      {/* Shopping cart */}
      <div className="mt-[32px] grid grid-cols-12 gap-[20px]">
        {/* Items list */}
        <div className="col-span-8 flex flex-col gap-[16px]"></div>

        {/* Cart details */}
        <div className="col-span-4">
          <div className="bg-white py-[72px] flex flex-col items-center">
            <span className="text-[16px] font-medium text-black">جمع سبد خرید شما</span>
            <span className="mt-[24px] text-black text-[16px] font-bold">1650000تومان</span>
            <button className="mt-[32px] w-[60%] bg-primary-500 h-[48px] text-white rounded-[8px] text-[14px] font-medium">تایید و تکمیل سفارش</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ShoppingCartPage;
