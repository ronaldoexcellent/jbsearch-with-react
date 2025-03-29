import { useState } from "react";
import bg from "../bg2.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import SpinnerLoader from "../../guests/components/loaders/spinnerloader/SpinnerLoader";

const Login = ({ onSignUpLinkClick }) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [exit, setExit] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function submitTrue(target) {
    setTimeout( () => {
      toast.success("Login Successful!");
      setLoading(true);
    }, 3000);
    setTimeout(() => {
      setLoading(false);
      navigate(target);
    }, 7000)
  }

  // Temporary Auth For Testing [User, Employer & Admin]
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    let l = toast.loading("Checking credentials...");
    setTimeout(() => toast.remove(l), 2000);
    setExit('100vw');
    
    if (user === "user" && pass === "user") {
      submitTrue("/user/")
    }
    
    else if (user === "employer" && pass === "employer") {
      submitTrue("/employer/")
    }
    
    else if (user === "admin" && pass === "admin") {
      submitTrue("/admin/")
    }

    else {
      setTimeout(() => toast.error('Wrong Credentials!'), 3000);
      setTimeout(() => {
        setExit(0);
        toast.error('Login Failed!');
        setDisabled(false);
      }, 4000);
    }
  };

  return (
    <>
      {loading && <SpinnerLoader />}
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: exit }}
        // exit={{ x: "100vw" }}
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
            <button className={`fas fa-times transition duration-300 p-4 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white`} onClick={() => navigate("/")}></button>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="user">Username:</label>
              <div className="flex items-center border-b border-gray-500 py-2">
                <i className='fa fa-user text-gray-700 mr-2'></i>
                <input
                  type="text"
                  id="user"
                  className={`w-full px-3 py-2 focus:outline-none ${disabled? 'disabled' : ''}`}
                  placeholder="Enter your email"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  disabled={disabled}
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
                  className={`w-full px-3 py-2 focus:outline-none ${disabled? 'disabled' : ''}`}
                  placeholder="Enter your password"
                  onChange={(e) => setPass(e.target.value)}
                  value={pass}
                  disabled={disabled}
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
    </>
  );
};

export default Login;