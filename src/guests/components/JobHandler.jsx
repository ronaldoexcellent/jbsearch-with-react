import { useState } from "react";
import toast from "react-hot-toast";
import jobs from "../utils/Jobs";
import { ApplyBtn, DescApp } from "./DescApp";
import { useNavigate } from "react-router";


const JobDescription = ({ i }) => {
    const [fulldesc, setFulldesc] = useState(0);
    const [show, setShow] = useState(false);
    const nav = useNavigate();

    return (
        <div className="col-span-8 max-w-4xl w-full sm:w-10/12 md:w-[550px] sm:my-10 p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800">{jobs[i].title}</h1>
            <p className="text-gray-600">{jobs[i].location}</p>
            <div className="flex justify-between align-center">
                <ApplyBtn job={jobs[i]} setFulldesc={setFulldesc} setShow={setShow} nav={nav} index={i} classes={"px-6 md:px-7 py-3 rounded-lg"} />
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

const ApplicationForm = ({ i, func }) => {
  return (
      <div className="max-w-4xl w-full sm:w-10/12 md:w-[550px] sm:my-10 p-6 bg-white shadow-md overflow-y-auto rounded-lg">
        <h2 className="text-xl font-semibold py-4 mt-5 sm:mt-0 mb-3 text-center">Apply To {jobs[i].company}</h2>
        <div className="">
           {/* onSubmit={submitform}> */}
           <form>
            <JobApplicationForm i={i} func={func} />
            {/* <EmployerFormBuilder /> */}
          </form>
        </div>
      </div>
  );
};
  
const JobApplicationForm = ({i, func}) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    <PersonalInfo i={i} currentStep={currentStep} func={func} />,
    <WorkExperience i={i} currentStep={currentStep} />,
    <Education i={i} currentStep={currentStep} />,
    <Summary i={i} currentStep={currentStep} />
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="relative h-screen w-full">
      <div className="overflow-hidden">
        <div
        >
          <div
            className="w-full h-screen flex justify-center items-center bg-gray-100"
          >
            {steps[currentStep]}
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 w-full flex justify-between px-4">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className={`py-2 px-4 ${currentStep === 0? "bg-gray-300" : "bg-gray-600"} hover:bg-gray-800 text-white rounded`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded"
        >
          {currentStep === steps.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

const PersonalInfo = ({i, currentStep, func}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [gender, setGender] = useState('');

  function submitform(e) {
    e.preventDefault();
    if (name.length > 0 && email.length > 0) {
      jobs[i].applied = true;
      jobs[i].status = "Pending";
      toast.success('Applied Successfully');
      func();
    } else {
      toast.error('Failed to submit');
      toast.error('Fields cannot be empty');
    }
  }

  return (
    <div 
      className="transition-transform duration-500"
      style={{
        transform: `translateX(-${currentStep * 100}%)`
      }}
    >
      <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
      
      <dIv>
        <label for="full-name" className={`block mb-2 text-gray-700`}>Full Name:</label>
        <input
          type="text" name="full-name"
          className={`block w-full mb-4 p-2 border border-gray-300 rounded`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </dIv>

      <div>
          <label for="email" className={`block mb-2 text-gray-700`}>Email:</label>
          <input
              type="email" name="email"
              className={`block w-full mb-4 p-2 border border-gray-300 rounded`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
          />
      </div>

      <div>
          <label for="tel" className={`block mb-2 text-gray-700`}>Phone Number::</label>
          <input
              type="tel" name="tel"
              className={`block w-full mb-4 p-2 border border-gray-300 rounded`}
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              required
          />
      </div>
      
      <div>
          <label for="gender" className={`block mb-2 text-gray-700`}>Gender:</label>
          <input
              type="radio" name="gender"
              className={`border border-gray-300 rounded`}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
          /> Male
          <input
              type="radio" name="gender"
              className={`border border-gray-300 rounded`}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
          /> Female
      </div>
      
      <div>
          <label for="resume" className={`block mb-2 text-gray-700`}>Resume:</label>
          <input
              type="file" name="resume"
              className={`block w-full mb-4 p-2 border border-gray-300 rounded`}
              required
          />
      </div>
    </div>
  )
};
const WorkExperience = ({currentStep}) => {
  const [q1, setQ1] = useState('');
  
  return (
    <div 
      className="transition-transform duration-500"
      style={{
        transform: `translateX(-${currentStep * 100}%)`
      }}
    >
      <h2 className="text-2xl font-bold">Work Experience</h2>
      <div>
        <label for="q1" className={`block mb-2 text-gray-700`}>
          How many years of work experience do you have with React?
        </label>
        <input
          type="text" name="q1"
          className={`block w-full mb-4 p-2 border border-gray-300 rounded`}
          value={q1}
          onChange={(e) => setQ1(e.target.value)}
          required
        />
      </div>
    </div>
  );
};
const Education = ({currentStep}) => (
  <div 
    className="transition-transform duration-500"
    style={{
      transform: `translateX(-${currentStep * 100}%)`
    }}
  >
    <h2 className="text-2xl font-bold">Education</h2>
  </div>
);
const Summary = ({currentStep}) => (
  <div 
    className="transition-transform duration-500"
    style={{
      transform: `translateX(-${currentStep * 100}%)`
    }}
  >
    <h2 className="text-2xl font-bold">Summary</h2>
  </div>
);

const EmployerFormBuilder = ({ onSave }) => {
    const [sections, setSections] = useState([]);
  
    const addSection = () => {
      setSections([...sections, { name: "", questions: [] }]);
    };
  
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
          onClick={() => onSave(sections)}
        >
          Save Form
        </button>
      </div>
    );
};

export { JobDescription, ApplicationForm };