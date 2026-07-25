import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import BundleBuilder from './pages/BundleBuilder.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BundleBuilder />
    </>
  )
}

export default App
