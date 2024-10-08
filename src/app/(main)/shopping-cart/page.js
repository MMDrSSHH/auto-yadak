import Container from "@/components/layout/Container";
import MenuSectionHeader from "@/components/menu-section-header/MenuSectionHeader";
import ProductCard from "@/components/product-card/ProductCard";
import ShoppingCartItemCard from "@/components/shopping-cart-item-card/ShoppingCartItemCard";
import Link from "next/link";
import React from "react";

function ShoppingCartPage() {
  return (
    <Container>
      {/* Shopping cart */}
      <div className="mt-[32px] grid grid-cols-12 gap-[20px]">
        {/* Items list */}
        <div className="col-span-8 flex flex-col gap-[16px]">
          <ShoppingCartItemCard
            itemTitle="روکش صندلی خودرو مدل smb040 مناسب برای کوییک"
            discountPrice={0}
            price={1200000}
            imageUrl="/assets/carseats-cover-smb-040-quick.png"
            quantity={1}
            warranty="گارانتی 16 ماهه"
          />
          <ShoppingCartItemCard
            itemTitle="روکش صندلی خودرو مدل smb040 مناسب برای کوییک"
            discountPrice={450000}
            price={900000}
            imageUrl="/assets/carseats-cover-smb-040-quick.png"
            quantity={1}
            warranty="گارانتی 16 ماهه"
          />
        </div>

        {/* Cart details */}
        <div className="col-span-4">
          <div className="bg-white py-[72px] flex flex-col items-center border-[0.5px] border-[#DBDBDB] rounded-[16px]">
            <span className="text-[16px] font-medium text-black">
              جمع سبد خرید شما
            </span>
            <span className="mt-[24px] text-black text-[16px] font-bold">
              1650000تومان
            </span>
            <button className="mt-[32px] w-[60%] bg-primary-500 h-[48px] text-white rounded-[8px] text-[14px] font-medium">
              تایید و تکمیل سفارش
            </button>
          </div>
        </div>
      </div>

      {/* Recommended products */}
      <MenuSectionHeader
        className="mt-[72px]"
        title={
          <div className="flex items-center gap-[8px]">
            <span>پیشنهاد ما</span>
            <Link
              href="#"
              className="px-[8px] py-[4px] rounded-[20px] bg-white text-primary-700 text-[12px] font-normal"
            >
              آگهی
            </Link>
          </div>
        }
      />

      {/* Recommended products list */}
      <div className="mt-[32px] grid grid-cols-6 gap-[20px] mb-[200px]">
        <ProductCard
          imageUrl="/assets/gas-filter.png"
          rating="4/6"
          title="فیلتر بنزین مدل 6043 مناسب برای برلیانس H230"
          price={100000}
          className="border-[1.5px] border-transparent transition-colors hover:border-primary-500"
        />
        <ProductCard
          imageUrl="/assets/gas-filter.png"
          rating="4/6"
          title="فیلتر بنزین مدل 6043 مناسب برای برلیانس H230"
          price={100000}
          className="border-[1.5px] border-transparent transition-colors hover:border-primary-500"
        />
        <ProductCard
          imageUrl="/assets/gas-filter.png"
          rating="4/6"
          title="فیلتر بنزین مدل 6043 مناسب برای برلیانس H230"
          price={100000}
          className="border-[1.5px] border-transparent transition-colors hover:border-primary-500"
        />
        <ProductCard
          imageUrl="/assets/gas-filter.png"
          rating="4/6"
          title="فیلتر بنزین مدل 6043 مناسب برای برلیانس H230"
          price={100000}
          className="border-[1.5px] border-transparent transition-colors hover:border-primary-500"
        />
        <ProductCard
          imageUrl="/assets/gas-filter.png"
          rating="4/6"
          title="فیلتر بنزین مدل 6043 مناسب برای برلیانس H230"
          price={100000}
          className="border-[1.5px] border-transparent transition-colors hover:border-primary-500"
        />
        <ProductCard
          imageUrl="/assets/gas-filter.png"
          rating="4/6"
          title="فیلتر بنزین مدل 6043 مناسب برای برلیانس H230"
          price={100000}
          className="border-[1.5px] border-transparent transition-colors hover:border-primary-500"
        />
      </div>
    </Container>
  );
}

export default ShoppingCartPage;
