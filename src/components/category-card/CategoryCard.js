import Image from "next/image";
import React from "react";

function CategoryCard({ imageUrl, title }) {
  return (
    <div className="flex flex-col items-center gap-[4px]">
      {/* Image wrapper */}
      <div className="w-[140px] aspect-square bg-[#E7E7E7] rounded-full flex justify-center items-center">
        <div className="relative w-[85px] h-[85px]">
          <Image src={imageUrl} alt={title} className="object-contain" fill />
        </div>
      </div>
      <h5 className="text-black text-[16px] font-medium">{title}</h5>
    </div>
  );
}

export default CategoryCard;
