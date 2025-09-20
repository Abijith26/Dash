import React from "react";
import Notification from "../Components/Notification";

import { PiBugBeetle } from "react-icons/pi";
import { PiUserLight } from "react-icons/pi";
import { HiOutlineSignal } from "react-icons/hi2";

const notificationData = [
  {
    icon: <PiBugBeetle className="text-[#1C1C1C] w-[13px] h-[13.5px]" />,
    title: "You have a bug that needs to be fixed.",
    time: "Just now",
  },
  {
    icon: <PiUserLight className="text-[#1C1C1C] w-[13px] h-[13.5px]" />,
    title: "New user registered",
    time: "59 minutes ago",
  },
  {
    icon: <PiBugBeetle className="text-[#1C1C1C] w-[13px] h-[13.5px]" />,
    title: "You have a bug that needs to be fixed.",
    time: "12 hours ago",
  },
  {
    icon: <HiOutlineSignal className="text-[#1C1C1C] w-[13px] h-[13.5px]" />,
    title: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
  },
];

const activitiesData = [
  {
    icon: "/userPhotos/cartoon-pic-1.svg",
    title: "You have a bug that needs to be fixed.",
    time: "Just now",
  },
  {
    icon: "/userPhotos/human-pic-1.jpg",
    title: "Released a new version",
    time: "59 minutes ago",
  },
  {
    icon: "/userPhotos/cartoon-pic-2.svg",
    title: "Submitted a bug",
    time: "12 hours ago",
  },
  {
    icon: "/userPhotos/human-pic-2.jpg",
    title: "Modified A data in Page X",
    time: "Today, 11:59 AM",
  },
  {
    icon: "/userPhotos/human-pic-3.jpg",
    title: "Deleted a page in Project X",
    time: "Feb 2, 2023",
  },
];

const contactsData = [
  {
    icon: "/userPhotos/Natali-Craig-Pic.svg",
    title: "Natali Craig",
  },
  {
    icon: "/userPhotos/Drew-Cano-Pic.svg",
    title: "Drew Cano",
  },
  {
    icon: "/userPhotos/Orlando-Diggs-Pic.svg",
    title: "Orlando Diggs",
  },
  {
    icon: "/userPhotos/Andi-Lane-Pic.svg",
    title: "Andi Lane",
  },
  {
    icon: "/userPhotos/Kate-Morrison-Pic.svg",
    title: "Kate Morrison",
  },
  {
    icon: "/userPhotos/Koray-Okumus-Pic.svg",
    title: "Koray Okumus",
  },
];

export default function NotificationPanel() {
  return (
    <div className="p-5">
      <Notification title="Notifications" data={notificationData} isBg={true} />
      <Notification title="Activities" data={activitiesData} />
      <Notification title="Contacts" data={contactsData} />
    </div>
  );
}
