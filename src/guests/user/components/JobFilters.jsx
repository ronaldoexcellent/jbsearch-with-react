function JobFilters({ jobs, setFilteredJobs }) {
    const [filter, setFilter] = useState("");
  
    const handleFilterChange = (e) => {
      const filterValue = e.target.value;
      setFilter(filterValue);
      setFilteredJobs(jobs.filter((job) => job.status.includes(filterValue)));
    };
  
    return (
      <select value={filter} onChange={handleFilterChange} className="border p-2 rounded">
        <option value="">All</option>
        <option value="Shortlisted">Shortlisted</option>
        <option value="Pending">Pending</option>
      </select>
    );
}

export default JobFilters;