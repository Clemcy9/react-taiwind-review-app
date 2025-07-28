import React from 'react';
import Outlinebutton from './Outlinebutton';


function Feedbackcard(props) {
  return (
    <div className='border-[#33026C] border-2 flex flex-col w-full max-w-[300px] rounded-xl gap-6 py-6 px-5' >
        <img src={props.src}
         alt={props.name} 
         className="w-full h-48 object-contain"/>
        <h4 className='text-[#3b027d] text-2xl font-normal'>{props.name}</h4>
        <Outlinebutton text='Give Feedback' textt='&gt;' to={props.to}/>

    </div>
  );
}
// function Feedbackcard({ src, name, to }) {
//   return (
//     <div className="border-2 border-[#33026C] flex flex-col items-start w-full max-w-[387px] rounded-xl gap-6 py-6 px-5 shadow-sm">
//       <img
//         src={src}
//         alt={name}
//         className="w-full h-48 object-contain"
//       />
//       <h4 className="text-[#3b027d] text-2xl font-normal">{name}</h4>
//       <Outlinebutton text="Give Feedback" textt="&gt;" to={to} />
//     </div>
//   );
// }

export default Feedbackcard;
