import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router';
import CoverPage from './components/CoverPage';
import Login from './components/forms/Login';
import SignUp from './components/forms/Signup';
// import UserIndex from './guests/user/index';

// Users

// Employers
// import EmployerHome from './guests/employer/Home';
// import EmployersDashboard from "./guests/employer/pages/Dashboard";

const App = () => {
  // const JobList = React.lazy(() => import('./guests/user/pages/Jobs'));
  // const Applicants = React.lazy(() => import('./guests/employer/pages/Applicants'));

  return (
    <>
      {/* <BrowserRouter> */}
        <Routes>
          <Route index element={<CoverPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/user/*" element={<UserIndex />} /> */}
        </Routes>

        {/* For Employers */}
        {/* <Suspense fallback={<div className='text-3xl font-bold text-center italic'>Loading...</div>}>
          <Routes>
            <Route path="/employer/home" element={<EmployerHome />} />
            <Route path="/employer/dashboard" element={<EmployersDashboard />} />
            <Route path="/employer/jobs" element={<JobList />} />
            <Route path="/employer/applicants" element={<Applicants />} />
          </Routes>
        </Suspense> */}

        {/* For Admins */}
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;