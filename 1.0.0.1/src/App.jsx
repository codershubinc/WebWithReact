import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer.jsx'
function App() {
  

  return (
    <><div className='dark:bg-[#212627] bg-[#c6c7d8]'>
      <Header />
      <Outlet />
      <Footer />
    </div>

    </>
  )
}

export default App
