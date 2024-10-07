import React from "react";
import Container from "../layout/Container";
import Link from "next/link";
import NavBarSearchBar from "../searchbar/NavBarSearchBar";
import { AutoYadakLogo, LoginOutline, ShoppingCartOutline } from "../icons";
import CategoriesMenu from "../categories-menu/CategoriesMenu";
import NavItem from "./NavItem";

function Navbar() {
  return (
    <div className="bg-white border-b-[0.5px] border-[#CACACA]">
      <Container>
        {/* Top section */}
        <div className="flex justify-between items-center py-[20px]">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-[3px] text-secondary-500"
          >
            {/* Logo placeholder */}
            {/* <div className="w-[48px] h-[48px] rounded-full bg-slate-400" /> */}
            <AutoYadakLogo className="text-[48px]" />
            <h1 className="text-[12px] font-black">اتویدک</h1>
          </Link>

          {/* Search bar */}
          <NavBarSearchBar />

          {/* Profile */}
          <div className="flex gap-[12px]">
            <Link
              href="/login"
              className="px-[26px] border-[0.5px] border-primary-500 text-primary-500 rounded-[8px] text-[16px] font-medium flex items-center gap-[12px]"
            >
              <LoginOutline className="text-[24px] rotate-180" />
              <span>ثبت‌نام/ ورود</span>
            </Link>

            <Link
              href="/shopping-cart"
              className="text-[#868686] text-[24px] p-[10px]"
            >
              <ShoppingCartOutline />
            </Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-[18px] flex items-center gap-[40px]">
          <CategoriesMenu />
          <NavItem>خرید همکار</NavItem>
          <NavItem>وبلاگ</NavItem>
          <NavItem>درباره‌ما</NavItem>
          <NavItem>تماس با ما</NavItem>
          <NavItem>همکاری در فروش</NavItem>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
