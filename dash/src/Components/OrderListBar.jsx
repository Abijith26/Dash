import React from "react";
import Options from "./Options";
import OrderSearch from "./OrderSearch";

export default function OrderListBar({ handleSearch, handleSort }) {
  return (
    <div className="h-[44px] p-2 bg-[#F7F9FB] flex items-center justify-between">
      <Options handleSort={handleSort} />
      <OrderSearch handleSearch={handleSearch} />
    </div>
  );
}
