import Image from "next/image";
import React from "react";

function BrandCard({ imageUrl, brand, more = false, moreNum }) {
  return (
    <div className="flex flex-col px-[20px] items-center gap-[28px] pt-[16px] pb-[32px] bg-primary-50 border border-primary-200 rounded-[16px] h-full">
      {!more ? (
        <div className="relative w-[100px] aspect-square">
          <Image src={imageUrl} alt={brand} fill />
        </div>
      ) : (
        <div className="h-[100px] flex items-center justify-center">
          <span dir="ltr" className="text-primary-500 text-[28px] font-bold mt-[24px]">
            +{moreNum}
          </span>
        </div>
      )}
      <h4 className="text-primary-950 text-[20px] font-bold">{brand}</h4>
    </div>
  );
}

export default BrandCard;
