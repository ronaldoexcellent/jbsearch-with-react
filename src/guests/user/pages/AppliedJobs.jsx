import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Skeleton } from "antd";
import { motion } from "framer-motion";
import jobs from "./../../utils/Jobs";
import NoContent from "./../../components/NoContent";
import { DescApp, DescBtn } from "../../components/DescApp";

function AppliedJobs() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(true);
  const [fulldesc, setFulldesc] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  
  const appliedJobs = jobs.filter(job => job.applied);
  if (appliedJobs.length === 0) {
    return <NoContent title="Applied Jobs" />
  }
  
  return (
    <div>
      <h1 className="underline p-4 text-2xl mb-3 font-extrabold text-center">Applied Jobs</h1>
      {appliedJobs.map((job, index) => (
        <Card key={job.id}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id={job.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
          >
            <Skeleton loading={loading} active>
              <div className="bg-gray-800 top text-white p-2 text-center flex gap-1 items-center">
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  className="w-10 h-10 m-2"
                />
                <div className="grid justify-items-start gap-1">
                  <h3 className="text-2xl font-medium text-left">{job.company}</h3>
                  <h6 className="text-sm font-medium">{job.location}</h6>
                </div>
              </div>
              <div className="p-4 body text-gray-700 text-center">
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <h5 className="text-xl font-semibold">{job.salaryVal}</h5>
                <p className="flex justify-around">
                  <span>{job.type}</span>
                  <span>{job.presence}</span>
                </p>
                <p className={`flex space-x-3 font-bold text-${
                  job.status === "Approved"
                    ? "green-700"
                    : job.status === "Rejected"
                    ? "red-700"
                    : "gray-800"
                }`}>
                  <i className={`fa fa-${
                    job.status === "Approved"
                      ? "check"
                      : job.status === "Rejected"
                      ? "times"
                      : "time"
                  }`}></i>
                  {job.status}
                </p>
                <DescBtn setFulldesc={setFulldesc} setShow={setShow} nav={nav} index={index} />
              </div>
              <div className="bg-gray-300 bottom text-center italic font-sans font-bold p-3 text-sm text-gray-600">
                Applied
              </div>
            </Skeleton>
          </motion.div>
        </Card>
      ))}
      <DescApp fulldesc={fulldesc} show={show} setShow={setShow} nav={nav} />
    </div>
  );
}

export default AppliedJobs;