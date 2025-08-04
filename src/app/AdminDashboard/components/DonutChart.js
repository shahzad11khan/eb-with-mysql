// "use client";
// // components/DonutChart.js
// import React, { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";

// const DonutChart = ({ data }) => {
//   const chartRef = useRef(null);
//   const chartInstance = useRef(null);

//   useEffect(() => {
//     if (chartRef.current && data) {
//       if (chartInstance.current) {
//         chartInstance.current.destroy(); // Destroy existing chart instance
//       }

//       const ctx = chartRef.current.getContext("2d");

//       chartInstance.current = new Chart(ctx, {
//         type: "doughnut", // Set chart type to doughnut
//         data: {
//           labels: data.labels,
//           datasets: [
//             {
//               label: "Value",
//               data: data.values,
//               backgroundColor: [
//                 "rgba(255, 99, 132, 0.5)",
//                 "rgba(54, 162, 235, 0.5)",
//                 "rgba(255, 206, 86, 0.5)",
//                 "rgba(75, 192, 192, 0.5)",
//                 "rgba(153, 102, 255, 0.5)",
//                 "rgba(255, 159, 64, 0.5)",
//               ], // Adjust colors as needed
//               borderColor: [
//                 "rgba(255, 99, 132, 1)",
//                 "rgba(54, 162, 235, 1)",
//                 "rgba(255, 206, 86, 1)",
//                 "rgba(75, 192, 192, 1)",
//                 "rgba(153, 102, 255, 1)",
//                 "rgba(255, 159, 64, 1)",
//               ], // Adjust colors as needed
//               borderWidth: 1,
//             },
//           ],
//         },
//       });
//     }
//   }, [data]);

//   return <canvas ref={chartRef} />;
// };

// export default DonutChart;
"use client";
// components/AreaChart.js
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const AreaChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current && data) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy existing chart instance
      }

      const ctx = chartRef.current.getContext("2d");

      chartInstance.current = new Chart(ctx, {
        type: "line", // Set chart type to line
        data: {
          labels: data.labels,
          datasets: [
            {
              label: "Clients",
              data: data.values,
              backgroundColor: "rgba(54, 162, 235, 0.5)", // Adjust color as needed
              borderColor: "rgba(54, 162, 235, 1)", // Adjust color as needed
              borderWidth: 2,
              fill: true, // Fill the area under the line
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default AreaChart;
