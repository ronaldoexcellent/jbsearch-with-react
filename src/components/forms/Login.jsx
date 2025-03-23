const Login = ({ onSignUpLinkClick }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100" id='form'>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <div className="text-right">
          <button onClick={ () => window.location.hash = '#main' } className={`fas fa-times transition duration-300 p-4 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white`}></button>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-gray-900">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email:</label>
            <div className="flex items-center border-b border-gray-500 py-2">
              <i className='fa fa-envelope text-gray-700 mr-2'></i>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 focus:outline-none"
                placeholder="Enter your email"
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
    </div>
  );
};

export default Login;
