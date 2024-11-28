import React, { useReducer } from "react"
import "./Calc.css"
const Calc2 = () => {
 const actions = {
  add: "add",
  chooseOperation: "chooseOperation",
  clear: "clear",
  delete: "delete",
 }
 const reducer = (state, { type, payload }) => {
  switch (type) {
   case actions.add:
    return { ...state, current: `${current || ""}${payload.digit}` }
  }
 }
 function DigitButton({ dispatch, digit }) {
  dispatch({ type: actions.add, payload: { digit } })
 }

 const [{ current, previous, operation }, dispatch] = useReducer(reducer, {})
 return (
  <div className="calculator">
   <div className="previous">previous</div>
   <div className="current">current</div>
   <div>
    <button onClick={() => DigitButton({ dispatch: dispatch, digit: "1" })}>1</button>
    <button>2</button>
    <button>3</button>
    <button onClick={() => DigitButton({ digit: "/" })}>/</button>
   </div>
   <div>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>*</button>
   </div>
   <div>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>+</button>
   </div>
   <div>
    <button>.</button>
    <button>0</button>
    <button>=</button>
    <button>-</button>
   </div>
  </div>
 )
}

export default Calc2
