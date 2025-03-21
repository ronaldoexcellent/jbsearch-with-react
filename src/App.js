import { BrowserRouter, Route, Routes } from "react-router-dom";
import jobs from "./Jobs";
import JobList from "./JobList";
import { JobDescription, ApplicationForm } from "./JobDesc";
// import logo from './logo.svg';

function App() {
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;