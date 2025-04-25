import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import jobs from "../../utils/jobs";
import JobList from "../components/JobList";

function Jobs() {
    const nav = useNavigate();
    return (
        <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            // exit={{ x: "100vw" }}
            transition={{ type: "tween", duration: 0.5 }}
        >
            <h1 className="underline p-4 text-2xl mb-3 font-extrabold text-center">Your Jobs</h1>
            <button className="bg-gray-800 text-white font-bold px-3 py-2" onClick={() => nav("/employer/formbuilder")}>Create Jobs</button>
            {/* {!jobs[0] ? <JobList jobs={jobs} /> : null} */}
            <JobList jobs={jobs} />
        </motion.div>
    )
}

export default Jobs;