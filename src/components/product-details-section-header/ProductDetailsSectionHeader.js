import React from "react";

function ProductDetailsSectionHeader({
  title = "",
  action = null,
  className = "",
}) {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <span className="text-black text-[28px] font-medium">{title}</span>
      {action}
    </div>
  );
}

export default ProductDetailsSectionHeader;
