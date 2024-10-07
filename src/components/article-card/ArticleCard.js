import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowLeftOutline } from "../icons";

function ArticleCard({ imageUrl, title }) {
  return (
    <div className="p-[8px_8px_16px_8px] rounded-[16px] shadow-[0px_3px_25px_-8px] shadow-[rgba(0,0,0,0.15)]">
      <div className="h-[180px] w-full relative rounded-[8px] overflow-hidden">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <span className="mt-[8px] leading-6 text-text-900 text-[14px] font-medium line-clamp-2">
        {title}
      </span>

      <Link
        href="#"
        className="text-primary-700 text-[12px] font-medium ml-[16px] flex items-center justify-end"
      >
        <span>ادامه مطلب</span>
        <ArrowLeftOutline className="text-[20px]" />
      </Link>
    </div>
  );
}

export default ArticleCard;
