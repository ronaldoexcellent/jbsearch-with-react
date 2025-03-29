import jobs from "../utils/Jobs";

const JobDescription = ({ i }) => {
    return (
        <div className="max-w-4xl w-full sm:w-10/12 md:w-[550px] sm:my-10 p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mt-5">{jobs[i].title}</h1>
            <p className={`text-gray-600`}>{jobs[i].company}</p>
            <p className={`text-gray-500`}>{jobs[i].location}</p>

            <h2> Full Description: </h2>
            <p className="mt-4">{jobs.description}</p>

            <h2> For more info, contact: </h2>
            <p>
                <b> {jobs[i].contactName} </b>
                {jobs[i].contactInfo}
            </p>

            <div className="mt-6">
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                    Apply Now
                </button>
            </div>
        </div>
    );
};

const ApplicationForm = ({ i }) => {
    return (
        <div className="max-w-4xl w-full sm:w-10/12 md:w-[550px] sm:my-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold py-4 mt-5">Apply To {jobs[i].company}</h2>
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