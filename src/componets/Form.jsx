import { useState } from "react";
import Button from "./Button"; // assuming you have a reusable button component

export default function Form() {
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    feedback: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <div>

      <form onSubmit={handleSubmit} className="max-w-[60%] mt-20 mb-15 mx-auto border-2 border-[#667799] rounded p-4  p-8 rounded-lg  space-y-6" >

        <div className="text-center ">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">General Feedback</h2>
          <p className="text-gray-600 text-sm">
            Let us know what your overall experience has been.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="Name"
            placeholder="Name"
            value={form.Name}
            onChange={handleChange}
            className="w-[90%] mx-auto border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="Email"
            placeholder="Email"
            value={form.Email}
            onChange={handleChange}
            className="w-[90%] mx-auto border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="feedback"
            placeholder="Type Here"
            value={form.feedback}
            onChange={handleChange}
            rows={4}
            className="w-[90%] mx-auto border border-gray-300 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        <div className="text-center">
          <Button
            type="submit"
            text="Submit Feedback"
          />
        </div>
      </form>
    </div>
  );
}
