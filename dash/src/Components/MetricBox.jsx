import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

export default function MetricBox({ name, value, difference, color }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`!min-w-[200px] p-6 rounded-[16px] shadow`}
    >
      <h3 className="text-[14px] leading-[20px] font-semibold text-[#1C1C1C]">
        {name}
      </h3>
      <div className="flex items-center gap-7">
        <p className="text-2xl leading-[36px] font-semibold text-[#1C1C1C]">
          {value}
        </p>
        <div className="flex items-center gap-1">
          <p className={`text-[12px] leading-[18px] text-[#1C1C1C]`}>
            {difference}
          </p>
          {difference.startsWith("+") ? (
            <FaArrowTrendUp className="text-[#1C1C1C] w-4 h-4" />
          ) : (
            <FaArrowTrendDown className="text-[#1C1C1C] w-4 h-4" />
          )}
        </div>
      </div>
    </div>
  );
}
