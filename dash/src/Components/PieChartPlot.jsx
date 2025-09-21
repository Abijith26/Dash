import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const salesData = [
  { name: "Direct", value: 300.56, color: "#1f2937" },
  { name: "Affiliate", value: 135.18, color: "#a7f3d0" },
  { name: "Sponsored", value: 154.02, color: "#93c5fd" },
  { name: "E-mail", value: 48.96, color: "#bfdbfe" },
];

const totalSales = salesData.reduce((sum, item) => sum + item.value, 0);
const directPercentage = ((salesData[0].value / totalSales) * 100).toFixed(1);

function PieChartPlot() {
  return (
    <div className=" bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full">
        {/* Header */}
        <h2 className="text-[14px] leading-[20px] font-semibold text-[#1C1C1C] mb-4">
          Total Sales
        </h2>

        {/* Chart Container */}
        <div className="mb-4">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={salesData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                startAngle={90}
                endAngle={450}
                paddingAngle={2}
                dataKey="value"
              >
                {salesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center Percentage */}
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm font-medium">
              {directPercentage}%
            </div>
          </div> */}
        </div>

        {/* Legend */}
        <div className="space-y-3">
          {salesData.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-700">{item.name}</span>
              </div>
              <span className="text-sm font-medium text-gray-900">
                ${item.value.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PieChartPlot;
