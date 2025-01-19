import React, { useEffect, useState } from "react"

export const useDebounce = (value, delay) => {
  const [debounce, setDebounce] = useState("")
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(value)
    }, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])
  return debounce
}
const Debounce2 = () => {
  const [input, setinput] = useState("")
  const debouncedInput = useDebounce(input,1300)
  return (
    <div>
      <input type="text" value={input} onChange={(e) => setinput(e.target.value)} />
      <p>Debounced input: {debouncedInput}</p>
    </div>
  )
}

export default Debounce2
