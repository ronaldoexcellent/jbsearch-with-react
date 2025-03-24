import Logo from "./logo.png";
import { motion } from "framer-motion";

function Loader() {
    // Variants for the object (logo)
    const objectVariants = {
        animate: {
            x: [0, 100, -100, 0], // Moves left and right
            y: [0, -50, 50, 0], // Moves up and down
            transition: {
                duration: 4, // Adjust duration of motion
                repeat: Infinity, // Infinite loop
                repeatType: "loop",
            }
        }
    };

    // Variants for the background
    const backgroundVariants = {
        animate: {
            backgroundColor: ["#ff008c", "#7700ff", "#00fffc", "#ff008c"], // Colors transition
            transition: {
                duration: 6, // Speed of color change
                repeat: Infinity, // Infinite loop
            }
        }
    };

    return (
        <motion.div
            className="w-full h-screen flex items-center justify-center"
            variants={backgroundVariants}
            animate="animate"
        >
        <motion.div
            className="w-10 h-10 bg-white rounded-full shadow-lg"
            variants={objectVariants}
            animate="animate"
        />
        </motion.div>
    );
}

export default Loader;