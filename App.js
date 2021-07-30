import React, { useState } from "react";
import "./App.css";
import ParentCompo from "./ParentCompo";

function App() {
   const [state, setstate] = useState([]);
   const [value, setValue] = useState([]);
   const [prompt, setPrompt] = useState([]);

   console.log("state", state);
   const handleClick = () => {
      setPrompt(Math.max(...value));
      console.log("prompt", prompt);
   };

   const handleChange = (e) => {
      setstate(e.target.value);
   };

   const addItem = () => {
      setValue([...value, state]);
      setstate([]);
   };
   console.log("value", value);
   return (
      <div className="App">
         <h1>Result</h1>
         <input value={state} onChange={(e) => handleChange(e)} />
         <button onClick={addItem}>Add</button>
         <button onClick={handleClick}>Sort</button>
         <div>{`the largest number in Array is ${prompt}`}</div>
         <div>
            <ParentCompo />
         </div>
      </div>
   );
}

export default App;
