const JobDescription = ({ job }) => {
    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold">{job.title}</h1>
            <p className={`text-gray-600`}>{job.company}</p>
            <p className={`text-gray-500`}>{job.location}</p>
            <p className="mt-4">{job.description}</p>
            <div className="mt-6">
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                    Apply Now
                </button>
            </div>
        </div>
    );
};

const ApplicationForm = ({ theme }) => {
    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Application Form</h2>
            <form>
                <label className={`block mb-2 text-gray-700`}>Name</label>
                <input
                    type="text"
                    className={`block w-full mb-4 p-2 border border-gray-300 rounded`}
                />
                <label className={`block mb-2 text-gray-700`}>Email</label>
                <input
                    type="email"
                    className={`block w-full mb-4 p-2 border border-gray-300 rounded`}
                />
                <label className={`block mb-2 text-gray-700`}>Resume</label>
                <input
                    type="file"
                    className={`block w-full mb-4 p-2 border border-gray-300 rounded`}
                />
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};
  
export { JobDescription, ApplicationForm };