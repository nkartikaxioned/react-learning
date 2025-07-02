import { useContext } from "react";
import { GlobalContext } from ".";


export const Home = () => {

  const {testName, setTestName} = useContext(GlobalContext);

  const handleClick = () => {
    setTestName(testName + 1);
  }

  return (
    <div>
      <p>count: {testName}</p>
      <button onClick={handleClick}>increment</button>
    </div>
  );
}