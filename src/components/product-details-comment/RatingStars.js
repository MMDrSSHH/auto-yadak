import React from "react";
import { RateStarFill, RateStarOutline } from "../icons";

function RatingStars({ rate = 1, className = "" }) {
  return (
    <div className={`text-[18px] flex gap-[4px] ${className}`}>
      {[1, 2, 3, 4, 5].map((num) =>
        num <= rate ? (
          <RateStarFill className="text-[#F8AC08]" key={num} />
        ) : (
          <RateStarOutline className="text-text-300" key={num} />
        )
      )}
    </div>
  );
}

export default RatingStars;
