import React, { useState } from "react"

const FindDuplicates = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 3, 4, 5, 6, 7, 8, 9])
  const [hasDuplicate, setHasDuplicate] = useState(false)
  const [num2, setNum2] = useState(0)
  ////////////////////////////////
  const checkForDuplicates = (arr) => {
    const uniqueNumber = new Set(arr)
    if (uniqueNumber.size !== arr.length) {
      setHasDuplicate(true)
    } else {
      setHasDuplicate(false)
    }
  }
  ////////////////////////////////
  const checkForDuplicates2 = (arr) => {
    let seen = {}
    for (let num of arr) {
      if (seen[num]) {
        setHasDuplicate(true)
        return
      }
      seen[num] = true
      setNum2(seen[num])
    }
    setHasDuplicate(false)
  }

  return (
    <div>
      <h2>Check for Duplicates</h2>
      <button onClick={() => checkForDuplicates2(numbers)}>Check Duplicates</button>
      <p>{hasDuplicate ? "Duplicates Found!" : "No Duplicates"}</p>
      <p>{num2}</p>
    </div>
  )
}

export default FindDuplicates
