import React from "react";

function ServiceCard({ icon, title }) {
  return (
    <div className="rounded-[16px] border-[0.5px] border-secondary-400 py-[40px] flex flex-col h-full items-center gap-[58px] px-[48px]">
      <span className="text-primary-600 text-[58px]">{icon}</span>
      <span className="text-primary-800 text-center font-bold text-[16px] leading-7">{title}</span>
    </div>
  );
}

export default ServiceCard;
