import React from "react";

function Button(props) {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={`px-4 py-2 rounded font-semibold text-white bg-purple-600 hover:bg-purple-700 transition ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
