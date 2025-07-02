import { useEffect, useState } from "react"


export const Practice2 = () => {
  const [time, setTime] = useState(0);
  // const currentTime = new Date().toLocaleTimeString();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <h2>{time}</h2>
  )
}