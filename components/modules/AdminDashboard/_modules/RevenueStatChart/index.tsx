import React from "react";
import { CategoryScale, Chart as ChartJS, LinearScale, LineController, BarElement } from "chart.js";
import { Chart } from "react-chartjs-2";
import { dummyStat } from "../../../utils/dummy/dummyStat";

ChartJS.register([CategoryScale, LinearScale, LineController, BarElement]);

const RevenueStatChart = () => {
  return (
    <div className="w-full bg-white p-5 shadow-xl rounded-xl">
      <Chart
        type="bar"
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
          },
        }}
        data={{
          labels: dummyStat.duration,
          datasets: [
            {
              //  TODO: id: dummyStat.stat.revenue.id,   // commented for now cause chart dataset does not contain id ( can be removed latter)
              label: dummyStat.stat.revenue.name,
              data: dummyStat.stat.revenue.dataPerMonth,
              backgroundColor: "rgb(255, 69, 50)",
              borderRadius: 100,
            },
            {
              // TODO:  id: dummyStat.stat.netProfit.id, // commented for now cause chart dataset does not contain id ( can be removed latter)
              label: dummyStat.stat.netProfit.name,
              data: dummyStat.stat.netProfit.dataPerMonth,
              backgroundColor: "rgb(0, 208, 755)",
              borderRadius: 100,
            },
          ],
        }}
      />
    </div>
  );
};

export default RevenueStatChart;
