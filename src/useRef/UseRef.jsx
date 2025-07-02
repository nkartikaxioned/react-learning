import { useRef } from "react"

//insted of document.getElementById we use useRef in React
export const UseRef = () => {

  const username = useRef(null);
  const password = useRef(null);  

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(username, password);
    console.log(username.current.value, password.current.value);
  }

  return (
    <form onSubmit={(e) => {handleSubmit(e)}}>
      <input type="text" id="username" ref={username}/>
      <input type="text" id="password" ref={password}/>
      <button>Submit</button>
    </form>
  )
}