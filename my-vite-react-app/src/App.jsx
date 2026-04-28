import React, { Suspense, useState, useEffect } from 'react'
import { Route, Routes, NavLink, useLocation } from "react-router-dom"

import logo from "./../src/assets/logotype/logotype_white.svg"

const Header = React.lazy(() => import('./components/Header/Header'))
const Button = React.lazy(() => import('./components/Button/Button'))
const Input = React.lazy(() => import('./components/Input/InputOld'))
const Main = React.lazy(() => import('./pages/Main/Main'))
const Footer = React.lazy(() => import('./components/Footer/Footer'))
const Information = React.lazy(() => import('./pages/Information/Information'))
const Account = React.lazy(() => import('./pages/Account/Account'))
const Signin = React.lazy(() => import('./pages/Signin/Signin'))
const Calculator = React.lazy(() => import('./pages/Calculator/Calculator'))
const CalculatorResults = React.lazy(() => import('./pages/CalculatorResults/CalculatorResults'))
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'))
const Forbidden = React.lazy(() => import('./pages/Forbidden/Forbidden'))

function ScrollToTop() {
    const { pathname } = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return null;
}

function App() {
  const [page, setPage] = useState("")
  const handleSetPage = ( currentPage ) => {
    setPage(currentPage)
  }
  return (
    <>
    <ScrollToTop />
      <Suspense fallback={
        <div className='loading'>
          <img src={logo} alt="logo" className='loading__logo' />
          <h1 className='numbers c-white'>loading...</h1>
        </div>
        }>
        <div className='container'>
          <main className='main'>
            <Routes>
              <Route path="/" element={ <Main /> } />
              <Route path="/calculator" element={ <Calculator /> } />
              <Route path="/calculatorresults" element={ <CalculatorResults /> } />
              <Route path="/about" element={ <Information /> } />
              <Route path="/account" element={ <Account /> } />
              <Route path="/signin" element={ <Signin /> } />
              <Route path="/notfound" element={ <NotFound /> } />
              <Route path="/forbidden" element={ <Forbidden /> } />
            </Routes>
          </main>
        </div>
      </Suspense>
    </>
  )
}

export default App