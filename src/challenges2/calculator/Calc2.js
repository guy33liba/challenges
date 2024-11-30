import React, { useReducer } from "react"
import "./Calc.css"
const actions = {
 add: "add",
 chooseOperation: "chooseOperation",
 clear: "clear",
 delete: "delete",
}

export default function Calc2() {
 const reducer = (state, { type, payload }) => {
  switch (type) {
   case actions.add:
    if (payload.digit === "0" && state.current === "0") return state
    if (payload.digit === "." && state.current.includes(".")) return state
    return { ...state, current: `${state.current || ""}${payload.digit}` }
   case actions.clear:
    return { current: "", previous: "", operation: null }
   case actions.delete:
    if (!state.current) return state
    return {  current: state.current.slice(0, state.current.length - 1) }
  }
 }
 const [{ current, previous, operation }, dispatch] = useReducer(reducer, {})

 console.log(current)
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
    <button className="spanTwo">=</button>
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
