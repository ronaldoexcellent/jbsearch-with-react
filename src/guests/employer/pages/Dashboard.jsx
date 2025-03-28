const EmployersDashboard = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">Dashboard{children}</div>
    </div>
  );
};

export default EmployersDashboard;