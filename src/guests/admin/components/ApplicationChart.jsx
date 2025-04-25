import { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "../../components/charts/LineChart";
import PieChart from "../../components/charts/PieChart";

Chart.register(CategoryScale);

function ApplicationChart() {
  const [chartData, setChartData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Applications",
        data: [5, 10, 7, 12],
        backgroundColor: [
          "rgba(59, 130, 246, 0.5)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "red",
        borderWidth: 2
      },
    ],
  });
  return <LineChart width={600} height={300} chartData={chartData} rewrite={true} txt="Of This Website" />;
}

function ApplicationChart2() {
  const [chartData, setChartData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Applications",
        data: [5, 10, 7, 12],
        backgroundColor: [
          "rgba(70, 230, 106, 0.5)",
          "#ace2f1",
          "#5CAD95",
          "#f2ba4f",
          "#2b72e0"
        ],
        borderColor: "darkred",
        borderWidth: 2
      },
    ],
  });
  return <PieChart width={600} height={300} chartData={chartData} rewrite={true} txt="Of This Website" />;
}

export {ApplicationChart, ApplicationChart2};