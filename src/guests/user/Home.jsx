import { BrowserRouter, Routes, Route } from "react-router-dom";
import jobs from "../utils/Jobs";
import JobList from "../components/JobList";
import { JobDescription, ApplicationForm } from "../components/JobDesc";
// import logo from './logo.svg';
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
import AppliedJobs from "./pages/AppliedJobs";
import SavedJobs from "./pages/SavedJobs";

function UserHome() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobList />}>
          <Route
            path="/job/:id"
            element={<JobDescription job={jobs[0]} />} // Replace with dynamic data
          />
          <Route path="/apply" element={<ApplicationForm />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/applied-jobs" element={<AppliedJobs />} />
          <Route path="/saved-jobs" element={<SavedJobs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default UserHome;