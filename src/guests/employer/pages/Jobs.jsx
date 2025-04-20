import { useNavigate } from "react-router";
import jobs from "../../utils/Jobs";
import JobList from "../components/JobList";

function Jobs() {
    const nav = useNavigate();

    return (
        <>
            <button onClick={() => nav("/employer/formbuilder")}>Create Jobs</button>
            <JobList jobs={jobs} />
        </>
    )
}

export default Jobs;