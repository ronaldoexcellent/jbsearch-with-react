import { motion } from "framer-motion";
import JobList from "../../components/JobList";

function Jobs() {
    return (
        <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            // exit={{ x: "100vw" }}
            transition={{ type: "tween", duration: 0.5 }}
        >
            <h1 className="underline p-4 text-2xl mb-3 font-extrabold text-center">Jobs</h1>
            <JobList />
        </motion.div>
    )
}

export default Jobs;