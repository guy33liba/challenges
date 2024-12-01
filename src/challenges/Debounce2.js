import React, { useEffect, useState } from "react"

const Debounce2 = (text, delay) => {
 const [debounce, setDebounce] = useState(text)

 useEffect(() => {
  const timer =  setTimeout(() => {
    setDebounce(text)
   }, delay)}
   return clearTimeout(timer)
 }, [debounce])

 return (
  <div>
   <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
   <button onClick={() => timer(input, 500)}>Debounce</button>
   <h2>{debounce}</h2>
  </div>
 )
}

export default Debounce2
