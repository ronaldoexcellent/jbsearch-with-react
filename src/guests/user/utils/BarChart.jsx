import { Bar } from "react-chartjs-2";

export const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Times Your Application Was Viewed</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Times Your Application Was Viewed"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};