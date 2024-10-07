import React from "react";
import { SearchOutline } from "../icons";

function NavBarSearchBar() {
  return (
    <div className="w-[580px] h-[44px] bg-[#EDEDED] flex items-center rounded-[8px]">
      <button className="h-full px-[12px] text-[24px]">
        <SearchOutline className="text-[#868686]" />
      </button>
      <input
        className="bg-transparent text-[12px] font-normal w-full h-full outline-none placeholder:text-[#ACACAC]"
        placeholder="نام کالا، قطعه یابرند را جستجو کنید"
      />
    </div>
  );
}

export default NavBarSearchBar;
