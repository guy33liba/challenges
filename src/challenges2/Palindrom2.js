import React, { useState } from "react"

const Palindrom2 = () => {
 const [word, setWord] = useState("")
 const [check, setCheck] = useState("")
 ////////////////////////////////////////////////////////////////////////////
 function palindrom(str) {
  let j = str.length - 1
  for (let i = 0; i < str.length / 2; i++) {
   if (str[i] !== str[j]) {
    setCheck("false")
   } else {
    setCheck("true")
   }
   j--
  }
 }
 ////////////////////////////////////////////////////////////////
 function palindrom2(str) {
  const cleanstr = str.toLowerCase()
  const reversed = cleanstr.split("").reverse().join("")
  if (cleanstr === reversed) {
   setCheck("Yes, it's a palindrome")
  } else {
   setCheck("No, it's not a palindrome")
  }
 }
 ////////////////////////////////////////
 return (
  <div>
   <input type="text" value={word} onChange={(e) => setWord(e.target.value)} />
   <button onClick={() => palindrom(word)}>Check Palindrome</button>
   <p>Is a palindrome? {check} </p>
  </div>
 )
}

export default Palindrom2
