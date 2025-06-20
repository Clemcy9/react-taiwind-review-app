import React from "react";

function TextArea() {
    return (
       <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{props.label}</label>
      <textarea
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        rows={props.rows || 4}
        className="w-full border border-gray-300 p-2 rounded resize-none"
      />
    </div>
    )
}
export default TextArea