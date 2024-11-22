import React, { useEffect, useState } from "react"

const FindtheSingleNumber = () => {
  const array = [2, 2, 5, 3, 3]
  const [singleNumber, setSingleNumber] = useState(null)
  const [xorNumber, setxorNumber] = useState(0)
  // useEffect(() => {
  //   if (singleNumber) {
  //     setxorNumber(singleNumber[0])
  //   }
  // }, [singleNumber])

  function singleNumbers() {
    const singleNumber = array.map((item) => {
      return array.filter((i) => i === item).length === 1 ? item : null
    })
    let result = 0
    array.forEach((item) => {
      result ^= item
    })

    setSingleNumber(singleNumber)
    setxorNumber(result)
  }

  return (
    <div>
      <button onClick={() => singleNumbers()}>find single number </button>
      <div>{xorNumber}</div>
    </div>
  )
}

export default FindtheSingleNumber
