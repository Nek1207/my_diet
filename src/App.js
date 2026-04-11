import React, { useState } from 'react'
import { Route, Routes, NavLink } from "react-router-dom"

import Header from './components/Header/Header'
import Button from './components/Button/Button'
import Input from './components/Input/InputOld'
import Main from './pages/Main/Main'
import Footer from './components/Footer/Footer'
import Information from './pages/Information/Information'
import Account from './pages/Account/Account'
import Signin from './pages/Signin/Signin'
import Form from './components/Form/Form'
import NotFound from './pages/NotFound/NotFound'
import Forbidden from './pages/Forbidden/Forbidden'

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
            <Route path="/calculator" element={
              <Form />
            } />
            <Route path="/about" element={ <Information /> } />
            <Route path="/account" element={ <Account /> } />
            <Route path="/signin" element={ <Signin /> } />
            <Route path="/notfound" element={ <NotFound /> } />
            <Route path="/forbidden" element={ <Forbidden /> } />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App