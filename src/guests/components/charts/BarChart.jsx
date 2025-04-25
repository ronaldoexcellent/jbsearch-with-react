import { Bar } from "react-chartjs-2";

const BarChart = ({ chartData, rewrite, txt }) => {
  return (
    <div className="chart-container h-96 mx-auto">
      <h2 style={{ textAlign: "center" }}>
        {!rewrite && <>Applicantst</>}
        {rewrite && <><>Total Number of Jobs</></>}
      </h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: txt === "" ? "Users Gained between 2016-2020" : txt
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

export default BarChart;