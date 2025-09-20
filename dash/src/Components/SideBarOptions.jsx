import React from "react";
import { GoChevronRight } from "react-icons/go";

export default function SideBarOptions({ option }) {
  const [openIndex, setOpenIndex] = React.useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="flex flex-col gap-1">
      <span className="py-1 px-3 font-[400] text-[14px] leading-[20px] text-[#1C1C1C66]">
        {option.title}
      </span>
      {option.options.map((item, index) => (
        <div className="flex flex-col gap-1" key={index}>
          <div
            key={index}
            className="py-1 px-2 flex items-center gap-1 text-[#1C1C1C] hover:bg-[#1C1C1C0A] rounded-md hover:cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <GoChevronRight
              className={`text-[#1C1C1C33] transition-all ${
                openIndex === index ? "rotate-90 " : ""
              }`}
            />
            <div className="flex items-center gap-2  font-[400] text-[14px] leading-[20px]  ">
              {item.icon}
              <span>{item.name}</span>
            </div>
          </div>
          {openIndex === index && item.items && (
            <div className="flex flex-col gap-2">
              {item.items.map((subItem, subIndex) => (
                <span
                  key={subIndex}
                  className="py-1 px-2 text-[14px] leading-[20px] font-[400] text-[#1C1C1C] hover:bg-[#1C1C1C0A] rounded-md ml-[42px]"
                >
                  {subItem}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
