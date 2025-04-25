import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Skeleton } from 'antd';
import { motion } from "framer-motion";

const JobList = ({ jobs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPresence, setFilterPresence] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [fulldesc, setFulldesc] = useState(0);
  const [show, setShow] = useState(false);
  const [a, setA] = useState();

  const [loading, setLoading] = useState(true);
  const [j, setJ] = useState(jobs.map(i => ({ ...i, workStatus: i.workStatus })));
  const accept = (index) => {
    setJ(s => s.map((itm, idx) => idx === index ? { ...itm, workStatus: true } : itm));
    toast.success('Accepted');
  };
  const reject = (index) => {
    setJ(s => s.map((itm, idx) => idx === index ? { ...itm, workStatus: false } : itm));
    toast.error('Rejected');
  };

  // Filtered Jobs
  const filteredJobs = j.filter((job) => {
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
                <motion.div 
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    // exit={{ x: "100vw" }}
                    transition={{ type: "tween", duration: 0.5 }} id={index} key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
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
                                <p className="pt-3 cursor-pointer hover:text-blue-600" onClick={() => {
                                    setFulldesc(index);
                                    setShow(true);
                                }}>
                                    See full details...
                                </p>
                            </div>
                            <div className="bg-gray-300 bottom flex justify-between text-center font-sans font-bold p-3 text-sm text-gray-600">
                                <button
                                    className={`bg-green-600 text-white py-3 px-4 cursor-pointer hover:shadow-xl hover:shadow-gray-700 hover:outline hover:outline-white transition duration-300 ${a === true?  "mx-auto":"hidden"}`}
                                    onClick={() => accept(index)}
                                >
                                  Approve
                                </button>
                                <button
                                    className={`bg-red-600 text-white py-3 px-4 cursor-pointer hover:shadow-xl hover:shadow-gray-700 hover:outline hover:outline-white transition duration-300 ${a === false? "mx-auto":"hidden"}`}
                                    onClick={() => reject(index)}
                                >
                                    Reject
                                </button>
                            </div>
                        </Skeleton>
                    {/* </Card> */}
                </motion.div>
            ))}
        </div>

        {/* Full Description */}
        <div className={`fixed inset-0 ${show? 'flex' : 'hidden'} justify-center bg-gray-900 bg-opacity-75 z-50`}>
            <button className={`transition duration-300 absolute top-px right-px px-4 py-3 rounded-full text-white bg-gray-800 hover:bg-white hover:text-gray-800`} onClick={() => setShow(false)}>
                <i className="fas fa-times"></i>
            </button>
            <div className="col-span-8 max-w-4xl w-full sm:w-10/12 md:w-[550px] sm:my-10 p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold text-gray-800">{jobs[fulldesc].title} at {jobs[fulldesc].company}</h1>
                <p className="text-gray-600">{jobs[fulldesc].location}</p>
                <div className="flex justify-between align-center">
                    <div className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                        <div className="bg-gray-300 bottom flex justify-between text-center font-sans font-bold p-3 text-sm text-gray-600">
                            <div
                                className="overflow-hidden flex rounded-xl bg-green-200 cursor-pointer"
                                onClick={() => accept(fulldesc)}
                            >
                                <div
                                    className="w-[85%] lg:w-[80%] p-1 hover:shadow-lg hover:bg-emerald-700 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                                >Accept</div>
                            </div>
                            <div
                                className="overflow-hidden flex rounded-xl bg-red-200 cursor-pointer"
                                onClick={() => reject(fulldesc)}
                            >
                            <div
                                className="w-[85%] lg:w-[80%] p-1 hover:shadow-lg hover:bg-red-700 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                            >Reject</div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-4 border-2 border-gray-800" />
                {jobs[fulldesc].description}
            </div>
        </div>
      </div>
    </>
  );
}

export default JobList;