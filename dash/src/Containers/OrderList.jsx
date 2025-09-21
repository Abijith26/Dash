import React, { useEffect, useState } from "react";
import OrderListBar from "../Components/OrderListBar";
import OrdersTable from "../Components/OrdersTable";

const orderData = [
  {
    id: "#CM9801",
    user: { name: "Natali Croig", avatar: "/api/placeholder/32/32" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: { name: "Kate Morrison", avatar: "/api/placeholder/32/32" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "/api/placeholder/32/32" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "/api/placeholder/32/32" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "/api/placeholder/32/32" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9806",
    user: { name: "Natali Croig", avatar: "/api/placeholder/32/32" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9807",
    user: { name: "Kate Morrison", avatar: "/api/placeholder/32/32" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9808",
    user: { name: "Drew Cano", avatar: "/api/placeholder/32/32" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
];

export default function OrderList() {
  const [dummyData, setDummyData] = useState(orderData);
  const [searchName, setSearchName] = useState(null);
  const [isSorting, setIsSorting] = useState(false);
  useEffect(() => {
    if (!searchName) {
      setDummyData(orderData);
      return;
    }
    setDummyData((prevData) =>
      prevData.filter((item) =>
        item.user.name.toLowerCase().includes(searchName.toLowerCase())
      )
    );
  }, [searchName]);

  useEffect(() => {
    if (isSorting) {
      setDummyData((prevData) =>
        [...prevData].sort((a, b) => a.user.name.localeCompare(b.user.name))
      );
    } else {
      setDummyData(orderData);
    }
  }, [isSorting]);

  const handleSearch = (name) => {
    setSearchName(name);
  };

  const handleSort = () => {
    setIsSorting(!isSorting);
  };

  return (
    <section className="p-7 flex flex-col gap-4">
      <span className="text-[#1C1C1C] font-semibold text-[14px] leading-[20px]">
        Order List
      </span>
      <OrderListBar handleSearch={handleSearch} handleSort={handleSort} />
      <OrdersTable
        searchName={searchName}
        isSorting={isSorting}
        data={dummyData}
      />
    </section>
  );
}
