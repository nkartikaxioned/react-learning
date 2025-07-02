import { useEffect, useState } from "react"


export const Practice1 = () => {
  const[person, setPerson] = useState({
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userPhoneNumber: "",
    userPassword: ""
  });

  const fruits = ['apple','mango','pear'];

  const handleFormSubmit = () => {
    e.preventDefault();
    console.log(person);
  }

  useEffect(() => {
    console.log(person.userFirstName)
  }, [person.userFirstName]);

  const handleChange = (e) => {
    const {name , value} = e.target;

    setPerson((prev) => ({
      ...prev,
      [name] : value
    }))
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        {fruits.map((fruit) => (
          <p>{fruit}</p>
        ))}
      </div>
      <fieldset>
        <div>
          <label htmlFor="userFirstName">First Name:</label>
          <input 
            type="text" 
            name="userFirstName" 
            value={person.userFirstName} 
            onChange={(e) => {handleChange(e)}}
          />
        </div>
        <div>
          <label htmlFor="userLastName">Last Name:</label>
          <input 
            type="text" 
            name="userLastName" 
            value={person.userLastName} 
            onChange={(e) => {handleChange(e)}}
          />
        </div>
        <div>
          <label htmlFor="userEmail">Email:</label>
          <input 
            type="email" 
            name="userEmail" 
            value={person.userEmail} 
            onChange={(e) => {handleChange(e)}}
          />
        </div>
        <div>
          <label htmlFor="userPhoneNumber">PhoneNumber:</label>
          <input 
            type="number" 
            name="userPhoneNumber" 
            value={person.userPhoneNumber} 
            onChange={(e) => {handleChange(e)}}
          />
        </div>
        <div>
          <label htmlFor="userPassword">Password:</label>
          <input 
            type="text" 
            name="userPassword" 
            value={person.userPassword} 
            onChange={(e) => {handleChange(e)}}
          />
        </div>
      </fieldset>
      <button>Submit</button>
    </form>
  )
}