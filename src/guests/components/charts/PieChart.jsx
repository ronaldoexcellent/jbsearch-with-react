import { Pie } from "react-chartjs-2";

function PieChart({ chartData, rewrite, txt }) {
  return (
    <div className="chart-container sm:w-[80%] md:w-full mx-auto">
      <h2 style={{ textAlign: "center" }}>
        {!rewrite && <>Pie Chart</>}
        {rewrite && <><>Total Number of Users</></>}
      </h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: txt === "" ? "Total Number of Applicants" : txt
            }
          }
        }}
      />
    </div>
  );
}
export default PieChart;