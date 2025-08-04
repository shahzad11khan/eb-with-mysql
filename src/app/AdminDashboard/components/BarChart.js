"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = ({ data, data1 }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current && data && data1) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy existing chart instance
      }

      const ctx = chartRef.current.getContext("2d");

      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: data.labels, // Assuming both datasets have the same labels
          datasets: [
            {
              label: "Projects Dataset 1",
              data: data.values,
              backgroundColor: "rgba(54, 162, 235, 0.5)", // Adjust color as needed
              borderColor: "rgba(54, 162, 235, 1)", // Adjust color as needed
              borderWidth: 2,
              fill: false, // Ensure line chart is not filled
            },
            {
              label: "Projects Dataset 2",
              data: data1.values,
              backgroundColor: "rgba(56, 176, 345, 0.5)", // Adjust color as needed
              borderColor: "rgba(56, 132, 215, 1)", // Adjust color as needed
              borderWidth: 2,
              fill: false, // Ensure line chart is not filled
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
  }, [data, data1]);

  return <canvas ref={chartRef} />;
};

export default LineChart;
