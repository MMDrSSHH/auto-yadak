import Image from "next/image";
import React from "react";
import {
  AddOutline,
  ShieldTickOutline,
  ShopOutline,
  TrashOutline,
} from "../icons";

function ShoppingCartItemCard({
  imageUrl,
  itemTitle,
  warranty,
  price,
  discountPrice,
  quantity,
}) {
  return (
    <div className="border-[0.5px] border-[#DBDBDB] rounded-[16px] bg-white p-[16px_16px_16px_32px] flex justify-between">
      {/* Item details */}
      <div className="flex gap-[12px]">
        {/* Item image */}
        <Image width={106} height={106} src={imageUrl} alt={itemTitle} />

        {/* Details */}
        <div className="flex flex-col gap-[12px]">
          {/* Item title */}
          <span className="text-black text-[14px] font-bold">{itemTitle}</span>
          {/* Item warranty */}
          <span className="text-text-400 text-[12px] font-light flex gap-[4px] items-center">
            <ShieldTickOutline className="text-[16px]" /> {warranty}
          </span>
          {/* auto-yadak */}
          <span className="text-text-400 text-[12px] font-light flex gap-[4px] items-center">
            <ShopOutline className="text-[16px]" /> اتویدک
          </span>
        </div>
      </div>

      {/* Item actions and price */}
      <div className="flex flex-col justify-between items-end">
        {/* Price */}
        <div className="flex flex-col gap-[4px] items-end">
          {discountPrice ? (
            <>
              <span className="text-[#929292] text-[12px] font-medium line-through">
                {price}تومان
              </span>
              <span className="text-[16px] font-bold text-black">
                {discountPrice}تومان
              </span>
            </>
          ) : (
            <span className="text-[16px] font-bold text-black">
              {price}تومان
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-[12px] items-center">
          {/* Add */}
          <button className="text-[16px] text-text-500">
            <AddOutline />
          </button>

          {/* Quantity */}
          <span className="text-black text-[12px] font-bold">{quantity}</span>

          {/* Remove */}
          <button className="text-[16px] text-error-500">
            <TrashOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartItemCard;
