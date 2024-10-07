import Link from "next/link";
import React from "react";

function NavItem({ href = "", children }) {
  return (
    <Link href={href} className="text-text-400 font-medium text-[12px]">
      {children}
    </Link>
  );
}

export default NavItem;
