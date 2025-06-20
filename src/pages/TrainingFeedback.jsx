import React, { useState } from "react";
import { NavLink } from "react-router-dom"; 
import Inputbox from "../components/Inputbox";
import Dropdown from "../components/Dropdown";
import Radio from "../components/Radio";
import InstructorSelector from "../components/InstructorSelector";
import Selector from "../components/Selector";
import TextArea from "../components/TextArea";
import Button from "../components/Button"; 

function TrainingFeedback() {
  const [instructorName, setInstructorName] = useState("");
  const [course, setCourse] = useState("");
  const [trainingRating, setTrainingRating] = useState(5);
  const [enjoyed, setEnjoyed] = useState("");
  const [expectationsMet, setExpectationsMet] = useState("");
  const [instructorKnowledge, setInstructorKnowledge] = useState(3);
  const [instructorDelivery, setInstructorDelivery] = useState(3);
  const [environmentRating, setEnvironmentRating] = useState(3);
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedback = {
      instructorName,
      course,
      trainingRating,
      enjoyed,
      expectationsMet,
      instructorKnowledge,
      instructorDelivery,
      environmentRating,
      comments,
    };
    console.log("Feedback submitted:", feedback);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Training Feedback</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Inputbox
          label="Instructor's Name"
          value={instructorName}
          onChange={(e) => setInstructorName(e.target.value)}
          placeholder="Enter the instructor's name"
        />

        <Dropdown
          label="Select Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          options={[
            "Web Development",
            "UI/UX Design",
            "Cybersecurity",
            "Graphics Design",
            "Digital Marketing",
          ]}
        />

        <Selector
          label="On a scale of 1–10, how would you rate the training?"
          value={trainingRating}
          onChange={(e) => setTrainingRating(e.target.value)}
          min={1}
          max={10}
        />

        <Radio
          label="Did you enjoy the training?"
          name="enjoyed"
          value={enjoyed}
          onChange={(e) => setEnjoyed(e.target.value)}
          options={["Yes", "No"]}
        />

        <Radio
          label="Did the training meet your expectations?"
          name="expectations"
          value={expectationsMet}
          onChange={(e) => setExpectationsMet(e.target.value)}
          options={["Yes", "No"]}
        />

        <InstructorSelector
          label="Rate the instructor’s knowledge of the subject"
          value={instructorKnowledge}
          onChange={(e) => setInstructorKnowledge(e.target.value)}
        />

        <InstructorSelector
          label="Rate the instructor’s delivery and manner"
          value={instructorDelivery}
          onChange={(e) => setInstructorDelivery(e.target.value)}
        />

        <InstructorSelector
          label="Rate the training environment (internet, comfort, etc.)"
          value={environmentRating}
          onChange={(e) => setEnvironmentRating(e.target.value)}
        />

        <TextArea
          label="Any other comments or suggestions?"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Write your feedback here"
        />

        <Button type="submit" className="w-full">
          Submit
        </Button>

        {/* ✅ Back to Home Button */}
        <NavLink
          to="/"
          className="mt-4 block text-center text-sm text-purple-600 underline hover:text-purple-800"
        >
          Back to Home
        </NavLink>
      </form>
    </div>
  );
}

export default TrainingFeedback;
