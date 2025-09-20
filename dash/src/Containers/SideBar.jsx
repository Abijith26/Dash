import React from "react";
// Icons
// Dashboard Icons
import { PiChartPieDuotone } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BsFolder } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";
// Page Icons
import { ImProfile } from "react-icons/im";
import { FaRegAddressCard } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { PiChatsCircle } from "react-icons/pi";
// Other Icons
import SideBarOptions from "../Components/SideBarOptions";

const options = ["Overview", "Projects"];

const mainOptions = [
  {
    title: "Dashboards",
    options: [
      {
        name: "Default",
        icon: <PiChartPieDuotone color="#1C1C1C" />,
      },
      {
        name: "eCommerce",
        icon: <HiOutlineShoppingBag color="#1C1C1C" />,
      },
      {
        name: "Projects",
        icon: <BsFolder color="#1C1C1C" />,
      },
      {
        name: "Online Courses",
        icon: <IoBookOutline color="#1C1C1C" />,
      },
    ],
  },
  {
    title: "Pages",
    options: [
      {
        name: "User Profile",
        icon: <ImProfile color="#1C1C1C" />,
        items: ["Overview", "Projects", "Campaigns", "Documents", "Followers"],
      },
      {
        name: "Account",
        icon: <FaRegAddressCard color="#1C1C1C" />,
      },
      {
        name: "Corporate",
        icon: <HiOutlineUserGroup color="#1C1C1C" />,
      },
      {
        name: "Blog",
        icon: <IoBookOutline color="#1C1C1C" />,
      },
      {
        name: "Social",
        icon: <PiChatsCircle color="#1C1C1C" />,
      },
    ],
  },
];

export default function SideBar() {
  return (
    <div className="py-5 px-4 flex flex-col gap-4">
      {/* User Name and Photo */}
      <div className="flex items-center gap-2">
        <img
          src="/Sidebar-User.png"
          alt="user-photo"
          className="w-6 h-6 rounded-full"
        />
        <span className="text-[14px] font-[400] leading-[20px] text-[#1C1C1C]">
          ByeWind
        </span>
      </div>

      {/* General Options */}
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 font-[400] text-[14px] leading-[20px]">
          {/* Option-1 */}
          <span className="py-1 px-2 text-[#1C1C1C66]">Favorites</span>
          <span className="py-1 px-2 text-[#1C1C1C33]">Recently</span>
        </div>
        {/* General Option Points */}
        <ul className="list-disc list-inside flex flex-col gap-1">
          {options.map((item, index) => (
            <li
              key={index}
              className="py-1 px-2 text-[14px] leading-[20px] font-[400] marker:text-[#1C1C1C33]"
            >
              <span className="text-[#1C1C1C]">{item}</span>
            </li>
          ))}
        </ul>
        {/* Main Options */}
        {mainOptions.map((item, index) => (
          <SideBarOptions key={index} option={item} />
        ))}
      </div>
    </div>
  );
}
