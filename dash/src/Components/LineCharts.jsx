import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";

const revenueData = [
  { month: "Jan", currentWeek: 12000000, previousWeek: 8000000 },
  { month: "Feb", currentWeek: 8000000, previousWeek: 15000000 },
  { month: "Mar", currentWeek: 6000000, previousWeek: 18000000 },
  { month: "Apr", currentWeek: 14000000, previousWeek: 12000000 },
  { month: "May", currentWeek: 18000000, previousWeek: 10000000 },
  { month: "Jun", currentWeek: 22000000, previousWeek: 20000000 },
];

// Format numbers to display as 10M, 20M, etc.
const formatYAxisLabel = (value) => {
  if (value >= 1000000) {
    return `${value / 1000000}M`;
  }
  return value.toString();
};

// Custom legend content
const CustomLegend = () => (
  <div className="flex items-center gap-6 mb-4">
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-black rounded-full"></div>
      <span className="text-[14px] leading-[20px] text-gray-700">
        Current Week
      </span>
      <span className="text-[14px] leading-[20px] font-semibold text-gray-900">
        $58,211
      </span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
      <span className="text-[14px] leading-[20px] text-gray-700">
        Previous Week
      </span>
      <span className="text-[14px] leading-[20px] font-semibold text-gray-900">
        $68,768
      </span>
    </div>
  </div>
);

function LineChartPlot() {
  return (
    <div className="bg-gray-50 p-4 md:p-6 flex flex-col justify-center">
      {/* Header */}
      <div className=" flex flex-col md:flex-row md:items-cener gap-4">
        <h2 className="text-[14px] leading-[20px] font-semibold text-[#1C1C1C] mb-4">
          Revenue
        </h2>
        <span className="hidden h-5 w-[5px] text-[#1C1C1C33] md:block">
          {" "}
          |{" "}
        </span>
        <CustomLegend />
      </div>
      <div className="bg-white rounded-lg w-full max-w-4xl">
        {/* Chart Container */}
        <div className="h-[232px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={revenueData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                dy={10}
              />
              <YAxis
                tickFormatter={formatYAxisLabel}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                domain={[0, 30000000]}
                ticks={[0, 10000000, 20000000, 30000000]}
              />

              {/* Horizontal grid lines */}
              <CartesianGrid
                strokeDasharray="0 0" // dashed lines (change to "0" for solid)
                vertical={false} // hide vertical lines
                stroke="#E5E7EB" // Tailwind gray-200
              />

              {/* Previous Week Line - Solid Gray */}
              <Line
                type="monotone"
                dataKey="previousWeek"
                stroke="#9CA3AF"
                strokeWidth={3}
                dot={false}
                activeDot={false}
              />

              {/* Current Week Line - Solid Black */}
              <Line
                type="monotone"
                dataKey="currentWeek"
                stroke="#000000"
                strokeWidth={3}
                dot={false}
                activeDot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default LineChartPlot;
