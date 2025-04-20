import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import GeneralProfile from "../components/Profile";
import FormBuilder from "./pages/JobForm";

function EmployerIndex() {
    // const JobList = React.lazy(() => import('./components/JobList'));
    // const Applicants = React.lazy(() => import('./pages/Applicants'));

    return (
        <Suspense fallback={<div className='text-3xl font-bold text-center italic'>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/jobs/*" element={<Jobs />} />
                    <Route path="/profile" element={<GeneralProfile guest="employer" />} />
                    <Route path="/formbuilder" element={<FormBuilder />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default EmployerIndex;