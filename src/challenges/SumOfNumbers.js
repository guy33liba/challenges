import React, { useState } from "react"

const SumOfNumbers = () => {
 const [summary, setSummary] = useState([])

 const arrayofnumbers = [1, 2, 3, 4]
 const arrayofwords = [
  "aasa",
  "bsas",
  "casas",
  "assdfd",
  "efadasfd",
  "fasdfasdf",
  "asdfasdg",
 ]
 //  const findTheSum = (arr) => {
 //   const sum = arr.reduce((acc, item) => acc + item, 0)
 //   setsummary(sum)
 //}
 const findTheSum = (arr) => {
  const result = arr
  setSummary(result)
 }
 return (
  <div>
   <button onClick={() => findTheSum(arrayofwords)}>summary</button>
   <h2>
    {summary.map((item) => {
     return <>{item.concat(" ")}</>
    })}
   </h2>
  </div>
 )
}

export default SumOfNumbers
