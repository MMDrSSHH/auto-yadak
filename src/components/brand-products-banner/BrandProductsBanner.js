import Image from "next/image";
import React from "react";

function BrandProductsBanner({ imageUrl, alt }) {
  return (
    <div className="h-[220px] rounded-[20px] relative overflow-hidden">
      <Image src={imageUrl} alt={alt} fill />
    </div>
  );
}

export default BrandProductsBanner;
