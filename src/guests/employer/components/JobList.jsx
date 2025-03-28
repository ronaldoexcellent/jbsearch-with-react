import Jobs from "jobs";

const JobList = ({ jobs, editJob, deleteJob }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {jobs.map((job, index) => (
      <div
        key={index}
        className="bg-white shadow-lg rounded-lg p-4 transform transition-transform hover:scale-105"
      >
        <h3 className="text-lg font-bold mb-2">{job.title}</h3>
        <p className="text-gray-600">{job.description}</p>
        <div className="mt-4 flex space-x-2">
          <button
            className="bg-yellow-400 text-white py-1 px-3 rounded hover:bg-yellow-500"
            onClick={() => editJob(index)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
            onClick={() => deleteJob(index)}
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default JobList;