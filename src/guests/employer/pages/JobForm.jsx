import { useState } from "react";

const FormBuilder = ({ addJob }) => {
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

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Title is required!";
    if (!company) newErrors.title = "Company is required!";
    if (!logo) newErrors.title = "Logo is required!";
    if (!location) newErrors.title = "Location is required!";
    if (!presence) newErrors.title = "Presence is required!";
    if (!type) newErrors.title = "Type is required!";
    if (!salary) newErrors.title = "Salary is required!";
    if (!salaryVal) newErrors.title = "Salary Value is required!";
    if (!description) newErrors.description = "Description is required!";
    if (!employer) newErrors.title = "Employer is required!";
    if (!employerData) newErrors.title = "Employer Contact is required!";
    if (!status) newErrors.title = "Status is required!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    addJob({ title, company, logo, location, presence, type, salary, salaryVal, description, employer, employerData, status });
    setTitle("");
    setDescription("");
  };

  // Application Form Side

  const [sections, setSections] = useState([]);
    
  const addSection = () => setSections([...sections, { name: "", questions: [] }]);

  const updateSectionName = (index, name) => {
    const updatedSections = [...sections];
    updatedSections[index].name = name;
    setSections(updatedSections);
  };

  const addQuestion = (sectionIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].questions.push({ text: "" });
    setSections(updatedSections);
  };

  const updateQuestionText = (sectionIndex, questionIndex, text) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].questions[questionIndex].text = text;
    setSections(updatedSections);
  };

  return (
    <>
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Create Job Posting</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Job Title"
              className={`border p-2 w-full ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && (
              <span className="text-red-500 text-sm">{errors.title}</span>
            )}
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Company Name"
              className={`border p-2 w-full ${
                errors.company ? "border-red-500" : "border-gray-300"
              }`}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            {errors.company && (
              <span className="text-red-500 text-sm">{errors.company}</span>
            )}
          </div>
          {/* <div className="mb-4">
            <input
              type="file"
              placeholder="Company Logo"
              className={`border p-2 w-full ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
              value={logo}
              onChange={(e) => setLogo(e.target.value)}
            />
            {errors.title && (
              <span className="text-red-500 text-sm">{errors.title}</span>
            )}
          </div> */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Job Location"
              className={`border p-2 w-full ${
                errors.location ? "border-red-500" : "border-gray-300"
              }`}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            {errors.location && (
              <span className="text-red-500 text-sm">{errors.location}</span>
            )}
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Job Presence"
              className={`border p-2 w-full ${
              errors.presence ? "border-red-500" : "border-gray-300"
              }`}
              value={presence}
              onChange={(e) => setPresence(e.target.value)}
            />
            {errors.presence && (
              <span className="text-red-500 text-sm">{errors.presence}</span>
            )}
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Job Type"
              className={`border p-2 w-full ${
              errors.type ? "border-red-500" : "border-gray-300"
              }`}
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            {errors.type && (
              <span className="text-red-500 text-sm">{errors.type}</span>
            )}
          </div>
          <div className="mb-4">
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
              <span className="text-red-500 text-sm">{errors.salary}</span>
            )}
          </div>
          <div className="mb-4">
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
              <span className="text-red-500 text-sm">{errors.salaryVal}</span>
            )}
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Job Description"
              className={`border p-2 w-full ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {errors.description && (
              <span className="text-red-500 text-sm">{errors.description}</span>
            )}
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Job Employer"
              className={`border p-2 w-full ${
              errors.employer ? "border-red-500" : "border-gray-300"
              }`}
              value={employer}
              onChange={(e) => setEmployer(e.target.value)}
            />
            {errors.employer && (
              <span className="text-red-500 text-sm">{errors.employer}</span>
            )}
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Job Employer Data"
              className={`border p-2 w-full ${
              errors.employerData ? "border-red-500" : "border-gray-300"
              }`}
              value={employerData}
              onChange={(e) => setEmployerData(e.target.value)}
            />
            {errors.employerData && (
              <span className="text-red-500 text-sm">{errors.employerData}</span>
            )}
          </div>
          <div className="mb-4">
            <select
              className={`border p-2 w-full ${
              errors.status ? "border-red-500" : "border-gray-300"
              }`}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option selected>Job Status</option>
              <option value="Still active">Active</option>
              <option value="No longer accepting applications">Inactive</option>
            </select>
            {errors.status && (
              <span className="text-red-500 text-sm">{errors.status}</span>
            )}
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Application Form */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Form Builder</h2>
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded mb-4"
          onClick={addSection}
        >
          Add Section
        </button>
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-4">
            <input
              type="text"
              placeholder="Section Name"
              value={section.name}
              onChange={(e) => updateSectionName(sectionIndex, e.target.value)}
              className="block w-full p-2 mb-2 border rounded"
            />
            {section.questions.map((question, questionIndex) => (
              <input
                key={questionIndex}
                type="text"
                placeholder="Question"
                value={question.text}
                onChange={(e) =>
                  updateQuestionText(sectionIndex, questionIndex, e.target.value)
                }
                className="block w-full p-2 mb-2 border rounded"
              />
            ))}
            <button
              className="py-1 px-3 bg-green-500 text-white rounded"
              onClick={() => addQuestion(sectionIndex)}
            >
              Add Question
            </button>
          </div>
        ))}
        <button
          className="py-2 px-4 bg-purple-500 text-white rounded"
          // onClick={() => onSave(sections)}
        >
          Save Form
        </button>
      </div>
    </>
  );
}

export default FormBuilder;