import { useMemo, useState } from "react";

const ExpensiveComponent = () => {

  const sum = () => {
    console.log("calculating sum");
    let i = 0;
    for(i=0; i <= 1000000000; i++) {
      i= i+1;
    }
    return i;
  }

  const total = useMemo(() => sum(), []);
  // const total = sum();
  return <p>sum: {total}</p>
}

export const ParentComponent = () => {

  const [count, setCount] = useState(0);
  
  return (
    <div>
      <ExpensiveComponent />
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
    </div>
  )
}