import Button from "./Button";
export default function Navbar(){

    function contactUs() {
    alert("Button clicked!");
  }
    return(
        <div  className="bg-[#060167] flex justify-between p-4.5">
            <div>
                <a href="/" className="inline-block">
                    <img 
                        src="/image.png" 
                        alt="Logo" 
                        className="h-10 w-auto  outline-style: none; shadow hover:opacity-80 transition duration-300" 
                    />
                </a>


            </div>
            <div>
                <Button text="Contact Us" onClick={contactUs} />
            </div>
        </div>
    );
}