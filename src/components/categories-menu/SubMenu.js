import React, { useContext, useState } from "react";
import { ArrowLeftOutline } from "../icons";
import { useMenu } from "./CategoriesMenu";

function SubMenu({ children, isRoot = false, label = "" }) {
  const { openSubMenu } = useMenu();

  const openSubMenuHandler = () => {
    openSubMenu(children);
  };

  if (!isRoot) {
    return (
      <>
        <span className="inline-flex items-center text-[16px] font-bold text-black before:w-[1px] before:h-[20px] before:bg-primary-600 before:ml-[8px]">
          {label}
          <ArrowLeftOutline className="text-[20px] mr-[20px]" />
        </span>
        {children}
      </>
    );
  }

  return (
    <>
      <button
        onClick={openSubMenuHandler}
        className={`inline-flex items-center text-[16px] font-bold text-black`}
      >
        {label}
        <ArrowLeftOutline className="text-[20px] mr-[20px]" />
      </button>
    </>
  );
}

export default SubMenu;
