import React, { useState } from "react"

const MissingNumber = () => {
  const array = [1, 2, 3, 4, 5, 6, 8, 9, 10]
  const [missingNumber, setmissingNumber] = useState(null)
  function findmissingnumber() {
    const totalSum = (10 * (10 + 1)) / 2
    const arraySum = array.reduce((accmulator, currentValue) => accmulator + currentValue, 0)
    console.log(totalSum,arraySum)
    const missing = totalSum - arraySum
    setmissingNumber(missing)
  }
  return (
    <div>
      <button onClick={() => findmissingnumber()}>find missing number</button>
      {missingNumber !== null && <p>Missing Number:{missingNumber}</p>}
    </div>
  )
}

export default MissingNumber
