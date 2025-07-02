import { useEffect, useState } from "react"


export const FetchUsingPromise = () => {

  const[apiData, setApiData] = useState(null);
  const[loadingState, setLoadingState] = useState(true);
  const[errorStatement, setErrorStatement] = useState(null);

  const API = "https://jsonplaceholder.typicode.com/posts";

  //Data fetching using Promises
  // const apiCall = () => {
  //   fetch(API)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setApiData(data);
  //     setLoadingState(false);
  //   })
  //   .catch((error) => {
  //     setErrorStatement(error.message);
  //     setLoadingState(false);
  //   });
  // }

  //Data fetching using Async Await
   const apiCall = async () => {
    try {
      await fetch(API);
      setApiData(data);
      setLoadingState(false);
    } catch (error) {
      setErrorStatement(error.message);
      setLoadingState(false);
    }
  }

  useEffect(() => {
    apiCall();
  }, [])

  if(loadingState) {
    return <p>Loading....</p>
  }

  if(errorStatement) {
    return <p>{errorStatement}</p>
  }

  if(!loadingState) {
    return (
      <ul>
        {apiData.map((currentData) => {
         return <li 
          key={currentData.id}>
            <p>Title: {currentData.title}</p>
            <p>Description: {currentData.description}</p>
          </li>
        })}
      </ul>
    )
  }
}
