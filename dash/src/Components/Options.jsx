import React from "react";
import { IoIosAdd } from "react-icons/io";
import { BsFilter } from "react-icons/bs";
import { BiSortAlt2 } from "react-icons/bi";

export default function Options({ handleSort }) {
  return (
    <div className="flex items-center gap-3">
      <IoIosAdd className="text-[#1C1C1C] w-4 h-4 hover:cursor-pointer hover:bg-gray-300 hover:rounded-sm" />
      <BsFilter className="text-[#1C1C1C] w-4 h-4 hover:cursor-pointer hover:bg-gray-300 hover:rounded-sm" />
      <BiSortAlt2
        className="text-[#1C1C1C] w-4 h-4 hover:cursor-pointer hover:bg-gray-300 hover:rounded-sm"
        onClick={handleSort}
      />
    </div>
  );
}
