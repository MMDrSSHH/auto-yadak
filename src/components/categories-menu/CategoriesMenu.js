"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { MenuLinear } from "../icons";
import SubMenu from "./SubMenu";
import MenuItem from "./MenuItem";

// const menuData = [
//   {
//     id: 1,
//     label: "برند خودرو",
//     items: [],
//     href: null,
//   },
//   {
//     id: 2,
//     label: "فطعات بدنه",
//     items: [
//       {
//         id: 1,
//         label: "بدنه و شیشه",
//         items: [
//           {
//             id: 1,
//             label: "کاپوت",
//             items: null,
//             href: "#",
//           },
//           {
//             id: 2,
//             label: "درب صندوق عقب",
//             items: null,
//             href: "#",
//           },
//           {
//             id: 3,
//             label: "سپر",
//             items: null,
//             href: "#",
//           },
//           {
//             id: 4,
//             label: "درب ماشین",
//             items: null,
//             href: "#",
//           },
//           {
//             id: 5,
//             label: "گلگیر",
//             items: null,
//             href: "#",
//           },
//           {
//             id: 6,
//             label: "جلوپنجره",
//             items: null,
//             href: "#",
//           },
//           {
//             id: 7,
//             label: "آینه بغل",
//             items: null,
//             href: "#",
//           },
//           {
//             id: 8,
//             label: "رکاب ماشین",
//             items: null,
//             href: "#",
//           },
//           {
//             id: 9,
//             label: "شل گیر",
//             items: null,
//             href: "#",
//           },
//           {
//             id: 10,
//             label: "دستگیره ماشین",
//             items: null,
//             href: "#",
//           },
//           {
//             id: 11,
//             label: "گل پخش کن",
//             items: null,
//             href: "#",
//           },
//           {
//             id: 12,
//             label: "لولا ماشین",
//             items: null,
//             href: "#",
//           },
//           {
//             id: 13,
//             label: "زه ماشین",
//             items: null,
//             href: "#",
//           },
//           {
//             id: 14,
//             label: "شیشه ماشین",
//             items: null,
//             href: "#",
//           },
//           {
//             id: 15,
//             label: "قفل ماشین",
//             items: null,
//             href: "#",
//           },
//           {
//             id: 16,
//             label: "برف پاک کن",
//             items: null,
//             href: "#",
//           },
//           {
//             id: 17,
//             label: "نوار دور شیشه ماشین",
//             items: null,
//             href: "#",
//           },
//           {
//             id: 18,
//             label: "مجموعه شیشه شور",
//             items: null,
//             href: "#",
//           },
//           {
//             id: 19,
//             label: "نوار دور درب ماشین",
//             items: null,
//             href: "#",
//           },
//         ],
//         href: null,
//       },
//       {
//         id: 2,
//         label: "قطعات روشنایی",
//         items: [
//           {
//             id: 1,
//             label: "چراغ خودرو",
//             items: null,
//             href: "#",
//           },
//           {
//             id: 2,
//             label: "چراغ خطر سوم",
//             items: null,
//             href: "#",
//           },
//           {
//             id: 3,
//             label: "مه شکن",
//             items: null,
//             href: "#",
//           },
//           {
//             id: 4,
//             label: "پروژکتور خودرو",
//             items: null,
//             href: "#",
//           },
//           {
//             id: 5,
//             label: "دی لایت",
//             items: null,
//             href: "#",
//           },
//         ],
//         href: null,
//       },
//       {
//         id: 3,
//         label: "سایر قطعات",
//         items: [],
//         href: null,
//       },
//     ],
//     href: null,
//   },
//   {
//     id: 3,
//     label: "موتور و اگزوز",
//     items: [],
//     href: null,
//   },
//   {
//     id: 4,
//     label: "برفی و الکتریکی",
//     items: [],
//     href: null,
//   },
//   {
//     id: 5,
//     label: "رینگ و لاستیک",
//     items: null,
//     href: null,
//   },
//   {
//     id: 6,
//     label: "روغن و فیلتر",
//     items: [],
//     href: null,
//   },
//   {
//     id: 7,
//     label: "قطعات داخلی",
//     items: null,
//     href: null,
//   },
//   {
//     id: 8,
//     label: "انتقال قدرت",
//     items: [],
//     href: null,
//   },
//   {
//     id: 9,
//     label: "فرمان، جلوبندی و ترمز",
//     items: null,
//     href: null,
//   },
//   {
//     id: 10,
//     label: "لوازم جانبی و اسپورت",
//     items: [],
//     href: null,
//   },
//   {
//     id: 11,
//     label: "لوازم مصرفی خودرو",
//     items: [],
//     href: null,
//   },
// ];

const categoriesMenuContext = createContext(null);

export const useMenu = () => {
  const {
    isShowSubMenu,
    openSubMenu,
    closeSubMenu,
    closeMenu,
    activatedMenuId,
  } = useContext(categoriesMenuContext);

  return {
    isShowSubMenu,
    openSubMenu,
    closeSubMenu,
    closeMenu,
    activatedMenuId,
  };
};

function CategoriesMenu() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);
  const menuRef = useRef(null);
  // const subMenuRef = useRef(null);
  const triggerRef = useRef(null);
  const [subMenuContent, setSubMenuContent] = useState(null);
  const [activatedMenuId, setActivatedMenuId] = useState(null);

  const toggleMenu = () => {
    setIsShowMenu((prev) => !prev);
    setIsShowSubMenu(false);
  };

  const closeMenu = () => {
    setIsShowMenu(false);
    setIsShowSubMenu(false);
    setActivatedMenuId(null);
  };

  const openSubMenu = (content, menuId) => {
    setSubMenuContent(content);
    setActivatedMenuId(menuId);
    setIsShowSubMenu(true);
  };

  const closeSubMenu = () => {
    setIsShowSubMenu(false);
    setActivatedMenuId(null);
  };

  useEffect(() => {
    const clickOutsideHandler = (ev) => {
      if (menuRef && menuRef.current) {
        // clicked outside
        if (
          !menuRef.current.contains(ev.target) &&
          !triggerRef.current.contains(ev.target)
        ) {
          closeMenu();
        }
      }
    };

    document.addEventListener("click", clickOutsideHandler);

    return () => {
      document.removeEventListener("click", clickOutsideHandler);
    };
  }, []);

  return (
    <categoriesMenuContext.Provider
      value={{
        isShowSubMenu,
        openSubMenu,
        closeSubMenu,
        closeMenu,
        activatedMenuId,
      }}
    >
      <div className="relative">
        <button
          className="flex gap-[8px] text-text-600"
          ref={triggerRef}
          onClick={toggleMenu}
        >
          <MenuLinear className="text-[20px]" />
          <span className="text-[14px] font-bold">دسته‌بندی</span>
        </button>
        {/* Root menu */}
        {isShowMenu && (
          <div
            ref={menuRef}
            className={`absolute after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-transparent after:shadow-[-10px_0px_15px_-4px] after:shadow-[rgba(0,0,0,0.05)] after:z-20 p-[24px] bg-white top-full mt-[18px] z-20 w-[320px] `}
          >
            {/* SubMenues */}
            <div className="flex flex-col gap-[24px] relative z-30">
              <SubMenu isRoot label="برند خودرو" id="brand">
                <div>برند خودرو</div>
              </SubMenu>
              <SubMenu isRoot label="قطعات بدنه" id="body-parts">
                <SubMenu label="بدنه و شیشه">
                  <MenuItem href="#" label="کاپوت" />
                  <MenuItem href="#" label="درب صندوق عقب" />
                  <MenuItem href="#" label="سپر" />
                  <MenuItem href="#" label="درب ماشین" />
                  <MenuItem href="#" label="گلگیر" />
                  <MenuItem href="#" label="جلوپنجره" />
                  <MenuItem href="#" label="آینه بغل" />
                  <MenuItem href="#" label="رکاب ماشین" />
                  <MenuItem href="#" label="شل گیر" />
                  <MenuItem href="#" label="دستگیره ماشین" />
                  <MenuItem href="#" label="گل پخش کن" />
                  <MenuItem href="#" label="لولا ماشین" />
                  <MenuItem href="#" label="زه ماشین" />
                  <MenuItem href="#" label="شیشه ماشین" />
                  <MenuItem href="#" label="قفل ماشین" />
                  <MenuItem href="#" label="برف پاک کن" />
                  <MenuItem href="#" label="نوار دور شیشه ماشین" />
                  <MenuItem href="#" label="مجموعه شیشه شور" />
                  <MenuItem href="#" label="نوار دور درب ماشین" />
                </SubMenu>
                <SubMenu label="قطعات روشنایی">
                  <MenuItem href="#" label="چراغ خودرو" />
                  <MenuItem href="#" label="چراغ خطر سوم" />
                  <MenuItem href="#" label="مه شکن" />
                  <MenuItem href="#" label="پروژکتور خودرو" />
                  <MenuItem href="#" label="دی لایت" />
                </SubMenu>
                <SubMenu label="سایر قطعات" />
              </SubMenu>
              <SubMenu isRoot label="موتور و اگزوز خودرو" id="enging-exhustion">
                موتور و اگزوز خودرو
              </SubMenu>
              <SubMenu isRoot label="برقی و الکتریکی" id="electronics">
                برقی و الکتریکی
              </SubMenu>
              <SubMenu isRoot label="رینگ و لاستیک" id="tire-ring">
                رینگ و لاستیک
              </SubMenu>
              <SubMenu isRoot label="روغن و فیلتر" id="oil-filter">
                روغن و فیلتر
              </SubMenu>
              <SubMenu isRoot label="قطعات داخلی" id="internal-parts">
                قطعات داخلی
              </SubMenu>
              <SubMenu isRoot label="انتقال قدرت" id="transmission">
                انتقال قدرت
              </SubMenu>
              <SubMenu isRoot label="فرمان، جلوبندی و ترمز" id="steering">
                فرمان، جلوبندی و ترمز
              </SubMenu>
              <SubMenu isRoot label="لوازم جانبی و اسپورت" id="sport-parts">
                لوازم جانبی و اسپورت
              </SubMenu>
              <SubMenu isRoot label="لوازم مصرفی خودرو" id="something">
                لوازم مصرفی خودرو
              </SubMenu>
            </div>

            {/* Second menu */}
            {isShowSubMenu && (
              <div className="absolute p-[24px] flex flex-col justify-evenly gap-x-[16px] gap-y-[16px] flex-wrap bg-white top-0 right-full z-10 max-h-[calc(100vh-200px)] w-max shadow-[-10px_0px_15px_-4px] shadow-[rgba(0,0,0,0.05)]">
                {subMenuContent}
              </div>
            )}
          </div>
        )}
      </div>
    </categoriesMenuContext.Provider>
  );
}

export default CategoriesMenu;
