import React, { useState } from "react"
import { NavLink } from "react-router-dom"

import "./../Header/Header.scss"

import logo from "./../../assets/logotype/logotype_white.svg"
import account from "./../../assets/input/input_account.svg"
import headerleaf from "./../../assets/content/cont_headerleaf.svg"
import headerleaf2 from "./../../assets/content/cont_headerleaf2.svg"

import Navbar from "../Navbar/Navbar"
import Button from "../Button/Button"

const Header = () => {

  const setActiveClass = ({ isActive }) => isActive ? 'header__logo' : 'header__logo'

  const [isOpen, setIsOpen] = useState(false)
  const handleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header className="header">
        <div className="header__item">
          <NavLink to="/" className={setActiveClass}><img src={logo} alt="logo" className="header__logo-image" /></NavLink>
          <div className="header__titles">
            <h1 className="header__titles-title">мой рацион</h1>
            <h2 className="header__titles-subtitle">подсчёт калорийности</h2>
          </div>
        </div>
          
          <div className={`menu ${isOpen ? 'active' : ''}`}>
            <Navbar />
          </div>
          <div className="header__item">
            {/* <NavLink to="/account" className="header__account"><img src={account} alt="account" className="header__account-image" /></NavLink> */}
            <NavLink to="/signin" className="header__signin"><Button title="войти" styles="header" status="header" specialStyles=""/></NavLink>
            <div className={`burger ${isOpen ? 'open' : ''}`} onClick={handleMenu}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
          </div>
          
      </header>
      <div className="header__leaf"><img src={headerleaf} alt="headerleaf" /></div>
      <div className="header__leaf2"><img src={headerleaf2} alt="headerleaf2" /></div>
      <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={handleMenu}></div>
    </>
  )
}

export default Header