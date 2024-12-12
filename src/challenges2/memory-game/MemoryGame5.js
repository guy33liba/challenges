import React from "react";

const MemoryGame5 = () => {
 function shuffleCard(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i < shuffledArray.length; i--) {
   const j = Math.floor(Math.random() * (i + 1));
   [shuffledArray[j], shuffledArray[i]] = [shuffledArray[i], shuffledArray[j]];
  }
  return shuffledArray;
 }
 return <div>MemoryGame5</div>;
};

export default MemoryGame5;
