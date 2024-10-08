import React from "react";
import { AutoYadakLogo } from "../icons";
import Link from "next/link";

function Footer() {
  return (
    <div className="py-[153px] flex justify-center border-[0.5px] border-primary-600 bg-white rounded-[48px]">
      {/* Left logo section */}
      <div className="text-center ml-[20px]">
        <AutoYadakLogo className="text-[81px]" />
        <h4 className="text-secondary-500 text-[20px] font-extrabold">
          اتویدک
        </h4>
      </div>

      {/* About us section */}
      <div className="w-1/3 text-justify ml-[64px]">
        <p className="text-[16px] font-normal leading-10">
          <span className="text-[20px]">درباره ما:</span> {" "}
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
      </div>

      {/* Categories section */}
      <div className="ml-[64px]">
        <span className="text-[20px] font-bold mb-[12px] inline-block">دسته بندی محصولات</span>
        <div className="flex flex-col gap-[10px]">
          <Link href="#" className="text-text-900 font-normal text-[16px]">
            قطعات موتوری
          </Link>
          <Link href="#" className="text-text-900 font-normal text-[16px]">
            قطعات جلوبندی
          </Link>
          <Link href="#" className="text-text-900 font-normal text-[16px]">
            قطعات گیربکس
          </Link>
          <Link href="#" className="text-text-900 font-normal text-[16px]">
            قطعات برقی
          </Link>
          <Link href="#" className="text-text-900 font-normal text-[16px]">
            لوازم مصرفی
          </Link>
        </div>
      </div>

      {/* Quick availability section */}
      <div>
        <span className="text-[20px] font-bold mb-[12px] inline-block">دسترسی سریع</span>
        <div className="flex flex-col gap-[10px]">
          <Link href="#" className="text-text-900 font-normal text-[16px]">
            مقالات
          </Link>
          <Link href="#" className="text-text-900 font-normal text-[16px]">
            تماس باما
          </Link>
          <Link href="#" className="text-text-900 font-normal text-[16px]">
            برندها
          </Link>
          <Link href="#" className="text-text-900 font-normal text-[16px]">
            جدیدترین محصولات
          </Link>
          <Link href="#" className="text-text-900 font-normal text-[16px]">
            همکاری با ما
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
