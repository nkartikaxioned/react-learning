import { useReducer } from "react";

export const UseReducer = () => {
  const initialState = {
    count: 0,
    name: "",
  };

  const reducer = (state, action) => {
    // if(action.type === "increment") {
    //   return state + 1;
    // }
    // if(action.type === "decrement" && state > 0) {
    //   return state - 1;
    // } else {
    //   return state;
    // }

    switch (action.type) {
      case "increment":
        return {
          ...state,
          count: state.count + 1,
        };

      case "decrement":
        return {
          ...state,
          count: state.count - 1,
        };

      case "reset":
        return {
          ...state,
          count: 0,
        };

      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>count: {state.count}</p>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};
