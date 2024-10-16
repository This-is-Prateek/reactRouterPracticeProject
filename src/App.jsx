import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-full flex flex-col gap-2'>
        <Header /> 
        <Outlet/>   {/* replaces this with the element rendered according to the path visited by user */}
        <Footer/>
      </div>
    </>
  )
}

export default App
