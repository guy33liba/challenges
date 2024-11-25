import React, { useState } from "react"

const FindthelargestNum = () => {
 const [largestNum, setLargestNum] = useState(0)
 const [paliWord, setPaliWord] = useState("")
 function findLargest(arr) {
  let maxNumber = 0

  for (let i = 0; i < arr.length; i++) {
   //  if (arr[i] > maxNumber) {
   //   maxNumber = arr[i]
   //  }
   setLargestNum(Math.max(...arr))
  }
  // setLargestNum(maxNumber)
 }
 function palindrom(str) {
  let j = str.length - 1
  for (let i = 0; i < str.length / 2; i++) {
   if (str[i] !== str[j]) {
    setPaliWord("false")
   } else {
    setPaliWord("true")
    break
   }
   j--
  }
  // const word = str.split("").reverse().join("")
  // setPaliWord(word === str ? 'true' : 'false')
 }
 return (
  <div>
   <button onClick={() => findLargest([1, 2, 3, 12, 13, 6, 7, 8, 9, 10, 11])}>
    find the largest num
   </button>
   <button onClick={() => palindrom("madam")}>check palindrome</button>
   <p>{largestNum}</p>
   <p>{paliWord}</p>
  </div>
 )
}

export default FindthelargestNum
