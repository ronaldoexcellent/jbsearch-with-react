import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SpinnerLoader from '../components/loaders/spinnerloader/SpinnerLoader';
import { startProgress, stopProgress } from '../components/loaders/nprogress/ProgressUtils';
import Home from './Home';
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
import Notifications from "./../components/Notifications";
import AppliedJobs from "./pages/AppliedJobs";
import SavedJobs from "./pages/SavedJobs";

function UserIndex() {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        startProgress();
        setLoading(true);

        const timer = setTimeout(() => {
            stopProgress();
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [location]);

    return (
        <>
            {loading && <SpinnerLoader />}
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/applied-jobs" element={<AppliedJobs />} />
                    <Route path="/saved-jobs" element={<SavedJobs />} />
                </Route>
            </Routes>
        </>
    )
}

export default UserIndex;
