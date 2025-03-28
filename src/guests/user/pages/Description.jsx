import { motion } from "framer-motion";
import jobs from "../../utils/Jobs";

function FullDesc({ index }) {
    return (
        <motion.div
            initial={{ y: "-100vw" }}
            animate={{ y: 0 }}
            // exit={{ x: "100vw" }}
            transition={{ type: "tween", duration: 0.5 }}
        >
            <h1> {jobs[index].title} </h1>
        </motion.div>
    )
}

export default FullDesc;