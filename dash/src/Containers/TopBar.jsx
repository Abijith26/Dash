import React from "react";
import LeftItems from "../Components/LeftItems";
import SearchField from "../Components/SearchField";
import RightItems from "../Components/RightItems";

export default function TopBar() {
  return (
    <div className="py-5 px-7 flex justify-between items-center">
      <LeftItems />
      <div className="flex gap-5 items-center">
        <SearchField />
        <RightItems />
      </div>
    </div>
  );
}
