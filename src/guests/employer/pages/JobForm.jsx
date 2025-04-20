import { useState } from "react";
import Jobs from '../utils/Jobs';
import PersonalInfo from "../questions/PersonalInfo";

const FormBuilder = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [logo, setLogo] = useState("");
  const [location, setLocation] = useState("");
  const [presence, setPresence] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [salaryVal, setSalaryVal] = useState("");
  const [description, setDescription] = useState("");
  const [employer, setEmployer] = useState("");
  const [employerData, setEmployerData] = useState("");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [toQ, setToQ] = useState(false);
  const [index, setIndex] = useState(0);

  const validate = (e) => {
    e.preventDefault();
    const newErrors = {};
    const job = {};
    // if (!title) newErrors.title = "Title is required!";
    // if (!company) newErrors.company = "Company name is required!";
    // if (!logo) newErrors.logo = "Logo is required!";
    // if (!location) newErrors.location = "Location is required!";
    // if (!presence) newErrors.presence = "Presence is required!";
    // if (!type) newErrors.type = "Type is required!";
    // if (!salary) newErrors.salary = "Salary is required!";
    // if (!salaryVal) newErrors.salaryVal = "Salary Value is required!";
    // if (!description) newErrors.description = "Description is required!";
    // if (!employer) newErrors.employer = "Employer name is required!";
    // if (!employerData) newErrors.employerData = "Employer Contact is required!";
    // if (!status) newErrors.status = "Status is required!";
    setErrors(newErrors);
    job.title = title;
    job.company = logo;
    job.logo = logo;
    job.location = location;
    job.presence = presence;
    job.type = type;
    job.salary = salary;
    job.salaryVal = salaryVal;
    job.description = (description);
    job.employer = employer;
    job.employerData = (employerData);
    job.status = status;
    job.questions = {
        PersonalInfo: [],
        WorkExperience: [],
        Education: [],
        Summary: []
    };
    Jobs.push(job);
    Object.keys(newErrors).length = 0;
    setToQ(true);
    setIndex(i => i + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // toast.success('Job Created Successfully!');
    // toast.loading("Taking you to jobs!");
    // setTimeout(() => { nav("employer/jobs"); }, 4000);
  };
    

  return (
    <>
      {/* Job Creation Form */}
      {!toQ && <div className="md:p-6 p-3 bg-white md:rounded-2xl md:w-[630px] mx-auto shadow-xl">
        <h2 className="text-xl font-bold mb-4">Create Job Posting</h2>
        <form onSubmit={validate}>
          <div className="mb-4 job-title">
            <input
              type="text"
              placeholder="Job Title (e.g Engineer, Doctor)"
              className={`border p-2 w-full ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && (
              <span className="text-red-500 text-sm">* {errors.title}</span>
            )}
          </div>
          <div className="mb-4 company-name">
            <input
              type="text"
              placeholder="Company Name (e.g Meta Inc.)"
              className={`border p-2 w-full ${
                errors.company ? "border-red-500" : "border-gray-300"
              }`}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            {errors.company && (
              <span className="text-red-500 text-sm">* {errors.company}</span>
            )}
          </div>
          <div className="mb-4 company-logo">
            <div className="text-gray-400 pl-2 pb-1">Company Logo</div>
            <input
              type="file"
              className={`border p-2 cursor-pointer w-full ${
                errors.logo ? "border-red-500" : "border-gray-300"
              }`}
              value={logo}
              onChange={(e) => setLogo(e.target.value)}
            />
            {errors.location && (
              <span className="text-red-500 text-sm">* {errors.logo}</span>
            )}
          </div>
          <div className="mb-4 job-location">
            <input
              type="text"
              placeholder="Job Location (e.g Washington, United States)"
              className={`border p-2 w-full ${
                errors.location ? "border-red-500" : "border-gray-300"
              }`}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            {errors.location && (
              <span className="text-red-500 text-sm">* {errors.location}</span>
            )}
          </div>
          <div className="mb-4 job-presence">
            <select
              className={`border p-2 w-full ${
              errors.presence ? "border-red-500" : "border-gray-300"
              }`}
              value=""
              onChange={(e) => setPresence(e.target.value)}
            >
              <option value=""> Job Presence </option>
              <option value="Remote"> Remote </option>
              <option value="On-site"> On-site </option>
              <option value="Hybrid"> Hybrid </option>
            </select>
            {errors.presence && (
              <span className="text-red-500 text-sm">* {errors.presence}</span>
            )}
          </div>
          <div className="mb-4 job-type">
            <select
              className={`border p-2 w-full ${
              errors.type ? "border-red-500" : "border-gray-300"
              }`}
              value=""
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Job Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </select>
            {errors.type && (
              <span className="text-red-500 text-sm">* {errors.type}</span>
            )}
          </div>
          <div className="mb-4 job-salary">
            <input
              type="number"
              placeholder="Job Salary (e.g 50000 or 35)"
              className={`border p-2 w-full ${
              errors.salary ? "border-red-500" : "border-gray-300"
              }`}
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
            {errors.salary && (
              <span className="text-red-500 text-sm">* {errors.salary}</span>
            )}
          </div>
          <div className="mb-4 job-salary-value">
            <input
              type="text"
              placeholder="Job Salary Value (e.g $50,000/yr or $35/hr)"
              className={`border p-2 w-full ${
              errors.salaryVal ? "border-red-500" : "border-gray-300"
              }`}
              value={salaryVal}
              onChange={(e) => setSalaryVal(e.target.value)}
            />
            {errors.salaryVal && (
              <span className="text-red-500 text-sm">* {errors.salaryVal}</span>
            )}
          </div>
          <div className="mb-4 job-description">
            <textarea
              placeholder="Job Description (You can also add HTML/CSS/JavaScript syntaxes)"
              className={`border p-2 w-full ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {errors.description && (
              <span className="text-red-500 text-sm">* {errors.description}</span>
            )}
          </div>
          <div className="mb-4 employer-name">
            <input
              type="text"
              placeholder="Employer Name"
              className={`border p-2 w-full ${
              errors.employer ? "border-red-500" : "border-gray-300"
              }`}
              value={employer}
              onChange={(e) => setEmployer(e.target.value)}
            />
            {errors.employer && (
              <span className="text-red-500 text-sm">* {errors.employer}</span>
            )}
          </div>
          <div className="mb-4 employer-data">
            <textarea
              placeholder="Employer Data (Other Info like career & contact)"
              className={`border p-2 w-full ${
              errors.employerData ? "border-red-500" : "border-gray-300"
              }`}
              value={employerData}
              onChange={(e) => setEmployerData(e.target.value)}
            />
            {errors.employerData && (
              <span className="text-red-500 text-sm">* {errors.employerData}</span>
            )}
          </div>
          <div className="mb-4 job-status">
            <select
              className={`border p-2 w-full ${
              errors.status ? "border-red-500" : "border-gray-300"
              }`}
              value=""
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Job Status</option>
              <option value="Active">Active, still accepting applications.</option>
              <option value="Inactive">Inactive, no longer accepting applications.</option>
            </select>
            {errors.status && (
              <span className="text-red-500 text-sm">* {errors.status}</span>
            )}
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>}

      {/* Questions Form */}
      {toQ && <div className="md:p-6 p-3 bg-gray-200 md:rounded-2xl md:w-[630px] mx-auto shadow-xl border border-gray-300">
        <h2 className="text-2xl font-bold pb-4">Question Section</h2>

        <PersonalInfo i={index} />

        <button
          className="py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded"
          onClick={handleSubmit}
        >
          Save Form
        </button>
      </div>}
    </>
  );
}

export default FormBuilder;