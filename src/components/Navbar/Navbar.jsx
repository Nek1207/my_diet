import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const setActiveClass = ({ isActive }) => isActive ? 'header__links-link--active' : 'header__links-link'


  return (
    <nav className="header__links">
      {/* <a href="#!" className="header__links-link">главная</a>
      <a href="#!" className="header__links-link">калькулятор</a>
      <a href="#!" className="header__links-link">о нас</a> */}
      <NavLink to="/" className={setActiveClass} end>главная</NavLink>
      <NavLink to="/notfound" className={setActiveClass}>калькулятор</NavLink>
      <NavLink to="/about" className={setActiveClass}>о нас</NavLink>
    </nav>
  )
}

export default Navbar