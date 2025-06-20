import React from "react";

function RadioGroup(props) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">{props.label}</label>
      <div className="flex gap-4">
        {props.options.map(function (option, index) {
          return (
            <label key={index} className="flex items-center gap-1">
              <input
                type="radio"
                name={props.name}
                value={option}
                checked={props.value === option}
                onChange={props.onChange}
              />
              <span>{option}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default RadioGroup;
