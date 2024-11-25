import React, { useState } from "react"

const Completed = ({ completed, onToggle }) => {
 return (
  <div>
   <button
    onClick={onToggle}
    style={{
     backgroundColor: completed ? "green" : "red",
     color: " white",
     padding: "5px 10px",
     cursor: "pointer",
    }}
   >
    {completed ? "Undo" : "Complete"}
   </button>
  </div>
 )
}

export default Completed
