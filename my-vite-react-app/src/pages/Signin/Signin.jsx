import React from 'react'
import { NavLink } from "react-router-dom"

import "./../Signin/Signin.scss"

import Button from "../../components/Button/Button"
import Input from '../../components/Input/InputOld'

import { useScrollAnimation } from '../../smoothscrolling'
import { useScrollAnimationL } from '../../smoothscrolling-l'


import logo from "./../../assets/logotype/logotype_darkgreen.svg"
import projectnekLogo from "./../../assets/logotype/logotype_projectnek_darkgreen.svg"

import rounds from "./../../assets/content/cont_sectors.png"
import branch from "./../../assets/content/signin_branch.svg"
import branch2 from "./../../assets/content/information_branch2.svg"
import branches from "./../../assets/content/cont_branches.svg"
import waves from "./../../assets/content/form_waves.svg"

import leafs from "./../../assets/content/cont_leafs.svg"
import leaf1 from "./../../assets/content/cont_leaf.svg"
import leaf2 from "./../../assets/content/cont_leaf2.svg"


const Signin = () => {
  const sectionRefs = useScrollAnimation(0.6)
  const branchesRefs = useScrollAnimationL(0.3)

  return (
    <>
        <section className="signin">
          <div className="signin__logo">
            <img className="signin-background" src={waves} alt="background" />
            <NavLink to="/"><img className="signin__logo-image" src={logo} alt="logo" /></NavLink>
            <h3 className="signin__logo-title">мой рацион</h3>
            <p className="signin__logo-subtitle">подсчёт калорийности</p>
          </div>
          <div className="branch branch__signin smoothscrolling-r hidden" ref={el => branchesRefs.current[0] = el}><img className="branch__image" src={branch2} alt="branch2"/></div>
          <div className="signin__texts">
            <div className="signin__texts-inner">
              <img className="signin__texts__image" src={leaf1} alt="leaf1" />
              <h1 className="heading2 c-white t-center">авторизация</h1>
              <img className="signin__texts__image2" src={leaf2} alt="leaf2" />
            </div>
          </div>
      </section>
      <img className="leafs" src={leafs} alt="leafs" />
    </>
  )
}

export default Signin