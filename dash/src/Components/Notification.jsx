import React from "react";

export default function Notification({ title = "", data, isBg = false }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="py-2 px-1 font-semibold">{title}</div>
      {/* Items */}
      <div className="flex flex-col gap-2">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex gap-2 overflow-visible ${
              title !== "Notifications" ? "items-center" : ""
            } ${
              title == "Notifications" || title == "Activities"
                ? "h-[46px] p-1"
                : ""
            }`}
          >
            {/* Image */}
            <div
              className={`flex-shrink-0 w-6 h-6 ${
                isBg ? "bg-[#E5ECF6] rounded-lg" : ""
              } flex items-center justify-center`}
            >
              {!isBg ? (
                <img
                  src={item.icon}
                  className="rounded-full object-cover"
                  alt={`pic-${index + 1}`}
                />
              ) : (
                item.icon
              )}
            </div>
            <div className="flex-1">
              <div className="font-[400] text-[14px] leading-[20px] truncate">
                {item.title}
              </div>
              {item.time && (
                <div
                  className="text-[12px] leading-[18px] font-[400]"
                  style={{ color: "#1C1C1C66" }}
                >
                  {item.time}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
