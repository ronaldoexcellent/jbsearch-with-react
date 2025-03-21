import Header from "../../components/Header"
import ApplicationChart from "../components/ApplicationChart";
import { BarChart } from "../utils/BarChart";

function Dashboard({ theme }) {
  return (
    <div className="overflow-x-hidden">
      {/* <section>
        <h1>Summary</h1>

        <figure>
          <figcaption>Applied Jobs</figcaption>
          <span className="text-4xl">50</span>
        </figure>

        <figure>
          <figcaption>Saved Jobs</figcaption>
          <span className="text-4xl">50</span>
        </figure>

        <figure>
          <figcaption>Applied Jobs</figcaption>
          <span className="text-4xl">50</span>
        </figure>
      </section>

      <hr />

      <ApplicationChart />  */}

      <Header AppTitle="Dashboard" />

      <div className={`min-h-screen bg-${theme}-100 flex flex-col`}>
        {/* Main Content */}
        <main className="flex-grow p-4">
          <section className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-bold mb-4">Performance Overview</h2>
            <ApplicationChart />
            {/* <BarChart /> */}
          </section>
        </main>
      </div>

    </div>   
  )
}

export default Dashboard;