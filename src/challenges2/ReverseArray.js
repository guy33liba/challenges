import React, { useState } from "react"

const ReverseArray = () => {
 const array = ["12312", "1232134", "sdfasdf", "asdfasd", "asdfasdczx"]
 const [reversingArray, setReversingArray] = useState([])
 function revereseArray(str) {
  let array = str
  for (let i = array.length - 1; i < array.length; i--) {
   setReversingArray(array)
  }
 }
 return (
  <div>
   <button onClick={() => revereseArray(array)}>Reverse</button>
   {array.map((item) => (
    <div key={item}></div>
   ))}
  </div>
 )
}

export default ReverseArray
