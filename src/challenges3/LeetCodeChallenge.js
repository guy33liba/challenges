import React from "react"

const LeetCodeChallenge = () => {
 function frequencyMap() {
  const nums = [1, 2, 2, 3, 3, 3]
  const frequencyMap = new Map()
  for (const num of nums) {
   frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
  }
  console.log(frequencyMap)
 }

 ////////////////////////////////////

 function validParentheses(s) {
  const matchingBrackets = {
   ")": "(",
   "}": "{",
   "]": "[",
  }

  // Stack to keep track of open brackets
  const stack = []

  // Loop through each character in the string
  for (const char of s) {
   // If the character is a closing bracket
   if (char in matchingBrackets) {
    // Check the top of the stack
    const top = stack.length > 0 ? stack.pop() : "#"

    // If it doesn't match the expected opening bracket, return false
    if (matchingBrackets[char] !== top) {
     return false
    }
   } else {
    // If it's an opening bracket, push it onto the stack
    stack.push(char)
   }
  }

  // If the stack is empty at the end, all brackets were matched
  return stack.length === 0
 }
 return (
  <div>
   <button onClick={() => frequencyMap()}>frequencyMap</button>
   <button onClick={() => validParentheses()}>validParentheses</button>
  </div>
 )
}

export default LeetCodeChallenge
