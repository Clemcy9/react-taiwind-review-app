import React from "react";

function Inputbox(props) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{props.label}</label>
      <input
        type={props.type || "text"}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className="w-full border border-gray-300 p-2 rounded"
      />
    </div>
  );
}

export default Inputbox;
