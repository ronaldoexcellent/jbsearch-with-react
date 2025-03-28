import { useState } from "react";
import { motion } from "framer-motion";
import Logo from './logo.png';

function Loader() {
    const [exit, setExit] = useState(false);
    setTimeout(() => setExit(true), 8000);

    // Variants for the balls
    const objectVariants1 = {
        animate: {
            backgroundColor: ["#0F141BFF", "#ffffff"],
            x: [0, -50, 100, 0], // Moves left and right
            y: [0, 50, -50, 0], // Moves up and down
            transition: {
                duration: 4, // Adjust duration of motion
                repeat: Infinity, // Infinite loop
                repeatType: "loop"
            }
        }
    };

    const objectVariants2 = {
        animate: {
            backgroundColor: ["#10151DFF", "#ffffff"],
            x: [0, 50, -100, 0], // Moves left and right
            y: [0, -50, 100, 0], // Moves up and down
            transition: {
                duration: 4, // Adjust duration of motion
                repeat: Infinity, // Infinite loop
                repeatType: "loop"
            }
        }
    };

    // variables for the img container
    const imgCon = {
        animate: {
            backgroundColor: ["#ff008c", "#7700ff", "#00fffc", "#ff008c"],
            transition: { duration: 2, repeat: Infinity }
        }
    };

    return (
        <div
            className={`w-screen h-screen bg-gray-900 fixed z-40 top-0 left-0 flex items-center justify-center ${exit ? "hidden" : ''}`}
        >
            <motion.div
                className="absolute w-10 h-10 rounded-full shadow-lg"
                variants={objectVariants1}
                animate="animate"
            />
            <motion.div
                className="p-1 flex items-center justify-center"
                variants={imgCon}
                animate="animate"
            >
                <img
                    src={Logo}
                    alt="logo"
                    className="w-28"
                />
            </motion.div>
            <motion.div
                className="absolute w-10 h-10 rounded-full shadow-lg"
                variants={objectVariants2}
                animate="animate"
            />
        </div>
    );
}

export default Loader;