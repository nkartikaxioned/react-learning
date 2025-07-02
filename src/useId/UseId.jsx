import { useId } from "react";

//creating dynamic ID using useId Hook
export const UseId =() => {

const handleFormSubmit = (e) => {
  e.preventDefault();
}

const id = useId();

return (
  <form onChange={handleFormSubmit}>
    <div>
      <label htmlFor={id + "username"}>UserName :</label>
      <input type="text" id={id + "username"}/>
    </div>
    <div>
      <label htmlFor={id + "email"}>Email :</label>
      <input type="text" id={id + "email"}/>
    </div>
    <div>
      <label htmlFor={id + "password"}>Password</label>
      <input type="text" id={id + "password"}/>
    </div>
    <button>Submit</button>
  </form>
)}