import { motion } from "framer-motion";
import { ApplicationChart, ApplicationChart2 } from "../components/ApplicationChart";
import UsersTable from "../components/UsersTable";
import JobsTable from "../components/JobsTable";
import jobs from "../../utils/jobs";

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
        
        <div className="relative bg-gray-800 md:bg-gray-200 p-2 md:p-6">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words hover:scale-110 cursor-pointer transition duration-200 bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                          Users
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                          35,897
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500 transition duration-300 hover:rotate-[300deg]">
                          <i className="far fa-chart-bar"></i>
                        </div>
                      </div>
                    </div>
                      <p className="text-sm text-blueGray-400 mt-4">
                      <span className="text-emerald-500 mr-2">
                        <i className="fas fa-arrow-up"></i> 3.48%
                      </span>
                      <span className="whitespace-nowrap">
                        Since last month
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words hover:scale-110 cursor-pointer transition duration-200  bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                          Jobs
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                          40,356
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500 transition duration-300 hover:rotate-[300deg]">
                          <i className="fas fa-chart-pie"></i>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-blueGray-400 mt-4">
                      <span className="text-red-500 mr-2">
                        <i className="fas fa-arrow-down"></i> 3.48%
                      </span>
                      <span className="whitespace-nowrap">
                        Since last week
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
        
        <div className="px-4 md:px-10 mx-auto w-full">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12 xl:mb-12 pt-8 pb-3 md:p-0 border-2">
              <div
                className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded border-2 bg-white"
              >
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full max-w-full flex-grow flex-1">
                      <h6
                        className="uppercase text-blueGray-500 mb-1 text-xs font-semibold"
                      >
                        Overview
                      </h6>
                      <h2 className="text-blueGray-800 text-xl font-semibold">
                        Users
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex-auto">
                  <div className="relative">
                    <ApplicationChart />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-4/12 px-4 hidden xl:block">
              <div
                className="relative flex flex-col min-w-0 break-words border-2  border-gray-500 bg-white w-full mb-6 shadow-lg rounded"
              >
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full max-w-full flex-grow flex-1">
                      <h6
                        className="uppercase text-blueGray-400 mb-1 text-xs font-semibold"
                      >
                        Jobs
                      </h6>
                      <h2 className="text-blueGray-700 text-xl font-semibold">
                        Total Jobs
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex-auto">
                  <div className="relative h-[350px]">
                    <ApplicationChart2 className="hidden md:block" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-4">
            <JobsTable />
            <UsersTable />
          </div>
        </div>
      </motion.div>
    </> 
  )
}

export default Dashboard;