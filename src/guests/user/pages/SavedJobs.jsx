import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Skeleton } from "antd";
import jobs from "./../../utils/jobs";
import { DescApp, DescBtn, ApplyBtn } from "../../components/DescApp";
import NoContent from "./../../components/NoContent";

function SavedJobs() {
  const [fulldesc, setFulldesc] = useState(0);
  const nav = useNavigate();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const savedJobs = jobs.filter(job => job.applied);
  if (savedJobs.length === 0) {
    return <NoContent title="Saved Jobs" />
  }

  return (
    <>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        // exit={{ x: "100vw" }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <Skeleton loading={loading} active>
          <h1 className="underline p-4 text-2xl mb-3 font-extrabold text-center">Saved Jobs</h1>
          <div className={`max-w-6xl mx-auto p-3 bg-gray-100 rounded-lg shadow-md`}>
            <div className="p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {
                savedJobs.map((job, index) => (
                  <div
                      key={index}
                      className="bg-white shadow-md rounded-lg p-3"
                  >
                    <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="w-16 h-16 object-contain mb-4"
                    />
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className={`text-gray-600`}>{job.company}</p>
                    <p className={`text-gray-500`}>{job.location}</p>
                    <p className="text-blue-500 font-bold">${job.salaryVal}</p>
                    <p className={`text-gray-500`}>{job.type}</p>
                    <div className="flex justify-between text-center font-sans font-bold pt-4">
                      <ApplyBtn job={job} setFulldesc={setFulldesc} setShow={setShow} nav={nav} index={index} />
                      <button
                        onClick={() => {
                            job.saved = false;
                            toast.success("Removed from saved!");
                        }}
                        className={`bg-gray-400 text-gray-800 py-3 px-4 ${(job.saved) ? 'italic' : 'rounded cursor-pointer hover:shadow-xl hover:shadow-gray-700 hover:outline hover:outline-white transition duration-300'}`}
                      >
                        Unsave
                      </button>
                    </div>
                    <p className="text-blue-800 font-bold mt-4">
                      <DescBtn setFulldesc={setFulldesc} setShow={setShow} nav={nav} index={index} />
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
        </Skeleton>
      </motion.div>
      <DescApp fulldesc={fulldesc} show={show} setShow={setShow} nav={nav} />
    </>
  );
}

export default SavedJobs;