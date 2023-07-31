import MainNavbar from './components/navBar'
import Googlemap from './components/GoogleMap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState<string|number>(0)

  return (
    <>
      <MainNavbar></MainNavbar>
     <Googlemap></Googlemap>
    </>
  )
}

export default App
