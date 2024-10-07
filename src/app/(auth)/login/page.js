import { AutoYadakLogo, TagCrossOutline } from "@/components/icons";
import Link from "next/link";
import React from "react";

function LoginPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {/* Login section */}
      <div className="rounded-[24px] border border-primary-300 p-[32px] pb-[96px] w-[680px] bg-white">
        <div className="text-left">
          <Link href="/" className="text-[24px] text-error-500 inline-block">
            <TagCrossOutline />
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center text-secondary-500">
          <AutoYadakLogo className="text-[60px]" />
          <span className="text-[16px] font-extrabold">اتویدک</span>
        </div>

        <span className="block text-center text-text-900 text-[20px] font-bold mt-[24px]">
          ورود | ثبت‌نام
        </span>

        <p className="text-text-800 text-[12px] font-normal text-center mt-[32px]">
          لطفا شماره موبایل خود را وارد نمایید
        </p>

        <div className="flex justify-center mt-[24px]">
          <input className="border border-primary-300 rounded-[8px] px-[8px] py-[10px] w-[250px] outline-none" />
        </div>

        <div className="flex justify-center mt-[32px]">
          <button className="text-white text-[14px] font-bold py-[13px] bg-primary-600 rounded-[8px] w-[320px]">
            ورود
          </button>
        </div>

        <p className="text-center text-[10px] font-medium mt-[16px]">
          ورود شما به معنای پذیرش{" "}
          <Link href="#" className="text-primary-600">
            قوانین اتویدک
          </Link>{" "}
          می‌باشد
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
