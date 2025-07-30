import { useState } from "react"
import { Count } from "./Count";


export const ReactMemo = () => {

  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>
          Increment
        </button>
      </div>
      <Count />
    </div>
  )
}