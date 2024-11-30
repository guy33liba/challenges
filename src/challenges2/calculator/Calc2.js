import React, { useReducer } from "react"
import "./Calc.css"
const actions = {
 add: "add",
 chooseOperation: "chooseOperation",
 clear: "clear",
 delete: "delete",
 evaluate: "evaluate",
}

export default function Calc2() {
 const reducer = (state, { type, payload }) => {
  switch (type) {
   case actions.add:
    if (state.overwrite) {
     return { ...state, current: payload.digit, overwrite: false }
    }
    if (payload.digit === "0" && state.current === "0") return state
    if (payload.digit === "." && state.current.includes(".")) return state
    return { ...state, current: `${state.current || ""}${payload.digit}` }

   case actions.delete:
    if (!state.current) return state
    return { current: state.current.slice(0, state.current.length - 1) }
   case actions.chooseOperation:
    if (state.current == null && state.previous == null) return state
    if (state.previous == null) {
     return {
      ...state,
      operation: payload.operation,
      previous: state.current,
      current: null,
     }
    }
    return {
     ...state,
     previous: evaluate(state),
     operation: payload.operation,
     current: null,
    }
   case actions.clear:
    return { current: "", previous: "", operation: null }
   case actions.evaluate:
    if (state.operation == null || state.current == null || state.previous == null) {
     return state
    }
    return {
     ...state,
     overwrite: true,
     previous: null,
     operation: null,
     current: evaluate(state),
    }
  }
 }
 //  function evaluate(state) {
 //   if (state.operation === "+") {
 //    return parseFloat(state.previous) + parseFloat(state.current)
 //   }
 //   if (state.operation === "-") {
 //    return parseFloat(state.previous) - parseFloat(state.current)
 //   }
 //   if (state.operation === "*") {
 //    return parseFloat(state.previous) * parseFloat(state.current)
 //   }
 //   if (state.operation === "/") {
 //    return parseFloat(state.previous) / parseFloat(state.current)
 //   }
 //   return parseFloat(state.previous)
 //  }
 function evaluate({ current, previous, operation }) {
  let prev = parseFloat(previous)
  let currentOp = parseFloat(current)
  if (isNaN(prev) || isNaN(currentOp)) return ""
  let computation = ""
  switch (operation) {
   case "+":
    computation = prev + currentOp
    break
   case "-":
    computation = prev - currentOp
    break
   case "*":
    computation = prev * currentOp
    break
   case "/":
    computation = prev / currentOp
    break
  }
  return computation.toString()
 }
 ////////////////////////
 const [{ current, previous, operation }, dispatch] = useReducer(reducer, {})

 const integerFormatter = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
 })
 return (
  <div className="calculator">
   <div className="previous">{previous}</div>
   <div className="current">{current}</div>
   <button className="spanTwo" onClick={() => dispatch({ type: actions.clear })}>
    AC
   </button>
   <button onClick={() => dispatch({ type: actions.delete })}>DEL</button>
   <Operation operation="/" dispatch={dispatch}>
    /
   </Operation>
   <div>
    <Digit digit="1" dispatch={dispatch}>
     1
    </Digit>
    <Digit digit="2" dispatch={dispatch}>
     2
    </Digit>
    <Digit digit="3" dispatch={dispatch}>
     3
    </Digit>
    <Operation operation="-" dispatch={dispatch}>
     -
    </Operation>
   </div>
   <div>
    <Digit digit="4" dispatch={dispatch}>
     4
    </Digit>
    <Digit digit="5" dispatch={dispatch}>
     5
    </Digit>
    <Digit digit="6" dispatch={dispatch}>
     6
    </Digit>
    <Operation operation="*" dispatch={dispatch}>
     *
    </Operation>
   </div>
   <div>
    <Digit digit="7" dispatch={dispatch}>
     7
    </Digit>
    <Digit digit="8" dispatch={dispatch}>
     8
    </Digit>
    <Digit digit="9" dispatch={dispatch}>
     9
    </Digit>
    <Operation operation="+" dispatch={dispatch}>
     +
    </Operation>
   </div>
   <div>
    <Digit digit=".">.</Digit>
    <Digit digit="0" dispatch={dispatch}>
     0
    </Digit>
    <button onClick={() => dispatch({ type: actions.evaluate })} className="spanTwo">
     =
    </button>
   </div>
  </div>
 )
}
export function Digit({ dispatch, digit }) {
 return (
  <button onClick={() => dispatch({ type: actions.add, payload: { digit } })}>
   {digit}
  </button>
 )
}
export function Operation({ dispatch, operation }) {
 return (
  <button
   onClick={() => dispatch({ type: actions.chooseOperation, payload: { operation } })}
  >
   {operation}
  </button>
 )
}
