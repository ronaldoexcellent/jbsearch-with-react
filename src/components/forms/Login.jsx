import { useState } from "react";
import bg from "../bg2.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

const Login = ({ onSignUpLinkClick }) => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  // Temporary Auth For User, Employer & Admin
  const handleSubmit = (e) => {
    e.preventDefault();
    if (mail === "user@g.com" && pass === "user") {
      toast.success("Login Successful!");
      // toast.loading("Login you in now!");
      navigate("/user/");
    }
    
    // else if (mail === "employer" && pass === "employer") {
    //   navigate("/employer/home");
    // }
    
    // else if (mail === "admin" && pass === "admin") {
    //   navigate("/admin/home");
    // }
    
    else {
      setTimeout(() => {
        toast.error('Login Failed!');
        toast.error('Wrong Credentials!')
      }, 2000); toast.remove();
    }
  };

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
      transition={{ type: "tween", duration: 0.5 }}
      className={`fixed top-0 left-0 w-screen bg-gray-400 flex gap-2 items-center justify-center h-screen`}
    >
      <img
        src={bg}
        className='h-screen'
        alt='bg'
      />
      <div className="w-full max-w-md absolute lg:static bg-white px-6 pt-3 pb-8 rounded-lg shadow-lg">
        <div className="text-right">
          <button className={`fas fa-times transition duration-300 p-4 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white`} onClick={() => navigate()}></button>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-gray-900">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email/Username:</label>
            <div className="flex items-center border-b border-gray-500 py-2">
              <i className='fa fa-envelope text-gray-700 mr-2'></i>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 focus:outline-none"
                placeholder="Enter your email"
                onChange={(e) => setMail(e.target.value)}
                value={mail}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password:</label>
            <div className="flex items-center border-b border-gray-500 py-2">
              <i className='fa fa-lock text-gray-700 mr-2'></i>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 focus:outline-none"
                placeholder="Enter your password"
                onChange={(e) => setPass(e.target.value)}
                value={pass}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Login <i className="fa fa-sign-in animate-bounce"></i>
          </button>
        </form>
        <p className="mt-4 text-center text-gray-700">
          Don't have an account?{' '}
          <button onClick={onSignUpLinkClick} className="text-gray-500 hover:underline">
            Sign Up
          </button>
        </p>
      </div>
    </motion.div>
  );
};

export default Login;