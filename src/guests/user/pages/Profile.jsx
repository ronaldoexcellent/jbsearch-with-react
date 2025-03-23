import { useState } from "react";

function Profile() {
  const [skills, setSkills] = useState([]);
  const [resume, setResume] = useState(null);

  const handleCVUpload = (e) => setResume(e.target.files[0]);

  return (
    <>
      <h1 className="underline p-4 text-lg md:text-2xl mb-3 font-extrabold text-center">Profile</h1>

      <div className={`max-w-4xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md`}>
        <form>
          <label className="block mb-2 font-semibold">Name</label>
          <input className={`w-full border border-gray-300 rounded-md p-2 mb-4`} type="text" placeholder="Enter your name" />

          <label className="block mb-2 font-semibold">Skills</label>
          <input
            type="text"
            className={`w-full border border-gray-300 rounded-md p-2`}
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