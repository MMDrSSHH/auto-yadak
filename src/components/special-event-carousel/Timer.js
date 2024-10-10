"use client";
import React from "react";
import { useTimer } from "react-timer-hook";

function Timer({ expiryTimestamp }) {
  const { hours, minutes, seconds } = useTimer({ expiryTimestamp });
  return (
    <div dir="ltr" className="flex gap-[4px] text-[24px] text-white">
      <TimerItem value={hours} /> : <TimerItem value={minutes} /> :{" "}
      <TimerItem value={seconds} />
    </div>
  );
}

function TimerItem({ value }) {
  return (
    <div className="bg-white text-neutral-900 text-[16px] font-bold w-[36px] aspect-square rounded-[8px] flex justify-center items-center">
      {value > 9 ? value : "0" + value}
    </div>
  );
}

export default Timer;
