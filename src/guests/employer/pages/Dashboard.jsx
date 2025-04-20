import { motion } from "framer-motion";
import ApplicationChart from "../components/ApplicationChart";

function Dashboard() {
  return (
    <>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "100vw" }}
        transition={{ type: "tween", duration: 0.5 }} className="overflow-x-hidden mx-4"
      >
        <h1 className="underline p-4 text-2xl mb-3 font-extrabold text-center">Dashboard</h1>
        <section className="grid sm:grid-cols-3 p-3 gap-2 justify-center text-center w-full cursor-pointer">
          <figure className="hover:bg-white hover:text-gray-800 p-6 bg-gray-800 text-white border-2 border-gray-800 transition duration-300 w-screen grid justify-center sm:w-full h-40 rounded-xl">
            <figcaption>Your Jobs</figcaption>
            <div className="text-5xl mt-4 border-t-4 border-l-4 rounded-full">50</div>
          </figure>

          <div className="hover:bg-white text-gray-800 text-3xl flex border-2 border-gray-800 justify-center items-center transition duration-300 w-screen sm:w-full h-40" title="Your Jobs Chart Below">
            <span className="rounded-full border-2 border-gray-800 p-2">
              <i className="far fa-chart-bar transform -rotate-90 skew-x-12 p-2"></i>
            </span>
          </div>

          <figure className="hover:bg-white hover:text-gray-800 p-6 bg-gray-800 text-white border-2 border-gray-800 transition duration-300 w-screen grid justify-center sm:w-full h-40 rounded-xl">
            <figcaption>Applicants</figcaption>
            <div className="text-5xl mt-4 border-b-4 border-r-4 rounded-full">50</div>
          </figure>
        </section>

        <hr />

        <div className={`min-h-screen flex flex-col`}>
          <main className="flex-grow p-4">
            <section className="bg-white p-6 rounded shadow">
              <h2 className="text-lg font-bold mb-4">Applicants Overview</h2>
              <ApplicationChart />
            </section>
          </main>
        </div>
      </motion.div>
    </> 
  )
}

export default Dashboard;