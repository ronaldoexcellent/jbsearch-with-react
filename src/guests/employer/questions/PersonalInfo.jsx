import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import jobs from "../../utils/jobs";

function PersonalInfo({ i, p, n }) {
  // const [q, setQ] = useState([]);
  const initialQuestions = jobs[i]?.questions?.PersonalInfo || [];
  const [q, setQ] = useState(
    initialQuestions.map((item) => ({ ...item, disabled: true, temp: "" }))
  );

  // Adds a new question into the state.
  const addQuestion = () => {
    setQ((prev) => [
      ...prev,
      {
        question: "",
        responseType: "",
        response: "",
        temp: "",
        disabled: false,
      },
    ]);
  };

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

  const toggleEdit = (index) => {
    setQ((prev) => 
      prev.map((item, idx) => {
        if (idx === index) {
          if (!item.disabled) {
            if (!item.question) {
              toast.error("All fields are required!");
              return { ...item, temp: "This question's spaces cannot be left empty!" };
            } else {
              toast.success("Saved!");
              return { ...item, disabled: true, temp: "" };
            }
          } else {
            return { ...item, disabled: false, temp: "" };
          }
        }
        return item;
      })
    );
  };

  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      // exit={{ x: "100vw" }}
      transition={{ type: "tween", duration: 0.5 }}
      className="p-3 mb-4 bg-gray-300 text-center font-sans font-bold text-sm text-gray-600"
    >
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

      <div className="flex align-center gap-2 justify-center">
        <button
          className="py-2 px-3 bg-green-500 text-white rounded hover:bg-green-700 fa fa-plus"
          onClick={addQuestion}
          title="Add Question"
        >
        </button>

        <button
          className="py-2 px-4 bg-purple-800 hover:bg-gray-700 text-white rounded fa fa-caret-left"
          onClick={p}
          title="Previous"
        >
        </button>

        <button
          className="py-2 px-4 bg-purple-800 hover:bg-gray-700 text-white rounded fa fa-caret-right"
          onClick={n}
          title="Next"
        >
        </button>
      </div>
    </motion.div>
  );
}

export default PersonalInfo;