import { useState, useEffect } from "react";
import { Skeleton } from 'antd';
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

const JobList = ({ jobs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPresence, setFilterPresence] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  // const [fulldesc, setFulldesc] = useState(0);
  // const [show, setShow] = useState(false);
  // const nav = useNavigate();

  // Filtered Jobs
  const filteredJobs = jobs.filter((job) => {
      const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.presence.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilter = !filterType || job.type === filterType;
      const matchesPresence = !filterPresence || job.presence === filterPresence;
      const matchesSalary = !salaryRange || job.salary <= parseInt(salaryRange);

      return matchesSearch && matchesFilter && matchesPresence && matchesSalary;
  });

  const [loading, setLoading] = useState(true);

  // Simulate dynamic data fetching
  useEffect(() => {
      const timer = setTimeout(() => {
          setLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="w-full bg-white shadow-md z-10 p-4">
        <div className="max-w-6xl mx-auto flex justify-center flex-wrap gap-4">
            <input
                type="text"
                placeholder="Search by job title, location, or company"
                className="flex-1 border p-2 rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
                className="border p-2 rounded-md cursor-pointer"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
            >
                <option value="">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
            </select>
            <select
                className="border p-2 rounded-md cursor-pointer"
                value={filterPresence}
                onChange={(e) => setFilterPresence(e.target.value)}
            >
                <option value="">Presence</option>
                <option value="On-site">On-site</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
            </select>
            <input
                type="number"
                placeholder="Max Salary"
                className="border p-2 rounded-md"
                value={salaryRange}
                onChange={(e) => setSalaryRange(e.target.value)}
            />
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredJobs.map((job, index) => (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} id={index} key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
                    {/* <Card style={{ margin: '0px auto'}} className="bg-black"> */}
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
                                <p className="flex justify-between">
                                    <span> {job.type} </span>
                                    <span> {job.presence} </span>
                                </p>
                                
                            </div>
                            <div className="bg-gray-300 bottom flex justify-between text-center font-sans font-bold p-3 text-sm text-gray-600">
                                <button
                                  className={`bg-gray-400 text-gray-800 py-3 px-4 cursor-pointer hover:shadow-xl hover:shadow-gray-700 hover:outline hover:outline-white transition duration-300'}`
                                }>
                                  Edit
                                </button>
                                <button
                                    className={`bg-red-400 text-gray-800 py-3 px-4 cursor-pointer hover:shadow-xl hover:shadow-gray-700 hover:outline hover:outline-white transition duration-300'}`}
                                >
                                    Delete
                                </button>
                            </div>
                        </Skeleton>
                    {/* </Card> */}
                </motion.div>
            ))}
        </div>

        {/* Full Description & Application */}
        {/* <DescApp fulldesc={fulldesc} show={show} setShow={setShow} nav={nav} /> */}
      </div>
    </>
  );
}

export default JobList;