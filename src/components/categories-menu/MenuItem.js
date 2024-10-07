import Link from "next/link";
import React from "react";
import { useMenu } from "./CategoriesMenu";

function MenuItem({ href = "", label = "" }) {
  const { closeMenu } = useMenu();
  return (
    <Link
      href={href}
      onClick={closeMenu}
      className="text-[16px] font-medium text-[#3C3C3C] mr-[8px] block"
    >
      {label}
    </Link>
  );
}

export default MenuItem;
