import Link from "next/link";
import React from "react";

function MenuSectionHeader({ title, linkLabel, className = "" }) {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <h5 className="text-black text-[28px] font-medium">{title}</h5>
      <Link
        href="#"
        className="outline-none border-none bg-transparent text-black text-[14px] font-medium"
      >
        {linkLabel}
      </Link>
    </div>
  );
}

export default MenuSectionHeader;
