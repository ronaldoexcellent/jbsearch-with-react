import { useState } from "react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import jobs from "../utils/Jobs";
import { JobDescription, ApplicationForm } from "../components/JobDesc";
import { Routes, Route, useNavigate } from "react-router-dom";

const JobList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("");
    const [filterPresence, setFilterPresence] = useState("");
    const [salaryRange, setSalaryRange] = useState("");
    const [fulldesc, setFulldesc] = useState(0);
    const nav = useNavigate();
    const [show, setShow] = useState(false);

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

    return (
        <>
            {/* Search Bar */}
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
                                <p className="pt-3" onClick={() => {
                                    setFulldesc(index);
                                    setShow(true);
                                    nav("/user/jobs/description");
                                }}> See full details... </p>
                            </div>
                            <div className="bg-gray-300 bottom flex justify-between text-center font-sans font-bold p-3 text-sm text-gray-600">
                                <button
                                    onClick={(e) => {
                                        setFulldesc(index);
                                        setShow(true);
                                        nav("/user/jobs/apply");
                                        let classes = ["hover:shadow-xl", 'hover:shadow-gray-700', 'hover:outline', 'hover:outline-white', 'transition', 'duration-300', 'cursor-pointer'];
                                        for (var i = 0; i < classes.length; i++) {
                                            e.target.classList.remove(classes[i]);
                                        }
                                        e.target.innerHTML = 'Applied!';
                                        e.target.disabled = true;
                                    }}
                                    className={`cursor-pointer bg-gray-800 text-white py-3 px-4 rounded hover:shadow-xl hover:shadow-gray-700 hover:outline hover:outline-white transition duration-300`}
                                >
                                        Apply
                                </button>
                                <button
                                    onClick={(e) => {
                                        toast.success("Saved!");
                                        e.target.innerHTML = "<i>Saved!</i>";
                                        e.target.disabled = true;

                                        let classes = ["hover:shadow-xl", 'hover:shadow-gray-700', 'hover:outline', 'hover:outline-white', 'transition', 'duration-300', 'cursor-pointer'];

                                        for (var i = 0; i < classes.length; i++) {
                                            e.target.classList.remove(classes[i]);
                                        }
                                    }}
                                    className={`cursor-pointer bg-gray-400 text-gray-800 py-3 px-4 rounded hover:shadow-xl hover:shadow-gray-700 hover:outline hover:outline-white transition duration-300`}
                                >
                                    Save
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Full Description & Application */}
                <div
                    initial={{ x: "100vw" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100vw" }}
                    transition={{ type: "tween", duration: 0.5 }} className={`fixed inset-0 ${show? 'flex' : 'hidden'} justify-center bg-gray-900 bg-opacity-75 z-50`}
                >
                    <button className={`transition duration-300 absolute top-px right-px px-4 py-3 rounded-full text-white bg-gray-800 hover:bg-white hover:text-gray-800`} onClick={() => {
                        setShow(false);
                        nav("/user/jobs");
                    }}>
                        <i className="fas fa-times"></i>
                    </button>
                    <Routes>
                        <Route path="/description" element={<JobDescription i={fulldesc} />} />
                        <Route path="/apply" element={<ApplicationForm i={fulldesc} />} />
                    </Routes>
                </div>
            </div>

        </>
    );
};

export default JobList;