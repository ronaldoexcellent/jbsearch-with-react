import jobs from "./../../utils/Jobs";

function AppliedJobs() {
    return (
      <>
        <h1 className="underline p-4 text-lg md:text-2xl mb-3 font-extrabold text-center">Applied Jobs</h1>

        <div className={`max-w-4xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md`}>
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div key={index} className="p-4 bg-white shadow rounded-lg flex justify-between">
                <div>
                  <h2 className="font-semibold">{job.title}</h2>
                  <p className={`text-sm text-gray-600`}>{job.company}</p>
                </div>
                <span
                  className={`${
                    job.status === "Shortlisted"
                      ? "text-green-600"
                      : "text-yellow-500"
                  } font-semibold`}
                >
                  {job.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}

export default AppliedJobs;