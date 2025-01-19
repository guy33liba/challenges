import React, { useEffect, useState } from "react"

const ReverseString = () => {
 const String = "12345"
 const [reversed, setReversed] = useState("")
 const revereseString = (str) => {
  let reverese = str.split("").reverse().join("")
  setReversed(() => reverese)
 }
 useEffect(() => {
  revereseString(String)
 }, [])
 return <div>{reversed}</div>
}

export default ReverseString
