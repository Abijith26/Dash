import LineChartPlot from "./Components/LineCharts";
import PieChartPlot from "./Components/PieChartPlot";

import TableData from "./Components/TableData";
import DashData from "./Containers/DashData";
import GeneralMetrics from "./Containers/GeneralMetrics";
import NotificationPanel from "./Containers/NotificationPanel";
import SideBar from "./Containers/SideBar";
import TopBar from "./Containers/TopBar";

function App() {
  return (
    <>
      {/* <span className="text-amber-700 text-4xl">Hi Dev!</span> */}
      {/* <NotificationPanel /> */}
      {/* <SideBar /> */}
      {/* <TopBar /> */}
      {/* <DashData /> */}
      {/* {<TableData />} */}
      {/* {<PieChartPlot />} */}
      {/* <LineChartPlot /> */}
      {/* <GeneralMetrics /> */}
      <div className="flex justify-center">
        <DashData />
      </div>
    </>
  );
}

export default App;
