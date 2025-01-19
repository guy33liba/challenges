import React, { useEffect, useState } from "react"

const useDebounce = (text, delay) => {
  const [debouncer, setDebouncer] = useState(text)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncer(text)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [text, delay])
  return debouncer
}

const SecondQues = () => {
  const [text, setText] = useState("")
  const debouncedText = useDebounce(text, 1000)
  console.log(debouncedText)
  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="debounce"
        onChange={(e) => setText(e.target.value)}
      />
      <p> debounced text : {debouncedText}</p>
    </div>
  )
}

export default SecondQues
