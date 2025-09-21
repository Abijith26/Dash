import React from "react";
import MetricBox from "../Components/MetricBox";

const data = [
  {
    id: 1,
    name: "Customers",
    value: "3,781",
    difference: "+11.01%",
    color: "#E3F5FF",
  },
  {
    id: 2,
    name: "Orders",
    value: "1,219",
    difference: "-0.02%",
    color: "#F7F9FB",
  },
  {
    id: 3,
    name: "Revenue",
    value: "$695",
    difference: "+15.03%",
    color: "#F7F9FB",
  },
  {
    id: 4,
    name: "Growth",
    value: "30.1%",
    difference: "+6.08%",
    color: "#E5ECF6",
  },
];

export default function GeneralMetrics() {
  return (
    <div className="grid gap-7 grid-cols-2">
      {data.map((metric) => (
        <MetricBox
          key={metric.id}
          name={metric.name}
          value={metric.value}
          difference={metric.difference}
          color={metric.color}
        />
      ))}
    </div>
  );
}
