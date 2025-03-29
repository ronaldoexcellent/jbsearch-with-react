import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Dashboard from "./pages/Dashboard";

function EmployerIndex() {
    const JobList = React.lazy(() => import('./../user/pages/Jobs'));
    const Applicants = React.lazy(() => import('./pages/Applicants'));

    return (
        <Suspense fallback={<div className='text-3xl font-bold text-center italic'>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/jobs" element={<JobList />} />
                    <Route path="/applicants" element={<Applicants />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default EmployerIndex;