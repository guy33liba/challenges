import React, { useState } from "react";

const SlotMuchine = () => {
 const symbols = ["🍒", "🍋", "🍉", "🍊", "🍇", "🍓"];
 const [reels, setReels] = useState([symbols[0], symbols[1], symbols[2]]);
 const [score, setScore] = useState(0);

 const spinReels = () => {
  const newReels = reels.map(() => symbols[Math.floor(Math.random() * symbols.length)]);
  setReels(newReels);
  if (newReels.every((symbol) => symbol === newReels.symbol[0])) {
   setScore(score + 10);
  }
 };

 return <div>SlotMuchine</div>;
};

export default SlotMuchine;
