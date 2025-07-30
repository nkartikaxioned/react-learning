import { memo, useCallback, useState } from "react"

const Button = memo(({onClick, children}) => {
  console.log(`component called: ${children}`);
  
  return <button onClick={onClick}>{children}</button>
});


export const UseCallback = () => {
  const [count, setCount] = useState(0); 

  const increment = useCallback(() => {
    console.log("increment");
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    console.log("decrement");
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div>
      <h1 className="">{count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  )
}