import Card from "./Card";
import { IoIosArrowForward } from 'react-icons/io'; 

function Section3() {
  return (
    <div className="p-6 mt-10" >
      
      <div className="mb-3 mt-20 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-sans font-bold text-black">
          Services Feedback
        </h2>
        <p className="text-black font-medium mt-4 text-2xl">
          Let us know what your experience with any
        </p>
        <p className="text-black font-medium mt-2 text-2xl">
          one of our services has been
        </p>
      </div>

      <div className="w-[80%] mx-auto p-16 space-y-10 border-2 border-[#667799] rounded p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          
          <Card
            image="/image5.jpg"
            title="Training"
            buttonText={<span className="flex items-center gap-2">Give Feedback <IoIosArrowForward /> </span> }
            onButtonClick={() => alert("Feedback for Training")}
            className="border-2 border-[#667799] rounded p-4"
          />
          <Card
            image="/image5.jpg"
            title="Studio"
           buttonText={<span className="flex items-center gap-2">Give Feedback <IoIosArrowForward /> </span> }
            onButtonClick={() => alert("Feedback for Studio")}
            className="border-2 border-[#667799] rounded p-4"
          />
          <Card
            image="/image1.jpg"
            title="Co-Working Experience"
            buttonText={<span className="flex items-center gap-2">Give Feedback <IoIosArrowForward /> </span> }
            onButtonClick={() => alert("Feedback for Co-Working")}
            className="border-2 border-[#667799] rounded p-4"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card
            image="/image2.jpg"
            title="Conference Hall"
           buttonText={<span className="flex items-center gap-2">Give Feedback <IoIosArrowForward /> </span> }
            onButtonClick={() => alert("Feedback for Conference Hall")}
            className="border-2 border-[#667799] rounded p-4"
          />
          <Card
            image="/image7.jpg"
            title="Business Studio"
            buttonText={<span className="flex items-center gap-2">Give Feedback <IoIosArrowForward /> </span> }
            onButtonClick={() => alert("Feedback for Business Studio")}
            className="border-2 border-[#667799] rounded p-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Section3;
