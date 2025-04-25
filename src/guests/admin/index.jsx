import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./pages/Dashboard";
import JobList from "./pages/JobList";
import GeneralProfile from "../components/Profile";
import jobs from "../utils/jobs";
import users from "../utils/users";
import UserList from "./pages/UserList";
import Notifications from "./../components/Notifications";

function AdminIndex() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route index element={<Dashboard />} />
                <Route path="/profile" element={<GeneralProfile guest="admin" />} />
                <Route path="/jobs" element={<JobList jobs={jobs} />} />
                <Route path="/users" element={<UserList users={users} />} />
                <Route path="/notifications" element={<Notifications />} />
            </Route>
        </Routes>
    )
}

export default AdminIndex;