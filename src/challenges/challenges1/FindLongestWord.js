import React, { useState } from "react"

const FindLongestWord = () => {
 const [longest, setLongest] = useState("")
 const words = ["hello", "this", "is", "a", "test", "world1"]

 function findthelongestword1() {
  const longestWord = words.reduce(
   (longest, current) => (current.length > longest.length ? current : longest),
   ""
  )
  setLongest(longestWord)
 }
 //
 const findthelongestword2 = (item) => {
  item = ""
  for (let word of words) {
   if (word.length > item.length) {
    item = word
   }
  }
  setLongest(item)
 }
 //
 const findthelongestword3 = (item) => {
  const sortedWords = [...item].sort((a, b) => a.length - b.length)
  setLongest(sortedWords[sortedWords.length - 1])
 }
 //
 const findthelongestword4 = (item) => {
  const sortedWords = [...item].sort((a, b) => b.length - a.length)
  setLongest(sortedWords[0])
 }
 return (
  <div>
   <button onClick={() => findthelongestword4(words)}>find it</button>{" "}
   <p>Longest Word: {longest}</p>
  </div>
 )
}

export default FindLongestWord
