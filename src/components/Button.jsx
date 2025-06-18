import React from "react";
import { useNavigate } from "react-router-dom";

function Button(props) {
  //   const navigate = useNavigate();

  const handleClick = () => {
    // navigate(`/${props.location}`);
    console.log("button clicked, location is:", props.location);
  };

  if (props.outline) {
    return (
      <button
        className="border border-[#3B027D] text-[#3B027D] px-4 py-2 rounded-md transition duration-150 hover:bg-[#3B027D] hover:text-white"
        onClick={handleClick}
      >
        {props.name}
      </button>
    );
  } else {
    return (
      <button
        className="bg-[#1B9407] text-white px-4 py-2 rounded-md transition duration-150 hover:bg-green-800"
        onClick={handleClick}
      >
        {props.name}
      </button>
    );
  }
}

export default Button;
