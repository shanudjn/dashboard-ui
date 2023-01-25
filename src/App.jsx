import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Dashboard/>
    </div>
  )
}

export default App
