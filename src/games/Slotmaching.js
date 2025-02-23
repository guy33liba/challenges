import React from "react"
import { useState } from "react"

const Slotmaching = () => {
  const symbols = ["🍒", "🍋", "🍉", "🍊", "🍇", "🍓"]
  const [newSymbols, setNewSymbols] = useState([])
  function combineSymbols() {
    setNewSymbols(symbols)
  }

  return (
    <div>
      <h1>slot maching</h1>
      {newSymbols.map((item) => {
        return <div>{item}</div>
      })}
    </div>
  )
}

export default Slotmaching
