import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { LuTimerReset } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GrNotification } from "react-icons/gr";

export default function RightItems() {
  return (
    <div className="h-7 flex items-center gap-2">
      <IoSunnyOutline className="text-[#1C1C1C] w-4 h-4 hover:cursor-pointer" />
      <LuTimerReset className="text-[#1C1C1C] w-4 h-4 hover:cursor-pointer" />
      <GrNotification className="text-[#1C1C1C] w-3.5 h-3.5 hover:cursor-pointer" />
      <MdOutlineSpaceDashboard className="text-[#1C1C1C] w-4 h-4 hover:cursor-pointer" />
    </div>
  );
}
