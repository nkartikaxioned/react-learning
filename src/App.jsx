import './App.css'
import { GlobalDataProvider } from './contextApi'
import { Home } from './contextApi/Home'

export const App = () => {
  return (
    <GlobalDataProvider>
      <Home />
    </GlobalDataProvider>
  )
}

