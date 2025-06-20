import React from "react";

function InstructorSelector(props) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium mb-2">{props.label}</label>

      <input
        type="range"
        min="1"
        max="5"
        step="1"
        value={props.value}
        onChange={props.onChange}
        className="w-full"
      />

      <div className="flex justify-between text-xs mt-1 text-gray-600">
        <span>Poor</span>
        <span>Excellent</span>
      </div>
    </div>
  );
}

export default InstructorSelector;
