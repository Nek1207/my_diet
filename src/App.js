import React, { useState } from 'react'
import { Route, Routes, NavLink } from "react-router-dom"

import Header from './components/Header/Header'
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import Main from './pages/Main/Main'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)
  const handleSetCount = () => {
    setCount(count + 1)
  }



  return (
    <>
      <div className='container'>

        <Header />

        <main className='main'>
          <Routes>
            <Route path="/" element={ <Main /> } />
            <Route path="/calculator" element={ <Input /> } />
            <Route path="/about" element={<Button title="рассчитать" styles="error" status="error" specialStyles=""/>} />
          </Routes>
        </main>

        <Footer />

      </div>
    </>
    


    
  )
}

export default App
