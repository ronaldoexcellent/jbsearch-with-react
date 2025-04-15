import { JobDescription, ApplicationForm } from "./JobHandler";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

function DescBtn({ setFulldesc, setShow, nav, index }) {
    return (
        <p className="pt-3 cursor-pointer hover:text-blue-600" onClick={() => {
            setFulldesc(index);
            setShow(true);
            nav("/user/jobs/description");
        }}>
            See full details...
        </p>
    )
}

function ApplyBtn({ job, setFulldesc, setShow, nav, index, classes }) {
    return (
        <button
            onClick={() => {
                setFulldesc(index);
                setShow(true);
                nav("/user/jobs/apply");
            }}
            className={`bg-gray-800 text-white ${classes !== "" ? `${classes} mt-4` : `py-3 px-4 rounded`} ${job.applied? 'italic' : 'hover:shadow-xl cursor-pointer hover:shadow-gray-700 hover:outline hover:outline-white transition duration-300'}`}
            disabled={job.applied? true:false}
        >
            {job.applied? "Applied" : "Apply"}
        </button>
    )
}

function DescApp({ fulldesc, show, setShow, nav }) {
    return (
        <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            // exit={{ x: "-100vw" }}
            transition={{ type: "tween", duration: 0.5 }} className={`fixed inset-0 ${show? 'flex' : 'hidden'} justify-center bg-gray-900 bg-opacity-75 z-50`}
        >
            <button className={`transition duration-300 absolute top-px right-px px-4 py-3 rounded-full text-white bg-gray-800 hover:bg-white hover:text-gray-800`} onClick={() => {
                setShow(false);
                nav("/user/jobs");
            }}>
                <i className="fas fa-times"></i>
            </button>
            <Routes>
                <Route path="/description/*" element={<JobDescription i={fulldesc} />} />
                <Route path="/apply" element={<ApplicationForm i={fulldesc} func={() => {
                    setShow(false);
                    nav("/user/jobs");
                }} />} />
            </Routes>
        </motion.div>
    )
}

export { DescBtn, ApplyBtn, DescApp };