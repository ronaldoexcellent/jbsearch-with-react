import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import jobs from "../utils/Jobs";

const JobList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("");
    const [salaryRange, setSalaryRange] = useState("");

    // Filtered Jobs
    const filteredJobs = jobs.filter((job) => {
        const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.type.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesFilter = !filterType || job.type === filterType;
        const matchesSalary = !salaryRange || job.salary <= parseInt(salaryRange);

        return matchesSearch && matchesFilter && matchesSalary;
    });

    return (
        <>
            {/* Search Bar */}
            <div className="w-full bg-white shadow-md z-10 p-4">
                <div className="max-w-6xl mx-auto flex flex-wrap gap-4">
                    <input
                        type="text"
                        placeholder="Search by job title, location, or company"
                        className="flex-1 border p-2 rounded-md"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        className="border p-2 rounded-md"
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                    >
                        <option value="">All Types</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Remote">Remote</option>
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

            {/* Job Cards Grid & Full Job Description */}
            <Outlet />

            <div className="max-w-6xl mx-auto mt-4 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredJobs.map((job) => (
                    <div
                        key={job.id}
                        className="bg-white shadow-md rounded-lg p-6"
                    >
                        <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        className="w-16 h-16 object-contain mb-4"
                        />
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p className={`text-gray-600`}>{job.company}</p>
                        <p className={`text-gray-500`}>{job.location}</p>
                        <p className={`text-gray-500 font-bold`}>${job.salaryVal}</p>
                        <p className={`text-gray-500`}>{job.type}</p>
                        <p className={`text-gray-700`}>
                            <Link to="/job/:id"> See full details... </Link>
                        </p>
                        <div className="mt-4 flex justify-between">
                            <Link to="/apply">
                                <button className={`bg-gray-800 text-white py-1 px-3 rounded`}>
                                    Apply
                                </button>
                            </Link>
                            <button className={`bg-gray-300 text-gray-800 py-1 px-3 rounded`}>
                                Save
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default JobList;