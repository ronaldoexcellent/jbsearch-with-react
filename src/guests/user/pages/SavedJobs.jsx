import { Link } from "react-router-dom";
import jobs from "./../../utils/Jobs";

function SavedJobs() {
    return (
      <>
        <h1 className="underline p-4 text-lg md:text-2xl mb-3 font-extrabold text-center">Saved Jobs</h1>

        <div className={`max-w-4xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md`}>
          <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <div
                  key={index}
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
                <p className="text-blue-500 font-bold">${job.salaryVal}</p>
                <p className={`text-gray-500`}>{job.type}</p>
                <p className="text-blue-800 font-bold mt-4">
                    <Link to="../../job/:id"> See full details... </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}

export default SavedJobs;