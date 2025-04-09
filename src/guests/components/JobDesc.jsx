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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [gender, setGender] = useState('');
    const [q1, setQ1] = useState('');

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
        <div className="max-w-4xl w-full sm:w-10/12 md:w-[550px] sm:my-10 p-6 bg-white shadow-md overflow-y-auto rounded-lg">
            <h2 className="text-xl font-semibold py-4 mt-5 sm:mt-0 mb-3 text-center">Apply To {jobs[i].company}</h2>

            <div className="">
                <form onSubmit={submitform}>
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

                    <div className="flex justify-between align-center mt-10">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded">
                            Prev
                        </button>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded">
                            Next
                        </button>
                    </div>

                    {/* Extra Options */}
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

                    {/*  */}
                    <button className="bg-blue-500 text-white py-2 px-4 rounded">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
  
export { JobDescription, ApplicationForm };