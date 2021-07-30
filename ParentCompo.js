import React, { useState } from "react";

function ParentCompo() {
   const [state, setState] = useState(0);
   const [buzz, setBuzz] = useState(0);
   const [title, setTitle] = useState([]);
   const handleChange = (e) => {
      setState(e.target.value);
   };
   const handleManage = (e) => {
      setBuzz(e.target.value);
   };

   const handleButton = (state, buzz) => {
      buzz != 0 && state != 0 && state != undefined && buzz != undefined
         ? setTitle(Math.pow(3 * state + 1, 2) / buzz)
         : console.log("error");
   };

   console.log(title);
   return (
      <div>
         <input
            type="text"
            value={state}
            placeholder="enter value A"
            onChange={(e) => handleChange(e)}
         />
         <input
            type="text"
            placeholder="enter value B"
            value={buzz}
            onChange={(e) => handleManage(e)}
         />
         <button onClick={() => handleButton(state, buzz)}>Value of X</button>
         <div>{`the value ${title}`}</div>
      </div>
   );
}

export default ParentCompo;
