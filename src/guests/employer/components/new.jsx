Below is a complete, integrated solution that combines both the detailed view (formerly “Applicants”) and the card/grid view (formerly “ApplicantList”) into one dashboard. In this example, we lift the applicant state into a parent component so that both child components share the same data and update functions. They work together perfectly—when you change (e.g. accept/reject or toggle options) an applicant in the detailed view, the card view immediately reflects those changes. You can also filter and sort the list of applicants in the card view independently.

To avoid confusion between the differing data shapes, we’ve extended each applicant object to include properties needed by both views (such as name, email, phone, and date). In your real application you’d probably fetch or derive these from a backend, but for illustration the initial list is created inline.

Below is the complete code:

jsx
import { useState, useMemo } from "react";
import { toast } from "react-hot-toast";

// Detailed view component (formerly Applicants)
function ApplicantsDetail({ Jobs, applicants, toggleOptions, accept, reject }) {
  return (
    <div className="max-w-4xl w-full sm:w-10/12 md:w-[550px] sm:my-10 p-6 bg-white shadow-md overflow-y-auto rounded-lg relative">
      <h1 className="text-xl font-bold mb-4">
        Applications For {Jobs.title}, at {Jobs.company}, {Jobs.location}
      </h1>
      {applicants.map((applicant) => (
        <details
          key={applicant.id}
          id={`Details-for-${applicant.name}`}
          className="border p-2 mb-4 w-full relative"
        >
          <summary className="cursor-pointer">
            <div className="flex justify-between items-center">
              <span>{applicant.name}</span>
              <span
                className="fa fa-menu cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleOptions(applicant.id);
                }}
              >
                :
              </span>
              {/* Render options if toggled */}
              {applicant.options && (
                <div className="absolute top-8 right-0 bg-blue-300 rounded-lg w-[200px] cursor-pointer flex flex-col items-center z-10">
                  <button className="hover:bg-gray-800 py-2 px-3 w-full hover:text-white font-bold">
                    View <span className="hidden md:flex">Application</span>
                  </button>
                  <button className="hover:bg-gray-800 py-2 px-3 w-full hover:text-white font-bold">
                    <span className="hidden md:flex">See</span> Profile
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      accept(applicant.id);
                    }}
                    className="hover:bg-green-800 py-2 px-3 w-full hover:text-white font-bold"
                  >
                    Accept
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      reject(applicant.id);
                    }}
                    className="hover:bg-red-600 py-2 px-3 w-full hover:text-white font-bold"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
            <br />
            <span
              className={`text-${
                applicant.status === "Accepted"
                  ? "green"
                  : applicant.status === "Rejected"
                  ? "red"
                  : "slate"
              }-700 italic font-bold`}
            >
              {applicant.status}
            </span>
          </summary>

          <details className="border p-2 w-full mt-2">
            <summary>Personal Info</summary>
            {/* Additional personal details can go here */}
          </details>

          <details className="border p-2 w-full mt-2">
            <summary>Work Experience</summary>
          </details>

          <details className="border p-2 w-full mt-2">
            <summary>Education</summary>
          </details>

          <details className="border p-2 w-full mt-2">
            <summary>Summary</summary>
          </details>
        </details>
      ))}
    </div>
  );
}

// Card / grid view component (formerly ApplicantList)
function ApplicantList({ applicants }) {
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
    <div className="bg-white p-6 rounded shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4">Applicants</h2>

      {/* Filter & Sort Controls */}
      <div className="flex flex-wrap gap-4 mb-4">
        <select
          className="border p-2 rounded"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="Accepted">Accepted</option>
          <option value="pending">Pending</option>
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

      {/* Applicants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSortedApplicants.map((applicant) => (
          <div
            key={applicant.id}
            className="p-4 border rounded shadow hover:shadow-lg transform hover:scale-105 transition-all"
          >
            <h3 className="font-bold text-lg">{applicant.name}</h3>
            <p>
              Email:{" "}
              <span className="text-gray-600">{applicant.email}</span>
            </p>
            <p>
              Phone:{" "}
              <span className="text-gray-600">{applicant.phone}</span>
            </p>
            <p>
              Status:{" "}
              <span className="text-blue-500">{applicant.status}</span>
            </p>
            <p>
              Applied on:{" "}
              <span className="text-gray-600">{applicant.date}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Combined parent component that holds common state and functions.
function ApplicantsDashboard({ Jobs }) {
  // Define an initial list of applicants.
  const initialApplicants = [
    {
      id: 1,
      name: "User10203",
      email: "user10203@example.com",
      phone: "+234700000001",
      date: "2025-04-01",
      status: "pending",
      options: false,
    },
    {
      id: 2,
      name: "User11203",
      email: "user11203@example.com",
      phone: "+234700000002",
      date: "2025-04-02",
      status: "pending",
      options: false,
    },
    {
      id: 3,
      name: "User508",
      email: "user508@example.com",
      phone: "+234700000003",
      date: "2025-04-03",
      status: "pending",
      options: false,
    },
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
      {/* Detailed accordion-style view */}
      <ApplicantsDetail
        Jobs={Jobs}
        applicants={applicants}
        toggleOptions={toggleOptions}
        accept={accept}
        reject={reject}
      />

      {/* Card view with filtering & sorting */}
      <ApplicantList applicants={applicants} />
    </div>
  );
}

export default ApplicantsDashboard;
How This Works
Shared State:  The parent component (ApplicantsDashboard) holds the complete list of applicants. Every applicant now has a unique id and common fields (name, email, phone, date, status, options). We provide functions for toggling options, accepting, and rejecting an applicant—all of which update the shared state immutably.

Detailed View:  ApplicantsDetail shows a more in-depth, accordion-style view. Each applicant’s options (e.g. “Accept” or “Reject”) are toggled by clicking the menu. When an action is taken, the shared state is updated and both views refresh accordingly.

Filtered & Sorted Card View:  ApplicantList lets you filter applicants by status (for example, All, Accepted, Pending, or Rejected) and sort them by name or date. This view uses a useMemo hook to efficiently recalc the filtered and sorted list whenever the state or controls change.

User Feedback:  Using react-hot-toast, the dashboard displays success or error messages when an applicant is accepted or rejected.

Feel free to tailor the design (classes, structure, and data fields) or separate the child components into their own files as your project grows. Would you like to explore additional enhancements—perhaps incorporating more advanced state management or further customizing the UI?

