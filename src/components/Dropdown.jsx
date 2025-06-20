import React from "react";

function Dropdown(props) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{props.label}</label>
      <select
        value={props.value}
        onChange={props.onChange}
        className="w-full border border-gray-300 p-2 rounded bg-white"
      >
        <option value="">Select {props.label}</option>
        <option value="Web Development">Web Development</option>
        <option value="UI/UX Design">UI/UX Design</option>
        <option value="Cybersecurity">Cybersecurity</option>
        <option value="Graphics Design">Graphics Design</option>
        <option value="Digital Marketing">Digital Marketing</option>
      </select>
    </div>
  );
}

export default Dropdown;
