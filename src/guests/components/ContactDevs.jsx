import { useState } from "react";

function ContactDevs() {
    const [display, show] = useState(false);

    return (
        <div className={`border-2 shadow-xl shadow-gray-800 flex items-center fixed bottom-20 transition duration-300 right-0 rounded-l-full text-white bg-gray-800`} style={{transform: `${display ? 'translateX(0)' : "translateX(80%)"}`}}>
            <i
                className={`fa fa-${display ? "times" : "message"} animate-pulse cursor-pointer p-4 transition-gpu duration-300 hover:scale-125 hover:opacity-60`}
                onClick={() => show(!display)}
                title="Contact The Developer"
            >
            </i>
            <div className={`w-full text-3xl space-x-4 py-2 mr-2`}>
                <i title="Facebook" className="fab fa-facebook cursor-pointer transition duration-300 hover:scale-90 hover:opacity-60 hover:skew-x-6"></i>
                <i title="Twitter" className="fab fa-twitter cursor-pointer transition duration-300 hover:scale-90 hover:opacity-60 hover:-skew-x-12"></i>
                <i title="Instagram" className="fab fa-instagram cursor-pointer transition duration-300 hover:scale-90 hover:opacity-60 hover:rotate-180"></i>
                <i title="Envelope" className="fa fa-envelope cursor-pointer transition duration-300 hover:scale-90 hover:opacity-60"></i>
            </div>
        </div>
    )
}

export default ContactDevs;