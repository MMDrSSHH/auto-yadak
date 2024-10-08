import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import {
  CandleOutline,
  Convert3DCubeOutline,
  Edit2Bold,
  HeartOutline,
  ShareOutline,
} from "@/components/icons";
import Container from "@/components/layout/Container";
import ProductCard from "@/components/product-card/ProductCard";
import ProductDetailsAddToCart from "@/components/product-details-add-to-cart/ProductDetailsAddToCart";
import ProductDetailsAttributes from "@/components/product-details-attributes/ProductDetailsAttributes";
import ProductDetailsComment from "@/components/product-details-comment/ProductDetailsComment";
import ProductDetailsGallery from "@/components/product-details-gallery/ProductDetailsGallery";
import ProductDetailsSectionHeader from "@/components/product-details-section-header/ProductDetailsSectionHeader";
import ProductDetailsTitle from "@/components/product-details-title/ProductDetailsTitle";
import Link from "next/link";
import React from "react";

function ProductDetailsPage({ params: { productId } }) {
  return (
    <div>
      <Container>
        <Breadcrumbs
          className="mt-[16px]"
          links={[
            {
              label: "اتویدک",
              href: "/",
            },
            {
              label: "پراید",
              href: "/",
            },
            {
              label: "فرمان، جلوبندی و ترمز",
              href: "/",
            },
            {
              label: "سیستم ترمز",
              href: "/",
            },
            {
              label: "لنت ترمز",
              href: "/",
            },
          ]}
        />

        {/* Product details section */}
        <div className="grid grid-cols-12 gap-[20px] mt-[24px]">
          {/* Details */}
          <div className="col-span-9 bg-white rounded-[24px] p-[24px_24px_32px_24px] flex">
            {/* Actions */}
            <div className="flex flex-col gap-[12px] text-[24px] text-primary-600">
              <button>
                <HeartOutline />
              </button>
              <button>
                <ShareOutline />
              </button>
              <button>
                <CandleOutline />
              </button>
            </div>

            {/* Gallery sectiom */}
            <div className="w-[600px]">
              <ProductDetailsGallery
                images={[
                  {
                    imageUrl: "/assets/produtc-details-gallery-1.png",
                    desc: "1",
                  },
                  {
                    imageUrl: "/assets/produtc-details-gallery-2.png",
                    desc: "2",
                  },
                  {
                    imageUrl: "/assets/produtc-details-gallery-3.png",
                    desc: "3",
                  },
                  {
                    imageUrl: "/assets/produtc-details-gallery-4.png",
                    desc: "4",
                  },
                ]}
              />
            </div>

            {/* Details (attributes) */}
            <div className="mr-[16px] w-full">
              <ProductDetailsTitle
                className="mt-[4px]"
                title="لنت ترمز جایگاه جلو پراید سایپایی"
                imageUrl="/assets/saipa-logo.png"
              />

              <ProductDetailsAttributes
                className="mt-[32px]"
                attributes={[
                  {
                    label: "برند",
                    value: "سایپا",
                  },
                  {
                    label: "نوع خودرو",
                    value: "پراید",
                  },
                  {
                    label: "تیپ خودرو",
                    value: "111،151،141،132،131",
                  },
                  {
                    label: "شرکت سازنده",
                    value: "سایپا یدک",
                  },
                  {
                    label: "کشور سازنده",
                    value: "ایران",
                  },
                  {
                    label: "شماره فنی",
                    value: "p17-500655",
                  },
                  {
                    label: "محل نصب",
                    value: "محور جلو",
                  },
                  {
                    label: "تعداد",
                    value: "چهار عدد",
                  },
                ]}
              />
            </div>
          </div>

          {/* Ordering area */}
          <div className="col-span-3">
            <ProductDetailsAddToCart price={285000} />

            {/* Product return warranty */}
            <Link
              href="#"
              className="text-primary-600 text-[16px] font-medium flex items-center justify-center gap-[8px] mt-[28px]"
            >
              <Convert3DCubeOutline className="text-[20px]" />
              12روز ضمانت برگشت کالا
            </Link>
          </div>
        </div>

        {/* Comments section */}
        <ProductDetailsSectionHeader
          title="نظرات"
          action={
            <label className="flex gap-[12px] text-black text-[16px] font-bold">
              مرتب براساس:
              <select className="text-primary-600 bg-transparent text-[14px] font-bold outline-none w-[100px]">
                <option>جدیدترین</option>
                <option>قدیمی‌ترین</option>
              </select>
            </label>
          }
          className="mt-[42px]"
        />
        {/* Comment list */}
        <div className="mt-[48px] flex flex-col gap-[32px]">
          <ProductDetailsComment
            userName="امیر حسینی"
            date="4 روز پیش"
            rate={4}
            title="خوب بود"
            comment="دنبال یه لنت بودم تا حالا سه بار لنت خریدم بعد دو ماه تموم شده ولی این لنت خیلی خوبه الان شیش ماهی هست که دارمش راضی بودم و تا حالا صدا نداده"
            dislikes={1}
            likes={2}
          />
          <ProductDetailsComment
            userName="امیر حسینی"
            date="6 روز پیش"
            rate={2}
            title="صدا افتاد"
            comment="دنبال یه لنت بودم تا حالا سه بار لنت خریدم بعد دو ماه تموم شده ولی این لنت خیلی خوبه الان شیش ماهی هست که دارمش راضی بودم و تا حالا صدا نداده"
            dislikes={8}
            likes={3}
          />
        </div>

        {/* Add new comment btn */}
        <div className="flex justify-center mt-[40px]">
          <button className="text-primary-600 text-[20px] font-bold flex gap-[10px] items-center">
            <Edit2Bold className="text-[20px]" />
            ثبت نظر
          </button>
        </div>

        {/* Related products section */}
        <ProductDetailsSectionHeader
          title="محصولات مرتبط"
          className="mt-[64px]"
        />

        {/* Related products list */}
        <div className="mt-[32px] grid grid-cols-6 gap-[20px] mb-[164px]">
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
    </div>
  );
}

export default ProductDetailsPage;
