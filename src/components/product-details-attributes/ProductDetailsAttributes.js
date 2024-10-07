import React from "react";

function ProductDetailsAttributes({ attributes = [], className = "" }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="text-[14px] font-medium text-text-500">
        ویژگی‌های کالا:
      </span>

      {/* list */}
      <div className="flex flex-col gap-[16px] mt-[18px] text-[14px] text-text-400 font-normal">
        {attributes.map((attr) => (
          <div key={attr.label}>
            <span>{attr.label}</span>: <span>{attr.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetailsAttributes;
