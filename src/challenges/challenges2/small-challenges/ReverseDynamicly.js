import React, { useState } from "react"

const ReverseDynamicly = () => {
 const [input, setinput] = useState("")
 const [reversed, setreversed] = useState("")

 function reveresing(str) {
  let revereseString = ""
  // for (let i = str.length - 1; i >= 0; i--) {
  //  revereseString += str[i]
  // }
  const reverseone = str.split("").reverse().join("")
  setreversed(reverseone)
 }

 return (
  <div>
   <input type="text" value={input} onChange={(e) => setinput(e.target.value)} />
   <button
    onClick={() => {
     reveresing(input)
    }}
   >
    reverese
   </button>
   <div>{reversed}</div>
  </div>
 )
}

export default ReverseDynamicly
