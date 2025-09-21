import { FiSearch } from "react-icons/fi";

export default function OrderSearch({ handleSearch }) {
  return (
    <div className="flex items-center w-[160px] h-[28px] rounded-md bg-white px-2 py-1 border border-[#1C1C1C1A] border-radius-[8px]">
      {/* Search Icon */}
      <FiSearch className="text-[#1C1C1C33] w-4 h-4" />

      {/* Input */}
      <input
        type="text"
        placeholder="Search"
        className="ml-1 w-[96px] bg-transparent outline-none text-sm leading-[20px] text-[#1C1C1C] placeholder-[#1C1C1C33]"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
