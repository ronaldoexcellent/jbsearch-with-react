import jobs from "./../../utils/Jobs";
import Header from "../../components/Header";

function AppliedJobs({ theme }) {
    return (
      <>
        <Header AppTitle="Applied Jobs" />

        <div className={`max-w-4xl mx-auto p-4 bg-${theme}-100 rounded-lg shadow-md`}>
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div key={index} className="p-4 bg-white shadow rounded-lg flex justify-between">
                <div>
                  <h2 className="font-semibold">{job.title}</h2>
                  <p className={`text-sm text-${theme}-600`}>{job.company}</p>
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