import Image from "next/image";
import React from "react";

function ProductDetailsTitle({ title = "", imageUrl = null, className = "" }) {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <h2 className="text-text-950 text-[16px] font-bold">{title}</h2>
      {imageUrl && <Image width={32} height={32} src={imageUrl} alt={title} />}
    </div>
  );
}

export default ProductDetailsTitle;
