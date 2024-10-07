"use client";
import React from "react";

function Timer() {
  return (
    <div className="flex gap-[4px] text-[24px] text-white">
      <TimerItem value={20} /> : <TimerItem value={10} /> :{" "}
      <TimerItem value={18} />
    </div>
  );
}

function TimerItem({ value }) {
  return (
    <div className="bg-white text-neutral-900 text-[16px] font-bold w-[36px] aspect-square rounded-[8px] flex justify-center items-center">
      {value}
    </div>
  );
}

export default Timer;
