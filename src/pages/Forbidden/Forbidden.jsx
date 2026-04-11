import React from 'react'
import { NavLink } from "react-router-dom"

import "./../Forbidden/Forbidden.scss"

import Button from "../../components/Button/Button"
import Input from '../../components/Input/InputOld'

import { useScrollAnimation } from '../../smoothscrolling'
import { useScrollAnimationL } from '../../smoothscrolling-l'


import logo from "./../../assets/logotype/logotype_darkgreen.svg"
import projectnekLogo from "./../../assets/logotype/logotype_projectnek_darkgreen.svg"

import rounds from "./../../assets/content/cont_sectors.png"
import branch from "./../../assets/content/branch_notfound.svg"
import branch2 from "./../../assets/content/information_branch2.svg"
import branches from "./../../assets/content/cont_branches.svg"
import waves from "./../../assets/content/form_waves.svg"

import leafs from "./../../assets/content/cont_leafs.svg"
import leaf2 from "./../../assets/content/cont_leaf2.svg"


const Forbidden = () => {
  const sectionRefs = useScrollAnimation(0.6)
  const branchesRefs = useScrollAnimationL(0.3)

  return (
    <>
      <section className="forbidden">
          <div className="forbidden__logo">
              <img className="forbidden__logo-background" src={waves} alt="background" />
              <h1 className="forbidden__logo-numbers">упс...</h1>
          </div>
          <div className="forbidden__texts">
            <div className="forbidden__texts-inner">
              <div className="forbidden__texts-number bg-carrot c-white">403</div>
              <h2 className="heading2 t-left c-white mt1">доступ запрещён</h2>
              <h3 className="subheading t-left c-white f-montserrat">эта страница не для Вас!</h3>
              <p className="desc3 mt4 t-left c-white f-montserrat">похоже, Вы пытаетесь попасть на страницу без обладания на того прав. Вы можете вернуться на главную страницу, нажав на кнопку ниже</p>
            </div>
            <div className="forbidden__texts-button mt15">
              <NavLink to="/"><Button title="на главную" styles="backtomain" status="backtomain" specialStyles=""/></NavLink>
            </div>
          </div>
      </section>
      <div className="branch branch__forbidden"><img className="branch__image" src={branch} alt="branch"/></div>
      <img className="leafs" src={leafs} alt="leafs" />
    </>
  )
}

export default Forbidden