import React from "react";

const Button = ({ onClick, label }) => {
 return (
  <div>
   {" "}
   <button className="spin-button" onClick={onClick}>
    {label}
   </button>
  </div>
 );
};

export default Button;
