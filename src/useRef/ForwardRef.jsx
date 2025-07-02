import { useId, useRef } from "react"

//passing reference from parent to child
export const ForwardRef = () => {

  const userName = useRef(null);
  const userPassword = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(userName.current.value, userPassword.current.value);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <UserInputComponent label="username" ref={userName} type="text"/>
      <UserInputComponent label="password" ref={userPassword} type="password"/>
      <button>Submit</button>
    </form>
  )
}

export const UserInputComponent = ({label, ref, type}) => {
  const id = useId();

  return(
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} ref={ref}/>
    </div>
  )

}