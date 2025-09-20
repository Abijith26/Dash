import { FiSearch } from "react-icons/fi";

export default function SearchField() {
  return (
    <div className="flex items-center w-[160px] h-[28px] rounded-md bg-[#1C1C1C0D] px-2 py-1">
      {/* Search Icon */}
      <FiSearch className="text-[#1C1C1C33] w-4 h-4" />

      {/* Input */}
      <input
        type="text"
        placeholder="Search"
        className="ml-1 w-[96px] bg-transparent outline-none text-sm leading-[20px] text-[#1C1C1C] placeholder-[#1C1C1C33]"
      />

      {/* Shortcut hint */}
      <span className="text-[#1C1C1C33] text-[12px] font-medium">⌘ /</span>
    </div>
  );
}
