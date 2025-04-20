// import { useState } from "react";
// import { toast } from 'react-hot-toast';
// import Jobs from "../utils/Jobs";

// function PersonalInfo({ i }) {
//     const [disabled, setDisabled] = useState(true);
//     const [q, setQ] = useState([]);

//     function dis(qIndex) {
//         const inq = Jobs[0].questions.PersonalInfo[qIndex];
//         setDisabled(!disabled);
//         if (!disabled) toast.success('Saved!');
//         if (!inq.question || !inq.responseType || !inq.response) inq.temp = "This question's spaces cannot be left empty!";
//     }

//     function addQuestion() {
//         setQ(c => c.push({
//             question: '',
//             responseType: '',
//             response: '',
//             temp: ''
//         }));
//     }

//     return (
//         <div className="p-3 mb-4 bg-gray-300 bottom text-center font-sans font-bold text-sm text-gray-600">
//             <div
//                 className="py-2 px-4 w-full bg-blue-500 text-white rounded mb-4"
//             >
//                 Personal Info
//             </div>
//             {q.map((k) => (
//                 k.map((j, qIndex) => (
//                     <div key={qIndex}>
//                         <input
//                             type="text"
//                             placeholder={`Question ${qIndex}`}
//                             value={j.question}
//                             // onChange={(e) => setQ(sq => ({
//                             //     ...sq, question: e.target.value
//                             // }))}
//                             className="block w-full p-2 mb-2 border rounded"
//                             disabled={disabled}
//                             required
//                         />
//                         <select
//                             key={qIndex}
//                             className="block w-full p-2 mb-2 border rounded cursor-pointer"
//                             value={j.responseType}
//                             // onChange={(e) => setQ(sq => ({
//                             //     ...sq, responseType: e.target.value
//                             // }))}
//                             disabled={disabled}
//                         >
//                             <option value=""> Response Type </option>
//                             <option value="text"> Text </option>
//                             <option value="large-text"> Large Text </option>
//                         </select>

//                         {
//                             (j.responseType === "text") ?
//                                 <input
//                                     key={qIndex}
//                                     type="text"
//                                     placeholder={`Response ${qIndex}`}
//                                     value={j.response}
//                                     // onChange={(e) => setQ(sq => ({
//                                     //     ...sq, response: e.target.value
//                                     // }))}
//                                     className="block w-full p-2 mb-2 border rounded"
//                                     disabled={disabled}
//                                     required
//                                 /> :
//                             (j.responseType === "large-text") ?
//                                 <textarea key={qIndex} value={j.response}
//                                 // onChange={(e) => setQ(sq => ({
//                                 //     ...sq, response: e.target.value
//                                 // }))}
//                                 className="block w-full p-2 mb-2 border rounded" disabled={disabled} required></textarea> : ''
//                         }

//                         { j.temp && ( <span className="text-red-500 text-sm">* { j.temp } </span> ) }

//                         <div className="bg-gray-300 bottom flex justify-between text-center font-sans font-bold p-3 text-sm text-gray-600">
//                             <button
//                                 onClick={(e) => dis(e, qIndex)}
//                                 className={`bg-gray-400 text-gray-800 py-3 px-4 cursor-pointer hover:shadow-xl hover:shadow-gray-700 hover:outline hover:outline-white transition duration-300'}`}
//                             >
//                                 { disabled ? "Edit" : "Lock" }
//                             </button>
//                             <button
//                                 onClick={() => delete q[qIndex]}
//                                 className={`bg-red-600 text-white py-3 px-4 cursor-pointer hover:shadow-xl hover:shadow-gray-700 hover:outline hover:outline-white transition duration-300'}`}
//                             >
//                                 Delete
//                             </button>
//                         </div>
//                     </div>
//                 ))
//             ))}

//             <button
//                 className="py-1 px-3 bg-green-500 text-white rounded"
//                 onClick={addQuestion}
//             >
//                 Add Question
//             </button>
//         </div>
//     )
// }
// export default PersonalInfo;



// Below is a completely reworked version of your component. In this version, we “own” the list of personal questions (instead of mixing in external data via Jobs), and each question object carries its own editing state. In addition, the code no longer uses improper mutations (like using push or the delete operator on state), and all updates are performed immutably so that React can re-render everything perfectly.

// Key changes include:

// State Structure: We now store an array of question objects in state. Each object has its own properties (question, responseType, response, any temporary error message, and whether its fields are currently locked or editable).

// Adding a Question: Instead of using push (which returns the new length), we create a new array using the spread operator. This avoids common pitfalls with state updates.

// Updating a Field: We use a helper function (updateQuestion) to update any particular field for a question without mutating state.

// Toggling Edit/Lock: The toggleEdit function updates the particular question’s locked state. When locking a question, it checks if any field is empty. If so, it sets an appropriate error message (and even shows a toast); otherwise, it notifies the user that the changes have been saved.

// Deleting a Question: Instead of using the JavaScript delete operator, we filter out the selected question from our state.

// Below is the complete, fixed code:

// jsx
import { useState } from "react";
import { toast } from "react-hot-toast";
// import Jobs from "../utils/Jobs"; // Remove if not needed

function PersonalInfo({ i }) {
  // Option 1: Start with an empty list
  const [q, setQ] = useState([]);
  
  // Option 2: Or preload from Jobs if desired:
  // const initialQuestions = Jobs[0]?.questions?.PersonalInfo || [];
  // const [q, setQ] = useState(
  //   initialQuestions.map((item) => ({ ...item, disabled: true, temp: "" }))
  // );

  // Adds a new question into the state.
  const addQuestion = () => {
    setQ((prev) => [
      ...prev,
      {
        question: "",
        responseType: "",
        response: "",
        temp: "",
        disabled: true, // Start locked
      },
    ]);
  };

  // Updates a specific field within a given question.
  const updateQuestion = (index, field, value) => {
    setQ((prev) =>
      prev.map((item, idx) =>
        idx === index ? { ...item, [field]: value, temp: "" } : item
      )
    );
  };

  // Deletes the question at the given index.
  const deleteQuestion = (index) => {
    setQ((prev) => prev.filter((_, idx) => idx !== index));
  };

  // Toggle the edit state for the question at a given index.
  // When locking, check that all fields are filled before accepting.
  const toggleEdit = (index) => {
    setQ((prev) =>
      prev.map((item, idx) => {
        if (idx === index) {
          // If currently editing (fields unlocked)
          if (!item.disabled) {
            // Validate the fields; if any value is empty, set an error message.
            if (!item.question || !item.responseType || !item.response) {
              toast.error("All fields are required!");
              return { ...item, temp: "This question's spaces cannot be left empty!" };
            } else {
              toast.success("Saved!");
              return { ...item, disabled: true, temp: "" };
            }
          } else {
            // Unlock the fields to allow editing.
            return { ...item, disabled: false, temp: "" };
          }
        }
        return item;
      })
    );
  };

  return (
    <div className="p-3 mb-4 bg-gray-300 text-center font-sans font-bold text-sm text-gray-600">
      <div className="py-2 px-4 w-full bg-gray-800 text-white rounded mb-4">
        Personal Info
      </div>
      {q.map((item, index) => (
        <div key={index} className="mb-4 border p-4 rounded">
          <input
            type="text"
            placeholder={`Question ${index + 1}`}
            value={item.question}
            onChange={(e) => updateQuestion(index, "question", e.target.value)}
            className="block w-full p-2 mb-2 border rounded"
            disabled={item.disabled}
            required
          />
          <select
            value={item.responseType}
            onChange={(e) => updateQuestion(index, "responseType", e.target.value)}
            className="block w-full p-2 mb-2 border rounded cursor-pointer"
            disabled={item.disabled}
          >
            <option value="">Response Type</option>
            <option value="text">Text</option>
            <option value="large-text">Large Text</option>
          </select>

          {item.responseType === "text" && (
            <input
              type="text"
              placeholder={`Response ${index + 1}`}
              value={item.response}
              onChange={(e) => updateQuestion(index, "response", e.target.value)}
              className="block w-full p-2 mb-2 border rounded"
              disabled={item.disabled}
              required
            />
          )}
          {item.responseType === "large-text" && (
            <textarea
              value={item.response}
              onChange={(e) => updateQuestion(index, "response", e.target.value)}
              className="block w-full p-2 mb-2 border rounded"
              disabled={item.disabled}
              required
            ></textarea>
          )}

          {item.temp && <span className="text-red-500 text-sm">* {item.temp}</span>}

          <div className="bg-gray-300 flex justify-between font-sans font-bold p-3 text-sm text-gray-600">
            <button
              onClick={() => toggleEdit(index)}
              className="bg-gray-400 text-gray-800 py-3 px-4 cursor-pointer hover:shadow-xl hover:shadow-gray-700 hover:outline hover:outline-white transition duration-300"
            >
              {item.disabled ? "Edit" : "Lock"}
            </button>
            <button
              onClick={() => deleteQuestion(index)}
              className="bg-red-600 text-white py-3 px-4 cursor-pointer hover:shadow-xl hover:shadow-gray-700 hover:outline hover:outline-white transition duration-300"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <button
        className="py-2 px-3 bg-green-500 text-white rounded hover:bg-green-700"
        onClick={addQuestion}
      >
        Add Question
      </button>
    </div>
  );
}

export default PersonalInfo;
// A Few Extra Thoughts
// Preloading Data: If you want to preload your personal info from the Jobs object, simply initialize state like this:

// jsx
// const initialQuestions = Jobs[0]?.questions?.PersonalInfo || [];
// const [q, setQ] = useState(
//   initialQuestions.map((item) => ({ ...item, disabled: true, temp: "" }))
// );
// This way, the form is populated with existing questions.

// Per-Question Editability: By storing the disabled property within each question, you allow each entry to be independently editable. This is useful when one question needs changes while others remain locked.

// User Feedback: The use of react-hot-toast provides immediate feedback when a question is successfully locked (saved) or when fields are missing.

// Does this solution help clarify state immutability and per-item updates in React? Let me know if you’d like to explore even more advanced patterns (such as moving these into separate components or using a form library) or any further refinements!