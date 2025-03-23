import backgroundImage from './bg.png';
import logo from './logo.svg';

const CoverPage = ({ onLoginButtonClick }) => {
  return (
    <div
      className="flex items-center justify-center h-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      id='main'
    >
      <img src={logo} alt="Logo" className="absolute top-4 left-4 w-16 h-16" />
      <div className="bg-white bg-opacity-75 p-10 rounded-md shadow-lg">
        <h1 className="text-6xl font-bold mb-4 text-gray-900">Welcome to JBSearch</h1>
        <p className="text-lg text-gray-700 font-bold italic">
          Find jobs, employ & get employed...
        </p>
        <button
          className="mt-6 px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={onLoginButtonClick}
        >
          Login / Signup
        </button>
      </div>
    </div>
  );
};

export default CoverPage;