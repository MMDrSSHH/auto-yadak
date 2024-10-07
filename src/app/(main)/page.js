import ArticleCard from "@/components/article-card/ArticleCard";
import BrandCard from "@/components/brand-card/BrandCard";
import BrandProductsBanner from "@/components/brand-products-banner/BrandProductsBanner";
import CategoryCard from "@/components/category-card/CategoryCard";
import {
  ConvertCardOutline,
  HeadsetOutline,
  InstagramOutline,
  MedalStarOutline,
  TruckTimeOutline,
} from "@/components/icons";
import Container from "@/components/layout/Container";
import MainMenuCarousel from "@/components/main-menu-carousel/MainMenuCarousel";
import MenuSectionHeader from "@/components/menu-section-header/MenuSectionHeader";
import ProductCard from "@/components/product-card/ProductCard";
import ServiceCard from "@/components/service-card/ServiceCard";
import SpecialEventCarousel from "@/components/special-event-carousel/SpecialEventCarousel";
import { InstagramSectionCurve } from "@/components/vectors";
import Image from "next/image";
import React from "react";

function MainPage() {
  return (
    <div>
      <Container>
        {/* Main top carousel */}
        <MainMenuCarousel />

        {/* Service cards section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] mt-[64px] items-baseline">
          <ServiceCard
            icon={<TruckTimeOutline />}
            title="ارسال به سراسر کشور بدون تعطیلی"
          />
          <ServiceCard
            icon={<HeadsetOutline />}
            title="مشاوره رایگان پیش از خرید و بعد از خرید"
          />
          <ServiceCard
            icon={<MedalStarOutline />}
            title="تضمین اصالت کالا در هر شرایطی بدون قید و شرط"
          />
          <ServiceCard icon={<ConvertCardOutline />} title="ضمانت بازگشت وجه" />
        </div>

        {/* Special event carousel */}
        <SpecialEventCarousel />

        {/* Brand cards section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-[20px] mt-[64px]">
          <BrandCard
            imageUrl="/assets/iran-khodro-logo.png"
            brand="ایران خودرو"
          />
          <BrandCard
            imageUrl="/assets/iran-khodro-logo.png"
            brand="ایران خودرو"
          />
          <BrandCard
            imageUrl="/assets/iran-khodro-logo.png"
            brand="ایران خودرو"
          />
          <BrandCard
            imageUrl="/assets/iran-khodro-logo.png"
            brand="ایران خودرو"
          />
          <BrandCard
            imageUrl="/assets/iran-khodro-logo.png"
            brand="ایران خودرو"
          />
          <BrandCard
            // imageUrl="/assets/iran-khodro-logo.png"
            brand="همه برندهای خودرو"
            more
            moreNum={40}
          />
        </div>

        {/* Brand Products Banner */}
        <div className="mt-[64px] grid grid-cols-3 gap-[20px]">
          <BrandProductsBanner
            imageUrl="/assets/serkan-products-banner.png"
            alt="serkan products"
          />
          <BrandProductsBanner
            imageUrl="/assets/serkan-products-banner.png"
            alt="serkan products"
          />
          <BrandProductsBanner
            imageUrl="/assets/serkan-products-banner.png"
            alt="serkan products"
          />
        </div>

        {/* Categories cards section */}
        <div className="mt-[64px]">
          <h3 className="text-black text-[28px] font-medium text-center">
            دسته‌بندی
          </h3>
          {/* Cards */}
          <div className="mt-[32px] flex justify-center items-center gap-[40px] flex-wrap">
            <CategoryCard imageUrl="/assets/battery.png" title="لوازم برقی" />
            <CategoryCard imageUrl="/assets/battery.png" title="لوازم برقی" />
            <CategoryCard imageUrl="/assets/battery.png" title="لوازم برقی" />
            <CategoryCard imageUrl="/assets/battery.png" title="لوازم برقی" />
            <CategoryCard imageUrl="/assets/battery.png" title="لوازم برقی" />
            <CategoryCard imageUrl="/assets/battery.png" title="لوازم برقی" />
            <CategoryCard imageUrl="/assets/battery.png" title="لوازم برقی" />
            <CategoryCard imageUrl="/assets/battery.png" title="لوازم برقی" />
          </div>
        </div>
      </Container>

      {/* Instagram media section */}
      <div className="mt-[64px] h-[110px] overflow-hidden w-full relative flex justify-center items-center">
        <Image
          src="/assets/instagram-gradient-background.png"
          alt="instagram-gradient"
          fill
        />
        {/* Content */}
        <div className="relative flex items-center justify-center w-full gap-[12px] text-white z-10">
          <InstagramOutline className="text-[38px]" />
          <InstagramSectionCurve className="absolute left-[48px] opacity-50" />
          <InstagramSectionCurve className="absolute right-[48px] opacity-50" />
          <span className="text-[20px] font-bold">
            اینستاگرام اتویدک بپیوندید تا از آخرین خبرها مطلع شوید
          </span>
        </div>
      </div>

      <Container>
        {/* Top sale products */}
        <div className="mt-[64px]">
          <MenuSectionHeader title="محصولات پرفروش" linkLabel="مشاهده همه" />
          {/* List */}
          <div className="grid grid-cols-6 gap-[20px] mt-[32px]">
            <ProductCard
              imageUrl="/assets/gas-filter.png"
              rating="4/6"
              title="فیلتر بنزین مدل 6043 مناسب برای برلیانس H230"
              price={100000}
            />
            <ProductCard
              imageUrl="/assets/gas-filter.png"
              rating="4/6"
              title="فیلتر بنزین مدل 6043 مناسب برای برلیانس H230"
              price={100000}
            />
            <ProductCard
              imageUrl="/assets/gas-filter.png"
              rating="4/6"
              title="فیلتر بنزین مدل 6043 مناسب برای برلیانس H230"
              price={100000}
            />
            <ProductCard
              imageUrl="/assets/gas-filter.png"
              rating="4/6"
              title="فیلتر بنزین مدل 6043 مناسب برای برلیانس H230"
              price={100000}
            />
            <ProductCard
              imageUrl="/assets/gas-filter.png"
              rating="4/6"
              title="فیلتر بنزین مدل 6043 مناسب برای برلیانس H230"
              price={100000}
            />
            <ProductCard
              imageUrl="/assets/gas-filter.png"
              rating="4/6"
              title="فیلتر بنزین مدل 6043 مناسب برای برلیانس H230"
              price={100000}
            />
          </div>
        </div>

        {/* Articles section */}
        <div className="mt-[64px]">
          <MenuSectionHeader title="مقالات" linkLabel="مشاهده همه" />
          <div className="mt-[32px] grid grid-cols-3 gap-[20px]">
            <ArticleCard
              imageUrl="/assets/vehicle-checkup-article.png"
              title="چکاپ ماشین قبل از سفر؛ چک لیست ۲۰ تایی خودرو برای سفر مهم ترین بررسی قبل از شروع مسافرت!"
            />
            <ArticleCard
              imageUrl="/assets/vehicle-checkup-article.png"
              title="چکاپ ماشین قبل از سفر؛ چک لیست ۲۰ تایی خودرو برای سفر مهم ترین بررسی قبل از شروع مسافرت!"
            />
            <ArticleCard
              imageUrl="/assets/vehicle-checkup-article.png"
              title="چکاپ ماشین قبل از سفر؛ چک لیست ۲۰ تایی خودرو برای سفر مهم ترین بررسی قبل از شروع مسافرت!"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MainPage;
