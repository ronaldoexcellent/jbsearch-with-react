import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";

function EmployerHome() {
    const JobList = React.lazy(() => import('./pages/Jobs'));
    const Applicants = React.lazy(() => import('./pages/Applicants'));

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/jobs" element={<JobList />} />
                    <Route path="/applicants" element={<Applicants />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default EmployerHome;