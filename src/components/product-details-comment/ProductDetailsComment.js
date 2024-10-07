import React from "react";
import RatingStars from "./RatingStars";
import { DislikeOutline, LikeOutline } from "../icons";

function ProductDetailsComment({
  userName = "",
  date,
  rate,
  title = "",
  comment = "",
  likes = 0,
  dislikes = 0,
}) {
  return (
    <div className="flex flex-col gap-[16px]">
      {/* Header */}
      <div className="flex">
        {/* Username */}
        <span className="text-text-400 text-[12px] font-medium">
          {userName}
        </span>
        <span className="text-text-400 text-[12px] font-normal mr-[24px]">
          {date}
        </span>
        <RatingStars rate={rate} className="mr-[16px]" />
      </div>

      {/* Body */}
      <div className="flex flex-col gap-[20px]">
        {/* Title */}
        <span className="text-text-500 text-[16px] font-bold">{title}</span>

        {/* Comment body and reactions */}
        <div className="flex gap-[20px] justify-between items-end">
          <p className="text-text-400 font-normal text-[14px]">{comment}</p>

          {/* Reactions */}
          <div className="flex gap-[16px]">
            {/* Dislikes */}
            <div className="flex flex-col items-center">
              <span className="text-[14px] font-normal">{dislikes}</span>
              <DislikeOutline className="text-[20px]" />
            </div>

            {/* Likes */}
            <div className="flex flex-col items-center">
              <span className="text-[14px] font-normal">{likes}</span>
              <LikeOutline className="text-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsComment;
