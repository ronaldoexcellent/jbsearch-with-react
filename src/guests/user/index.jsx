import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
import Notifications from "./../components/Notifications";
import AppliedJobs from "./pages/AppliedJobs";
import SavedJobs from "./pages/SavedJobs";

function UserIndex() {
    return (
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
    )
}

export default UserIndex;
