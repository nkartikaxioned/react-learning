import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalDataProvider = ({children}) => {
  
  const [testName, setTestName] = useState(0);

  return (
    <GlobalContext.Provider value={{testName, setTestName}}>
      {children}
    </GlobalContext.Provider>
  )
}

