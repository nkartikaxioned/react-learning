import { useEffect, useRef, useState } from "react"


export const UseEffectPractice = () => {
  const [county, setCounty] = useState(0);
  const [names, setNames] = useState("");
  const prevNames = useRef();
  const prevCounty = useRef();

  useEffect(() => {

    if(prevNames !== undefined && prevNames !== prevNames.current) {
      console.log(names);
    }

    if(prevCounty !== undefined && prevCounty !== prevCounty.current) {
      document.title = county;
    }

    prevNames.current = names;
    prevCounty.current = county;
  }, [county, names]);

  return (
    <div>
      <h3>UseEffect Hook</h3>
      <p>count: {county}</p>
      <p>{names}</p>
      <div>
        <label htmlFor="names">Enter Names</label>
        <input type="text" value={names} onChange={(e) => {setNames(e.target.value)}}/>
      </div>
      <button onClick={(e) => {setCounty(county+1)}}>Increment</button>
    </div>
  )
}