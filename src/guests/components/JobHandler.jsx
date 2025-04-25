import { useState } from "react";
import toast from "react-hot-toast";
import jobs from "../utils/jobs";
import { ApplyBtn, DescApp } from "./DescApp";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import './formprogress.css';

const JobDescription = ({ i }) => {
  const [fulldesc, setFulldesc] = useState(0);
  const [show, setShow] = useState(false);
  const nav = useNavigate();

  return (
    <div className="col-span-8 max-w-4xl w-full sm:w-10/12 md:w-[550px] sm:my-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">{jobs[i].title} at {jobs[i].company}</h1>
      <p className="text-gray-600">{jobs[i].location}</p>
      <div className="flex justify-between align-center">
        <ApplyBtn job={jobs[i]} setFulldesc={setFulldesc} setShow={setShow} nav={nav} index={i} classes={"px-6 py-3 mt-4 rounded-lg"} />
        <button
            onClick={(e) => {
                jobs[i].saved = !jobs[i].saved;
                if (jobs[i].saved) {
                    toast.success("Saved!");
                    e.target.innerHTML = "Unsave";
                } else {
                    toast.success("Removed from saved!");
                    e.target.innerHTML = "Save";
                }
            }}
            className={`mt-4 bg-gray-300 text-gray-800 px-6 py-3 rounded-lg ${(jobs[i].saved) ? 'italic' : 'rounded cursor-pointer hover:shadow-xl hover:shadow-gray-700 hover:outline hover:outline-white transition duration-300'}`}>
            {jobs[i].saved? "Unsave":"Save"}
        </button>
      </div>
      <hr className="my-4 border-2 border-gray-800" />
      {jobs[i].description}
      <DescApp fulldesc={fulldesc} show={show} setShow={setShow} nav={nav} />
    </div>
  );
};

const FromPersonalInfo = ({ i }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    linkedin: '',
    website: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Personal Information</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block mb-1 font-medium">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block mb-1 font-medium">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="mt-4">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone Number */}
        <div className="mt-4">
          <label htmlFor="phone" className="block mb-1 font-medium">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Address */}
        <div className="mt-4">
          <label htmlFor="address" className="block mb-1 font-medium">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* City, State, ZIP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <label htmlFor="city" className="block mb-1 font-medium">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="state" className="block mb-1 font-medium">
              State
            </label>
            <input
              type="text"
              name="state"
              id="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="zip" className="block mb-1 font-medium">
              ZIP Code
            </label>
            <input
              type="text"
              name="zip"
              id="zip"
              value={formData.zip}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* LinkedIn Profile */}
        <div className="mt-4">
          <label htmlFor="linkedin" className="block mb-1 font-medium">
            LinkedIn Profile
          </label>
          <input
            type="url"
            name="linkedin"
            id="linkedin"
            placeholder="https://www.linkedin.com/in/yourprofile"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Personal Website */}
        <div className="mt-4">
          <label htmlFor="website" className="block mb-1 font-medium">
            Personal Website
          </label>
          <input
            type="url"
            name="website"
            id="website"
            placeholder="https://yourwebsite.com"
            value={formData.website}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Optionally, you could include a button for further interactions (e.g., navigating to the next step) */}
      </form>
    </div>
  );
};

const FromWorkExperience = () => {
  const [experience, setExperience] = useState({
    companyName: '',
    jobTitle: '',
    location: '',
    startDate: '',
    endDate: '',
    currentJob: false,
    description: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setExperience((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Work Experience</h2>
      <form>
        <div className="grid grid-cols-1 gap-4">
          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className="block mb-1 font-medium">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={experience.companyName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Job Title */}
          <div>
            <label htmlFor="jobTitle" className="block mb-1 font-medium">
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              value={experience.jobTitle}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block mb-1 font-medium">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="City, State"
              value={experience.location}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Start Date and End Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="startDate" className="block mb-1 font-medium">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                value={experience.startDate}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {!experience.currentJob && (
              <div>
                <label htmlFor="endDate" className="block mb-1 font-medium">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  value={experience.endDate}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
          </div>

          {/* Currently Working Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="currentJob"
              id="currentJob"
              checked={experience.currentJob}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="currentJob" className="font-medium">
              I am currently working in this role
            </label>
          </div>

          {/* Description / Responsibilities */}
          <div>
            <label htmlFor="description" className="block mb-1 font-medium">
              Description / Responsibilities
            </label>
            <textarea
              name="description"
              id="description"
              rows="4"
              value={experience.description}
              onChange={handleChange}
              placeholder="Detail your responsibilities, achievements, and skills used in this role"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* No submit button or submission handling */}
        </div>
      </form>
    </div>
  );
};

const FromEducation = () => {
  const [education, setEducation] = useState({
    institution: '',
    degree: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: '',
    currentStudy: false,
    description: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEducation((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Education History</h2>
      <form>
        <div className="grid grid-cols-1 gap-4">
          {/* Institution Name */}
          <div>
            <label htmlFor="institution" className="block mb-1 font-medium">
              Institution Name
            </label>
            <input
              type="text"
              name="institution"
              id="institution"
              value={education.institution}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Degree */}
          <div>
            <label htmlFor="degree" className="block mb-1 font-medium">
              Degree
            </label>
            <input
              type="text"
              name="degree"
              id="degree"
              value={education.degree}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Field of Study */}
          <div>
            <label htmlFor="fieldOfStudy" className="block mb-1 font-medium">
              Field of Study
            </label>
            <input
              type="text"
              name="fieldOfStudy"
              id="fieldOfStudy"
              value={education.fieldOfStudy}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Start Date and End Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="startDate" className="block mb-1 font-medium">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                value={education.startDate}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Conditionally show End Date if not currently studying */}
            {!education.currentStudy && (
              <div>
                <label htmlFor="endDate" className="block mb-1 font-medium">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  value={education.endDate}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
          </div>

          {/* Currently Studying Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="currentStudy"
              id="currentStudy"
              checked={education.currentStudy}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="currentStudy" className="font-medium">
              I am currently studying here
            </label>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block mb-1 font-medium">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows="4"
              value={education.description}
              onChange={handleChange}
              placeholder="Describe your coursework, achievements, or any relevant details"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

const FromSummary = () => {
  const [summary, setSummary] = useState({
    motivation: '',
    careerObjectives: '',
    definitionOfSuccess: '',
    additionalComments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSummary((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Summary</h2>
      <form>
        <div className="grid grid-cols-1 gap-4">
          {/* Motivation Question */}
          <div>
            <label htmlFor="motivation" className="block mb-1 font-medium">
              Why are you interested in this position?
            </label>
            <textarea
              name="motivation"
              id="motivation"
              rows="4"
              value={summary.motivation}
              onChange={handleChange}
              placeholder="Share what motivates you..."
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Career Objectives Question */}
          <div>
            <label htmlFor="careerObjectives" className="block mb-1 font-medium">
              What are your career objectives?
            </label>
            <textarea
              name="careerObjectives"
              id="careerObjectives"
              rows="4"
              value={summary.careerObjectives}
              onChange={handleChange}
              placeholder="Describe your career goals and aspirations..."
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Success Definition Question */}
          <div>
            <label htmlFor="definitionOfSuccess" className="block mb-1 font-medium">
              How do you define success?
            </label>
            <textarea
              name="definitionOfSuccess"
              id="definitionOfSuccess"
              rows="4"
              value={summary.definitionOfSuccess}
              onChange={handleChange}
              placeholder="Explain your perspective on success..."
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Additional Comments */}
          <div>
            <label htmlFor="additionalComments" className="block mb-1 font-medium">
              Additional Comments
            </label>
            <textarea
              name="additionalComments"
              id="additionalComments"
              rows="4"
              value={summary.additionalComments}
              onChange={handleChange}
              placeholder="Any extra information you would like to add..."
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

const ApplicationForm = ({ i, func }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [err, setErr] = useState('');

  // Memoize steps so they only recalibrate when their dependencies change.
  const steps = [
    <FromPersonalInfo i={i} />,
    <FromWorkExperience i={i} />,
    <FromEducation i={i} />,
    <FromSummary i={i} />,
  ];

  const handleNext = (e) => {
    e.preventDefault();

    // Check that every required field contains data.
    if (
      err.trim() !== ''
    ) {
      setErr('* Input fields cannot be empty, please check! *');
      toast.error('Input fields cannot be empty, please check!');
    } else {
      setErr('');
      if (currentStep < steps.length - 1) {
        setCurrentStep((prevStep) => prevStep + 1);
      } else {
        if (jobs && jobs[i]) {
          jobs[i].applied = true;
          jobs[i].status = 'Pending';
        }
        toast.success('Applied Successfully');
        func();
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const companyName =
    jobs && jobs[i] && jobs[i].company ? jobs[i].company : 'The Company';

  return (
    <div className="max-w-4xl w-full sm:w-10/12 md:w-[550px] sm:my-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold py-4 mt-5 sm:mt-0 text-center italic">
        Apply To {companyName}
      </h2>
      <div className="w-full pt-0 py-2" id="formprogress">
        <meter
          min={0}
          value={(currentStep + 1) * (100 / steps.length)}
          max={100}
          className="w-full"
        ></meter>
      </div>
      
      <form onSubmit={handleNext}>
        <div className="h-full w-full grid">
          {/* 
            Instead of `h-screen`, we're using
            a max-height (adjustable as needed) 
            so that only the form content scrolls.
          */}
          <div className="overflow-x-hidden overflow-y-auto w-full max-h-[400px] py-2 md:px-2 bg-gray-100">
            {steps[currentStep]}
            {err && <div className="w-full font-bold text-red-600 text-center italic">{err}</div>}
          </div>
          
          <div className="w-full flex justify-between px-4">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`py-2 px-4 ${currentStep === 0 ? 'bg-gray-300' : 'bg-gray-600 hover:bg-gray-800'} text-white rounded`}
            >
              Previous
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded"
            >
              {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export { JobDescription, ApplicationForm };