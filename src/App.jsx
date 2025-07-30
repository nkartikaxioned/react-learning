import './App.css'
import { ParentComponent } from './Memo/UseMemo'

export const App = () => {
  return (
    // <GlobalDataProvider>
    //   <Home />
    // </GlobalDataProvider>
    <ParentComponent />
  )
}

