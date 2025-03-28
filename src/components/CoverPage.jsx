import backgroundImage from './bg.png';
import logo from './logo.png';
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const CoverPage = () => {
  const navigate = useNavigate();
  const gotoLogin = () => navigate("/login");

  return (
    <>
      <Loader />
      <div
        className="flex items-center justify-center h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        id='main'
      >
        <div className='absolute top-4 left-4 grid justify-center rounded-2xl bg-gray-200 p-2'>
          <img src={logo} alt="Logo" className="w-16 h-16" />
          <span className='text-gray-800 font-bold'> JBSearch </span>
        </div>
        <div className="bg-white bg-opacity-75 p-10 rounded-md shadow-lg">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">Welcome to JBSearch</h1>
          <p className="text-lg text-gray-700 font-bold italic">
            Find jobs, employ & get employed...
          </p>
          <button
            className="mt-6 px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={gotoLogin}
          >
            Login / Signup
          </button>
          <div className='absolute'>
            <img src={logo} alt="Logo" className="absolute top-4 left-4 w-16 h-16" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverPage;