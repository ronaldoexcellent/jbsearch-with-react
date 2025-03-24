function ProgressBar({ status }) {
    const stages = ["Applied", "Shortlisted", "Interview", "Offer"];
    const currentStage = stages.indexOf(status);
  
    return (
      <div className="flex space-x-2">
        {stages.map((stage, index) => (
          <div key={index} className="flex-1">
            <div className={`h-2 ${index <= currentStage ? "bg-blue-500" : "bg-gray-300"} rounded-full`}></div>
            <p className={`text-sm mt-1 ${index <= currentStage ? "text-blue-500" : "text-gray-400"}`}>{stage}</p>
          </div>
        ))}
      </div>
    );
}

export default ProgressBar;