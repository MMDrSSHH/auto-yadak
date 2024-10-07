import React from "react";
import Container from "../layout/Container";
import Link from "next/link";

function Header() {
  return (
    <div className="h-[48px] bg-secondary-500">
      <Container className="flex justify-between items-center h-full text-[#EDEDED]">
        {/* Right side */}
        <div className="flex gap-[34px] text-[12px] font-medium">
          <Link href="#">درباره ما</Link>
          <Link href="#">تماس با ما</Link>
        </div>

        {/* Left side */}
        <div>
          <span className="text-[12px] font-bold">پشتیبانی:0215500032</span>
        </div>
      </Container>
    </div>
  );
}

export default Header;
