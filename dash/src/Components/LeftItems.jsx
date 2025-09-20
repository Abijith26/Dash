import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

export default function LeftItems() {
  return (
    <div className="flex items-center gap-2">
      <MdOutlineSpaceDashboard className="text-[#1C1C1C] w-5 h-5" />
      <FaRegStar className="text-[#1C1C1C] w-5 h-5" />
      <div className="flex items-center gap-2 text-[14px] font-[400] leading-[20px]">
        <span className=" text-[#1C1C1C66]">Dashboard</span>
        <span className="text-[#1C1C1C66]">/</span>
        <span className="text#1C1C1C]">Default</span>
      </div>
    </div>
  );
}
