import { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import BarChart from "../../components/charts/BarChart";

Chart.register(CategoryScale);

function ApplicationChart() {
  const [chartData, setChartData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Applicants",
        data: [5, 10, 7, 12],
        backgroundColor: [
          "rgba(59, 130, 246, 0.5)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      },
    ],
  });

  return <BarChart width={600} height={300} chartData={chartData} />;
}

export default ApplicationChart;