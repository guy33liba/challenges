import React, { useState } from "react"

const ReverseArray = () => {
 const array = ["12312", "1232134", "sdfasdf", "asdfasd", "asdfasdczx"]
 const [reversingArray, setReversingArray] = useState(array)
 const [sumArray, setSumArray] = useState(0)
 ///////////////////////////////

 function toggleRevereseArray() {
  setReversingArray(array)
 }

 ///////////////////////////////

 function revereseArray(str) {
  let revereseArray = []
  for (let i = str.length - 1; i >= 0; i--) {
   revereseArray.push(str[i])
  }
  setReversingArray(revereseArray)

  ///////////////////////////////
  // const reverese = [...reversingArray].reverse()
  // setReversingArray(reverese)
 }
 ///////////////////////////////
 function sumArrayfunc(arr) {
  for (let i = 0; i <= arr.length; i++) {
   setSumArray((prev) => prev + i)
  }
 }
 return (
  <div>
   <button onClick={() => revereseArray(array)}>Reverse</button>
   <button onClick={() => toggleRevereseArray()}>toggleReverese</button>
   <button onClick={() => sumArrayfunc([1, 2, 3, 4,5 ])}>summing</button>
   <h2>Sum of Array Elements: {sumArray}</h2>
   {reversingArray.map((item) => (
    <div key={item}>{item}</div>
   ))}
  </div>
 )
}

export default ReverseArray
