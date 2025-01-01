// import React, { useState } from "react";

// const Calculator = () => {
//  const [input, setInput] = useState("");

//  const handleClick = (value) => {
//   setInput((prev) => prev + value);
//  };
//  const calculate = () => {
//   if (input === "") return;
//   setInput(eval(input.toString()));
//  };
//  return (
//   <div
//    style={{
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh", // Full viewport height
//     backgroundColor: "#f4f4f9",
//    }}
//   >
//    <div
//     style={{
//      width: "300px",
//      backgroundColor: "#ffffff",
//      padding: "20px",
//      borderRadius: "10px",
//      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//      textAlign: "center",
//     }}
//    >
//     <input
//      type="text"
//      value={input}
//      readOnly
//      style={{
//       width: "100%",
//       padding: "15px",
//       fontSize: "1.5rem",
//       marginBottom: "15px",
//       border: "1px solid #ccc",
//       borderRadius: "5px",
//      }}
//     />
//     <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
//      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
//       <button
//        key={num}
//        onClick={() => handleClick(num.toString())}
//        style={{
//         padding: "15px",
//         margin: "5px",
//         fontSize: "1.2rem",
//         width: "60px",
//         backgroundColor: "#4caf50",
//         color: "#fff",
//         border: "none",
//         borderRadius: "5px",
//         cursor: "pointer",
//        }}
//       >
//        {num}
//       </button>
//      ))}
//      <button onClick={() => setInput(input.slice(0, -1))}>DEL</button>
//     </div>

//     <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
//      {["+", "-", "*", "/"].map((op) => (
//       <button
//        key={op}
//        onClick={() => handleClick(op)}
//        style={{
//         padding: "15px",
//         margin: "5px",
//         fontSize: "1.2rem",
//         width: "60px",
//         backgroundColor: "#ff5722",
//         color: "#fff",
//         border: "none",
//         borderRadius: "5px",
//         cursor: "pointer",
//        }}
//       >
//        {op}
//       </button>
//      ))}
//      <button onClick={() => calculate()}>=</button>
//     </div>
//     <button
//      onClick={() => setInput("")}
//      style={{
//       padding: "15px",
//       marginTop: "10px",
//       fontSize: "1.2rem",
//       width: "100%",
//       backgroundColor: "#f44336",
//       color: "#fff",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//      }}
//     >
//      Clear
//     </button>
//    </div>
//   </div>
//  );
// };

// export default Calculator;
import React, { useEffect, useState } from "react";

const App = () => {
 const [state, setState] = useState([]);

 function findmax(arr) {
  return Math.max(...arr);
 }
 useEffect(() => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  setState(() => findmax(arr));
 }, []);
 return (
  <div>
   <h1>the max number = {state} </h1>
  </div>
 );
};

export default App;
