import { useEffect, useState } from "react"


export const UseEffect = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  const handleButtonCLick = () => {
    setCounter(counter + 1);
  }

  return (
    <div>
      <p>counter: {counter}</p>
      <button onClick = {handleButtonCLick}>Click</button>
    </div>
  )
}