import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import bg from "../bg2.png";

const SignUp = () => {
  const nav = useNavigate();
  const [exit, setExit] = useState(0);
  const [errMsg, setErrMsg] = useState("");
  const [names, setNames] = useState('');
  const [email, setEmail] = useState('');
  const [acct_type, setAcct_Type] = useState("");
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    [names, email, acct_type, password, confirm_password].forEAch((i) => {
      if (i.length < 1) {
        toast.error("Unable to create account!");
        toast.error("Please check your credentials.");
        setErrMsg("Input fields cannot be empty!");
      }
    });

    setTimeout( () => {
      setErrMsg("");
      toast.success("Account Creation Successful!");
      setExit('100vw');
    }, 3000);

    setTimeout(() => {
      nav('/login');
    }, 7000)
  };

  return (
    <motion.div
      initial={{ x: "100vw" }}
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
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white px-6 pt-3 pb-8 rounded-lg shadow-md h-5/6 absolute">
        <div className="text-right">
          <button onClick={ () => nav('/') } className={`fas fa-times transition duration-300 p-4 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white`}></button>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-gray-700">Sign Up</h2>

        <div className='overflow-y-auto h-5/6 w-full'>
        <div className="mb-4">
          <label className="block text-sm text-gray-800" htmlFor="names">Full Name:</label>
          <input
            type="text"
            id="names"
            value={names}
            onChange={(e) => setNames(e.target.value)}
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-gray-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-800" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-gray-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-800" htmlFor="acct-type">Account Type:</label>
          <span className='w-full lock p-1'>
            <input
              type="radio"
              id="acct-type"
              name="acct-type"
              value={acct_type}
              onChange={(e) => setAcct_Type("User")}
              className="mt-1 border border-gray-300 focus:outline-none focus:ring focus:ring-gray-300"
              required
            /> User
          </span>
          <span className='w-full block p-1'>
            <input
              type="radio"
              name="acct-type"
              value={acct_type}
              onChange={(e) => setAcct_Type("Guest")}
              className="mt-1 border border-gray-300 focus:outline-none focus:ring focus:ring-gray-300"
              required
            /> Guest
          </span>
          <span className='w-full block p-1'>
              <input
              type="radio"
              name="acct-type"
              value={acct_type}
              onChange={(e) => setAcct_Type("Admin")}
              className="mt-1 border border-gray-300 focus:outline-none focus:ring focus:ring-gray-300"
              required
            /> Admin
          </span>
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-800" htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-gray-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-800" htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirm_password}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-gray-300"
            required
          />
        </div>
        
        <h3 className="text-xl font-bold mb-4 text-red-600">{errMsg}</h3>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition duration-300 ease-in-out"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center text-gray-700">
          Already have an account?{' '}
          <button onClick={() => nav('/login')} className="text-gray-500 hover:underline">
            Login
          </button>
        </p>
        </div>
      </form>
      </motion.div>
  );
};

export default SignUp;