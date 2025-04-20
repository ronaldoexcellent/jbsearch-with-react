import { useState, useCallback, memo, useMemo } from "react";
import toast from "react-hot-toast";
import jobs from "../utils/Jobs";
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

const PersonalInfo = memo(({ name, email, tel, gender, resume, onChangeField }) => (
  <motion.div
    initial={{ x: "-100vw" }}
    animate={{ x: 0 }}
    exit={{ x: "100vw" }}
    transition={{ type: "tween", duration: 0.5 }}
    className="overflow-x-hidden mx-4"
  >
    <h2 className="text-xl font-bold mb-4">Personal Information</h2>
    
    <div>
      <label htmlFor="name" className="block mb-2 text-gray-700">
        Full Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
        value={name}
        onChange={(e) => onChangeField('name', e.target.value)}
        required
      />
    </div>

    <div>
      <label htmlFor="email" className="block mb-2 text-gray-700">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
        value={email}
        onChange={(e) => onChangeField('email', e.target.value)}
        required
      />
    </div>

    <div>
      <label htmlFor="tel" className="block mb-2 text-gray-700">
        Phone Number:
      </label>
      <input
        type="tel"
        id="tel"
        name="tel"
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
        value={tel}
        onChange={(e) => onChangeField('tel', e.target.value)}
        required
      />
    </div>

    <div>
      <label htmlFor="gender" className="block mb-2 text-gray-700">
        Gender:
      </label>
      <select
        id="gender"
        name="gender"
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
        value={gender}
        onChange={(e) => onChangeField('gender', e.target.value)}
        required
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>

    <div>
      <label htmlFor="resume" className="block mb-2 text-gray-700">
        Resume:
      </label>
      <input
        type="file"
        id="resume"
        name="resume"
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
        onChange={(e) => onChangeField('resume', e.target.files[0])}
        required
      />
    </div>
  </motion.div>
));

const WorkExperience = memo(({ q1, onChangeField }) => (
  <motion.div
    initial={{ x: "-100vw" }}
    animate={{ x: 0 }}
    exit={{ x: "100vw" }}
    transition={{ type: "tween", duration: 0.5 }}
    className="overflow-x-hidden mx-4"
  >
    <h2 className="text-xl font-bold mb-4">Work Experience</h2>
    <div>
      <label htmlFor="q1" className="block mb-2 text-gray-700">
        How many years of work experience do you have with React?
      </label>
      <input
        type="number"
        id="q1"
        name="q1"
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
        value={q1}
        onChange={(e) => onChangeField('q1', e.target.value)}
        required
      />
    </div>
  </motion.div>
));

const Education = memo(({ q2, onChangeField }) => (
  <motion.div
    initial={{ x: "-100vw" }}
    animate={{ x: 0 }}
    exit={{ x: "100vw" }}
    transition={{ type: "tween", duration: 0.5 }}
    className="overflow-x-hidden mx-4"
  >
    <h2 className="text-xl font-bold mb-4">Education</h2>
    <div>
      <label htmlFor="q2" className="block mb-2 text-gray-700">
        Do you have a bachelor degree in computer science?
      </label>
      <select
        id="q2"
        name="q2"
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
        value={q2}
        onChange={(e) => onChangeField('q2', e.target.value)}
        required
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>
  </motion.div>
));

const Summary = memo(({ cl, onChangeField }) => (
  <motion.div
    initial={{ x: "-100vw" }}
    animate={{ x: 0 }}
    exit={{ x: "100vw" }}
    transition={{ type: "tween", duration: 0.5 }}
    className="overflow-x-hidden mx-4"
  >
    <h2 className="text-xl font-bold mb-4">Summary</h2>
    <div>
      <label htmlFor="cl" className="block mb-2 text-gray-700">
        Cover Letter
      </label>
      <textarea
        id="cl"
        name="cl"
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
        value={cl}
        onChange={(e) => onChangeField('cl', e.target.value)}
        required
      ></textarea>
    </div>
  </motion.div>
));

const ApplicationForm = ({ i, func }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [err, setErr] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [gender, setGender] = useState('male');
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('yes');
  const [cl, setCL] = useState('Dear Hiring Manager,');
  const [resume, setResume] = useState(null);

  // A unified onChange handler, memoized for stability.
  const onChangeField = useCallback((field, value) => {
    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'tel':
        setTel(value);
        break;
      case 'gender':
        setGender(value);
        break;
      case 'q1':
        setQ1(value);
        break;
      case 'q2':
        setQ2(value);
        break;
      case 'cl':
        setCL(value);
        break;
      case 'resume':
        setResume(value);
        break;
      default:
        break;
    }
  }, []);

  // Memoize steps so they only recalibrate when their dependencies change.
  const steps = useMemo(
    () => [
      <PersonalInfo
        key="personal"
        name={name}
        email={email}
        tel={tel}
        gender={gender}
        resume={resume}
        onChangeField={onChangeField}
      />,
      <WorkExperience key="work" q1={q1} onChangeField={onChangeField} />,
      <Education key="education" q2={q2} onChangeField={onChangeField} />,
      <Summary key="summary" cl={cl} onChangeField={onChangeField} />,
    ],
    [name, email, tel, gender, resume, q1, q2, cl, onChangeField]
  );

  const handleNext = (e) => {
    e.preventDefault();

    // Check that every required field contains data.
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      tel.trim() === '' ||
      gender.trim() === '' ||
      !resume 
      // q1.toString().trim() === '' ||
      // q2.trim() === '' ||
      // cl.trim() === ''
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
    <div className="max-w-4xl w-full sm:w-10/12 md:w-[550px] sm:my-10 p-6 bg-white shadow-md overflow-y-auto rounded-lg">
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
          <div className="overflow-x-hidden overflow-y-auto w-full h-screen py-2 md:px-2 bg-gray-100">
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