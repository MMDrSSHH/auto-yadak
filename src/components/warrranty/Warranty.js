import React from "react";

function Warranty({ label, icon }) {
  return (
    <div className="bg-primary-100 text-primary-600 text-[12px] font-medium p-[8px] rounded-[16px] flex gap-[4px]">
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}

export default Warranty;
