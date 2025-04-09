import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./pages/Dashboard";

function AdminIndex() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route index element={<Dashboard />} />
                <Route path="" element />
            </Route>
        </Routes>
    )
}

export default AdminIndex;