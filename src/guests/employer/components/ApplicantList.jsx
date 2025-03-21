import { useState, useMemo } from "react";

const ApplicantList = ({ applicants }) => {
  const [statusFilter, setStatusFilter] = useState("");
  const [sortedApplicants, setSortedApplicants] = useState(applicants);

  // Filter and Sort Logic
  const filterApplicants = useMemo(() => {
    let filtered = applicants;
    if (statusFilter) {
      filtered = applicants.filter(
        (applicant) => applicant.status === statusFilter
      );
    }
    setSortedApplicants(filtered);
  }, [statusFilter, applicants]);

  const sortApplicants = (key) => {
    const sorted = [...sortedApplicants].sort((a, b) =>
      a[key].localeCompare(b[key])
    );
    setSortedApplicants(sorted);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Applicants</h2>

      {/* Filter & Sort Controls */}
      <div className="flex flex-wrap gap-4 mb-4">
        <select
          className="border p-2 rounded"
          onChange={(e) => {
            setStatusFilter(e.target.value);
            filterApplicants();
          }}
        >
          <option value="">All Statuses</option>
          <option value="Under Review">Under Review</option>
          <option value="Hired">Hired</option>
          <option value="Rejected">Rejected</option>
        </select>
        <button
          onClick={() => sortApplicants("name")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Sort by Name
        </button>
        <button
          onClick={() => sortApplicants("date")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Sort by Date
        </button>
      </div>

      {/* Applicants List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedApplicants.map((applicant, index) => (
          <div
            key={index}
            className="p-4 border rounded shadow hover:shadow-lg transform hover:scale-105"
          >
            <h3 className="font-bold text-lg">{applicant.name}</h3>
            <p>Email: <span className="text-gray-600">{applicant.email}</span></p>
            <p>Phone: <span className="text-gray-600">{applicant.phone}</span></p>
            <p>Status: <span className="text-blue-500">{applicant.status}</span></p>
            <p>Applied on: <span className="text-gray-600">{applicant.date}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicantList;