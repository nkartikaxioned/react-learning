import { useReducer } from "react"


export const UseReducer = () => {

  const reducer = (state, action) => {
    if(action.type === "increment") {
      return state + 1;
    }
    if(action.type === "decrement" && state > 0) {
      return state - 1;
    } else {
      return state;
    }
  }

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
      <button onClick={() => dispatch({type: "increment"})}>Increment</button>
    </div>
  )
}