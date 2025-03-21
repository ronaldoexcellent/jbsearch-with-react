import Header from "../../components/Header";
import JobList from "../../components/JobList";

function Jobs({ theme }) {
    return (
        <>
            <Header theme={theme} AppTitle="Jobs" />
            <JobList theme={theme} />
        </>
    )
}

export default Jobs;