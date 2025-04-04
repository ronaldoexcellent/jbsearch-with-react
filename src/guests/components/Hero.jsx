import { useState } from "react";

function Hero({ guest }) {
  const [slide, slideUp] = useState(false);
  return (
    <div className={`${slide ? "-translate-y-96 opacity-0" : "translate-y-0 opacity-100"} translate-all duration-500 fixed top-1 md:top-2 lg:top-4 inset-x-6 md:inset-x-1/4 lg:inset-x-1/3 bg-gray-800 text-white p-6 rounded-lg shadow-lg`}>
      <button className={`transition duration-300 absolute top-px right-px px-4 py-3 rounded-full text-white hover:bg-white hover:text-gray-800`} onClick={() => slideUp(true)}>
        <i className="fas fa-times"></i>
      </button>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Welcome back, Ronaldo!</h1>
        <p className="mt-px">You are now logged in as a {guest}. 🚀</p>
      </div>
    </div>
  );
}

export default Hero;