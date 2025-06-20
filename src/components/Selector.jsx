import React from "react";

function Selector(props) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium mb-2">{props.label}</label>
      <input
        type="range"
        min={props.min || 1}
        max={props.max || 10}
        value={props.value}
        onChange={props.onChange}
        className="w-full"
      />
      <div className="text-right text-xs mt-1 text-gray-500">
        {props.value}
      </div>
    </div>
  );
}

export default Selector;
