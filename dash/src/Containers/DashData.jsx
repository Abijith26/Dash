import React from "react";
import EBarChart from "../Components/EBarChart";
import GeneralMetrics from "./GeneralMetrics";
import LineChartPlot from "../Components/LineCharts";
import PieChartPlot from "../Components/PieChartPlot";
import TableData from "../Components/TableData";

export default function DashData() {
  return (
    <div className="flex flex-wrap w-[75%] gap-7">
      <GeneralMetrics />
      <div className="p-4 bg-white rounded-lg shadow flex flex-col gap-4 w-[432px] h-[252px]">
        <h2 className="text-[14px] leading-[20px] font-semibold text-[#1C1C1C]">
          Projections vs Actuals
        </h2>
        {/* <div style={{ width: 432, height: 350 }}> */}
        <EBarChart />
        {/* </div> */}
      </div>
      <div className="w-[662px]">
        <LineChartPlot />
      </div>
      <div className="w-[272px] h-[344px]">
        <PieChartPlot />
      </div>
      <TableData />
      {/* <div className="w-[272px] h-[344px]">
        <PieChartPlot />
      </div> */}
    </div>
  );
}
