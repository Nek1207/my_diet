import React, { useState } from 'react'
import { Route, Routes, NavLink } from "react-router-dom"

import Header from './components/Header/Header'
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import Main from './pages/Main/Main'
import Footer from './components/Footer/Footer'
import Information from './pages/Information/Information'
import Account from './pages/Account/Account'
import Signin from './pages/Signin/Signin'


function App() {
  const [count, setCount] = useState(0)
  const handleSetCount = () => {
    setCount(count + 1)
  }



  return (
    <>
      <div className='container'>

        <main className='main'>
          <Routes>
            <Route path="/" element={ <Main /> } />
            <Route path="/calculator" element={ <Input /> } />
            <Route path="/about" element={ <Information /> } />
            <Route path="/account" element={ <Account /> } />
            <Route path="/signin" element={ <Signin /> } />
          </Routes>
        </main>


      </div>
    </>
    


    
  )
}

export default App
