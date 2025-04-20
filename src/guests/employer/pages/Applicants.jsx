import { useState, useMemo } from "react";
import { toast } from "react-hot-toast";

// Card / grid view component (formerly ApplicantList)
function ApplicantList({ Jobs, applicants, toggleOptions, accept, reject  }) {
  const [statusFilter, setStatusFilter] = useState("");
  const [sortKey, setSortKey] = useState("");

  // Compute filtered and sorted applicants.
  const filteredSortedApplicants = useMemo(() => {
    let filtered = applicants;
    if (statusFilter) {
      filtered = filtered.filter(
        (applicant) => applicant.status === statusFilter
      );
    }
    if (sortKey) {
      filtered = [...filtered].sort((a, b) =>
        a[sortKey]?.localeCompare(b[sortKey])
      );
    }
    return filtered;
  }, [applicants, statusFilter, sortKey]);

  return (
    <div className="grid grid-row-4 md:block max-w-4xl w-full sm:w-11/12 md:w-[650px] lg:w-[850px] md:mt-2 p-4 pb-8 md:p-6 h-[93%] m-auto overflow-hidden bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-2">Applicants</h2>
      <h4 className="text-lg font-bold mb-4">
        For {Jobs.title}, at {Jobs.company}, {Jobs.location}
      </h4>
      {/* Filter & Sort Controls */}
      <div className="flex flex-wrap justify-between md:justify-center md:gap-3 mb-4">
        <select
          className="border p-2 rounded cursor-pointer"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="Accepted">Accepted</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>
        <button
          onClick={() => setSortKey("name")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortKey("date")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Sort by Date
        </button>
      </div>
      <hr className="mt-4 mb-3 border-2 border-gray-500" />
      {/* Applicants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 h-full overflow-x-hidden overflow-y-auto content-start">
        {filteredSortedApplicants.map((applicant) => (
          <div
            key={applicant.id}
            className="p-4 border rounded shadow hover:shadow-lg transform hover:scale-105 transition-all"
          >
            <h3 className="font-bold text-lg">{applicant.name}</h3>
            <p>
                Status:{" "}
                <span
                  className={`${
                    (applicant.status === "Accepted")
                      ? "text-green-600"
                      : (applicant.status === "Rejected")
                      ? "text-red-600"
                      : "text-blue-600"
                  } italic font-bold`}
                >
                  {applicant.status}
                </span>
            </p>
            <p>
              Applied on:{" "}
              <span className="text-gray-700 font-bold">{applicant.date}</span>
            </p>
            <p>
                <button
                    className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 mt-3 hover:border-white hover:shadow-xl border-2"
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleOptions(applicant.id);
                    }}
                >
                  Actions &nbsp; <i className={`fa ${applicant.options? 'rotate-180' : ' rotate-0'} fa-caret-up transition duration-300`}></i>
                </button>
            </p>
                
            {/* Render options if toggled */}
            {applicant.options && (
                <div
                    className="top-36 bg-gray-300 rounded-lg shadow-xl w-full md:w-[200px] cursor-pointer flex md:grid md:fixed gap-2 items-center z-[600]"
                >
                  <button className="rounded-lg hover:bg-gray-800 py-2 px-3 w-full hover:text-white font-bold">
                      View
                  </button>
                  <button className="rounded-lg hover:bg-gray-800 py-2 px-3 w-full hover:text-white font-bold">
                      Profile
                  </button>
                  <button
                      onClick={(e) => {
                        e.stopPropagation();
                        accept(applicant.id);
                      }}
                      className="rounded-lg hover:bg-green-800 py-2 px-3 w-full hover:text-white font-bold"
                  >
                      Accept
                  </button>
                  <button
                      onClick={(e) => {
                        e.stopPropagation();
                        reject(applicant.id);
                      }}
                      className="rounded-lg hover:bg-red-600 py-2 px-3 w-full hover:text-white font-bold"
                  >
                      Reject
                  </button>
                  {/* <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleOptions(applicant.id);
                      }}
                      className="rounded-lg hover:bg-red-600 py-2 px-3 w-full hover:text-white font-bold"
                  >
                      &times; Close
                  </button> */}
                </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Combined parent component that holds common state and functions.
function Applicants({ Jobs }) {
  // Define an initial list of applicants.
  const initialApplicants = [
    {
      id: 1,
      name: "User10203",
      date: "2025-04-02",
      status: "Pending",
      options: false,
    },
    {
      id: 2,
      name: "User508",
      date: "2025-04-03",
      status: "Pending",
      options: false,
    },
    {
      id: 3,
      name: "User11203",
      date: "2025-04-01",
      status: "Pending",
      options: false,
    },
    {
      id: 4,
      name: "User10203",
      date: "2025-04-02",
      status: "Pending",
      options: false,
    },
    {
      id: 5,
      name: "User508",
      date: "2025-04-03",
      status: "Pending",
      options: false,
    },
    {
      id: 6,
      name: "User11203",
      date: "2025-04-01",
      status: "Pending",
      options: false,
    },
    {
      id: 7,
      name: "User11203",
      date: "2025-04-01",
      status: "Pending",
      options: false,
    },
    {
      id: 8,
      name: "User10203",
      date: "2025-04-02",
      status: "Pending",
      options: false,
    },
    {
      id: 9,
      name: "User508",
      date: "2025-04-03",
      status: "Pending",
      options: false,
    },
    {
      id: 10,
      name: "User11203",
      date: "2025-04-01",
      status: "Pending",
      options: false,
    }
  ];

  const [applicants, setApplicants] = useState(initialApplicants);

  // Toggle the display of options for a particular applicant.
  const toggleOptions = (id) => {
    setApplicants((prevApplicants) =>
      prevApplicants.map((applicant) =>
        applicant.id === id
          ? { ...applicant, options: !applicant.options }
          : applicant
      )
    );
  };

  // Update an applicant's status to "Accepted".
  const accept = (id) => {
    setApplicants((prevApplicants) =>
      prevApplicants.map((applicant) =>
        applicant.id === id
          ? { ...applicant, status: "Accepted", options: false }
          : applicant
      )
    );
    toast.success("Applicant Accepted!");
  };

  // Update an applicant's status to "Rejected".
  const reject = (id) => {
    setApplicants((prevApplicants) =>
      prevApplicants.map((applicant) =>
        applicant.id === id
          ? { ...applicant, status: "Rejected", options: false }
          : applicant
      )
    );
    toast.error("Applicant Rejected!");
  };

  return (
    <div className="space-y-8">
        {/* Card view with filtering & sorting */}
        <ApplicantList 
            Jobs={Jobs}
            applicants={applicants}
            toggleOptions={toggleOptions}
            accept={accept}
            reject={reject}
        />
    </div>
  );
}

export default Applicants;