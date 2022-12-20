// import React from "react";
// import Chart from "chart.js/auto";
// import { Bar } from "react-chartjs-2";
// import { dummyStat } from "../../../utils/dummy/dummyStat";

// const RevenueStatChart = () => {
//   return (
//     <div className="w-full bg-white p-5 shadow-xl rounded-xl">
//       <Bar
//         type="bar"
//         height={400}
//         width={600}
//         options={{
//           maintainAspectRatio: false,
//           scales: {
//             x: {
//               grid: {
//                 display: false,
//               },
//             },
//           },
//         }}
//         data={{
//           labels: dummyStat.duration,
//           datasets: [
//             {
//               id: dummyStat.stat.revenue.id,
//               label: dummyStat.stat.revenue.name,
//               data: dummyStat.stat.revenue.dataPerMonth,
//               backgroundColor: "rgb(255, 69, 50)",
//               borderRadius: 100,
//             },
//             {
//               id: dummyStat.stat.netProfit.id,
//               label: dummyStat.stat.netProfit.name,
//               data: dummyStat.stat.netProfit.dataPerMonth,
//               backgroundColor: "rgb(0, 208, 755)",
//               borderRadius: 100,
//             },
//           ],
//         }}
//       />
//     </div>
//   );
// };

// export default RevenueStatChart;
