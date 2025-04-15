import logo from "./../../components/logo.png"

const jobs = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "Tech Corp Innitiative",
        logo: logo,
        location: "Lagos, Nigeria",
        presence: "Hybrid",
        type: "Full-time",
        salary: "50000",
        salaryVal: "50,000/yr",
        description: (
            <>
                <h2 className="text-xl font-semibold text-gray-800">Job Description</h2>
                <p className="mt-2 text-gray-600 text-justify">
                    We are looking for a skilled Software Engineer to join our growing team. You'll work on cutting-edge projects, collaborate with a team of highly skilled engineers, and contribute to the future of technology.
                </p>
                <h3 className="text-lg font-semibold text-gray-800 mt-6">Responsibilities</h3>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Develop and maintain web applications.</li>
                    <li>Collaborate with cross-functional teams.</li>
                    <li>Write clean and efficient code.</li>
                    <li>Participate in code reviews.</li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-800 mt-6">Requirements</h3>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Proficient in JavaScript and React.</li>
                    <li>Experience with backend technologies.</li>
                    <li>Strong problem-solving skills.</li>
                    <li>Team player with excellent communication skills.</li>
                </ul>
            </>
        ),
        employer: "Mr. Leo",
        employerData: "+234 810 2143 848",
        applied: false,
        saved: false,
        status: ""
    },
    {
        id: 2,
        title: "Backend Engineer",
        company: "Innovatech Solutions Limited",
        logo: logo,
        location: "New York, United States",
        presence: "Remote",
        type: "Part-time",
        salary: "30000",
        salaryVal: "30,000/yr",
        description: (
            <>
                <h2 className="text-xl font-semibold text-gray-800">Job Description</h2>
                <p className="mt-2 text-gray-600 text-justify">
                    We are looking for a skilled Software Engineer to join our growing team. You'll work on cutting-edge projects, collaborate with a team of highly skilled engineers, and contribute to the future of technology.
                </p>
                <h3 className="text-lg font-semibold text-gray-800 mt-6">Responsibilities</h3>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Develop and maintain web applications.</li>
                    <li>Collaborate with cross-functional teams.</li>
                    <li>Write clean and efficient code.</li>
                    <li>Participate in code reviews.</li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-800 mt-6">Requirements</h3>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Proficient in JavaScript and React.</li>
                    <li>Experience with backend technologies.</li>
                    <li>Strong problem-solving skills.</li>
                    <li>Team player with excellent communication skills.</li>
                </ul>
            </>
        ),
        employer: "Mr. Leo",
        employerData: "+234 810 2143 848",
        applied: false,
        saved: false,
        status: ""
    },
    {
        id: 3,
        title: "Frontend Developer",
        company: "Tech Corp",
        logo: logo,
        location: "Lagos, Nigeria",
        presence: "On-site",
        type: "Full-time",
        salary: "50000",
        salaryVal: "50,000/yr",
        description: (
            <>
                <h2 className="text-xl font-semibold text-gray-800">Job Description</h2>
                <p className="mt-2 text-gray-600 text-justify">
                    We are looking for a skilled Software Engineer to join our growing team. You'll work on cutting-edge projects, collaborate with a team of highly skilled engineers, and contribute to the future of technology.
                </p>
                <h3 className="text-lg font-semibold text-gray-800 mt-6">Responsibilities</h3>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Develop and maintain web applications.</li>
                    <li>Collaborate with cross-functional teams.</li>
                    <li>Write clean and efficient code.</li>
                    <li>Participate in code reviews.</li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-800 mt-6">Requirements</h3>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Proficient in JavaScript and React.</li>
                    <li>Experience with backend technologies.</li>
                    <li>Strong problem-solving skills.</li>
                    <li>Team player with excellent communication skills.</li>
                </ul>
            </>
        ),
        employer: "Mr. Leo",
        employerData: "+234 810 2143 848",
        applied: false,
        saved: false,
        status: ""
    }
];

export default jobs;