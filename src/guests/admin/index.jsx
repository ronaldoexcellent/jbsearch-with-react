import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./pages/Dashboard";
import JobList from "./pages/JobList";
import GeneralProfile from "../components/Profile";
import jobs from "../utils/Jobs";

function AdminIndex() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route index element={<Dashboard />} />
                <Route path="/profile" element={<GeneralProfile guest="admin" />} />
                <Route path="/jobs" element={<JobList jobs={jobs} />} />
            </Route>
        </Routes>
    )
}

export default AdminIndex;