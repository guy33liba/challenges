import React, { useState } from "react";
import Reel from "./Reel";
import Button from "./Button";

const SlotMuchine = () => {
 const symbols = ["🍒", "🍋", "🍉", "🍊", "🍇", "🍓"];
 const [reels, setReels] = useState([symbols[0], symbols[1], symbols[2]]);
 const [score, setScore] = useState(0);

 const spinReels = () => {
  const newReels = reels.map(() => symbols[Math.floor(Math.random() * symbols.length)]);
  setReels(newReels);

  console.log("New Reels:", newReels,score);

  if (newReels.every((symbol) => symbol === newReels[0])) {
   console.log("Win! +10 points");
   setScore((prev) => prev + 10);
  } else {
   console.log("Loss! -1 point");
   setScore((prev) => prev - 1);
  }
 };

 return (
  <div className="slot-machine">
   <h1>React Casino Slot Machine</h1>
   <div className="reels">
    {reels.map((symbol, index) => (
     <Reel key={index} symbol={symbol} />
    ))}
   </div>
   <Button onClick={spinReels} label="Spin" />
   <div className="score">Score: {score}</div>
  </div>
 );
};

export default SlotMuchine;
