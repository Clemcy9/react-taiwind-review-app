import React from "react";
import Card from "./Card";
import cardImage from "../assets/popcast.jpg";

function CardsHolder() {
  return (
    <div>
      <div className="border flex justify-center flex-col items-center mb-[60px]">
        <h3 className="font-[Rubik] font-medium text-[40px] leading-[100%] text-center">
          Services Feedback
        </h3>
        <p className="font-[Rubik] font-medium text-[24px] leading-[100%] text-center">
          Let us know what your experience with any one of
        </p>
        <p className="font-[Rubik] font-medium text-[24px] leading-[100%] text-center">
          our services has been.
        </p>
      </div>
      <div className="border flex flex-wrap gap-[59px] justify-center mx-auto max-w-[1279px] w-[100%] h-auto">
        <Card name="Trainings" src={cardImage} />
        <Card name="Studio" src={cardImage} />
        <Card name="Co-working space" src={cardImage} />
        <Card name="Conference Hall" src={cardImage} />
        <Card name="Business Solutions" src={cardImage} />
      </div>
    </div>
  );
}

export default CardsHolder;
