import { useState } from "react";
import Header from "../../components/Header";

function Profile({ theme }) {
  const [skills, setSkills] = useState([]);
  const [resume, setResume] = useState(null);

  const handleCVUpload = (e) => setResume(e.target.files[0]);

  return (
    <>
      <Header AppTitle="Profile" />

      <div className={`max-w-4xl mx-auto p-4 bg-${theme}-100 rounded-lg shadow-md`}>
        <form>
          <label className="block mb-2 font-semibold">Name</label>
          <input className={`w-full border border-${theme}-300 rounded-md p-2 mb-4`} type="text" placeholder="Enter your name" />

          <label className="block mb-2 font-semibold">Skills</label>
          <input
            type="text"
            className={`w-full border border-${theme}-300 rounded-md p-2`}
            placeholder="Add skills, separated by commas"
            onBlur={(e) => setSkills(e.target.value.split(","))}
            defaultValue={skills}
          />

          <label className="block mb-2 font-semibold">Upload CV</label>
          <input className="mb-4" type="file" onChange={handleCVUpload} value={resume} />

          <button type="submit" className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600">
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default Profile;