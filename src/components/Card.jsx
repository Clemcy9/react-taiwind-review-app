import React from "react";
import Button from "./Button";

function Card(props) {
  return (
    <div className="max-w-[387px] min-w-fit px-[12px] py-[20px] border border-[#33026C] flex flex-col items-center rounded-[20px]">
      <div className="max-w-[337px] rounded-[20px] border">
        <img
          src={props.src}
          alt={props.name + "image"}
          className="rounded-[20px]"
        />
      </div>
      <div className="my-[24px] w-[337px] text-[#3B027D]">
        <h2>{props.name}</h2>
      </div>
      <div>
        <Button name="Give Feedback" outline="true" />
      </div>
    </div>
  );
}

export default Card;
