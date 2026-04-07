import React from 'react'

import Button from "../../components/Button/Button"
import Input from '../../components/Input/Input'

import { useScrollAnimation } from '../../smoothscrolling'
import { useScrollAnimationL } from '../../smoothscrolling-l'

import Footer from '../../components/Footer/Footer'

import logo from "./../../assets/logotype/logotype_darkgreen.svg"
import projectnekLogo from "./../../assets/logotype/logotype_projectnek_darkgreen.svg"

import rounds from "./../../assets/content/cont_sectors.png"
import branch from "./../../assets/content/information_branch.svg"
import branch2 from "./../../assets/content/information_branch2.svg"
import branches from "./../../assets/content/cont_branches.svg"
import waves from "./../../assets/content/cont_waves.svg"

import leaf1 from "./../../assets/content/cont_leaf.svg"
import leaf2 from "./../../assets/content/cont_leaf2.svg"
import Header from '../../components/Header/Header'


const Information = () => {
  const sectionRefs = useScrollAnimation(0.6)
  const branchesRefs = useScrollAnimationL(0.3)

  return (
    <>
      <Header />
      <section className="information">
        <h1 ref={el => sectionRefs.current[0] = el} className="heading1 smoothscrolling hidden">информация <span className='c-carrot'>о приложении</span></h1>
        <div className="information__item-first">
          <div ref={el => sectionRefs.current[1] = el} className="information__item-texts-first smoothscrolling hidden">
            <h3 className="subheading">дизайн разработан в</h3>
            <h1 className="heading3">Figma</h1>
            <br />
            <h3 className="subheading">код приложения реализован на</h3>
            <h1 className="heading3">HMTL, SCSS, JS, React</h1>
          </div>
          <img ref={el => sectionRefs.current[2] = el} src={logo} alt="logo" className="infomation__item-image smoothscrolling hidden" />
        </div>
        <div className="branch smoothscrolling-l hidden" ref={el => branchesRefs.current[0] = el}><img className="branch__image" src={branch} alt="branch"/></div>
        <div className="information__item-last">
          <div ref={el => sectionRefs.current[3] = el} className="information__item-texts-last smoothscrolling hidden">
            <h3 className="subheading">разработчик дизайна</h3>
            <h1 className="heading3">ASWACWAESACWA</h1>
            <br />
            <h3 className="subheading">frontend-разработчик</h3>
            <h1 className="heading3">инт64флоат</h1>
          </div>
          <img ref={el => sectionRefs.current[4] = el} src={projectnekLogo} alt="projectnek-logo" className="infomation__item-image smoothscrolling hidden" />
        </div>
        <div className="branch smoothscrolling-r hidden" ref={el => branchesRefs.current[1] = el}><img className="branch__image" src={branch2} alt="branch2"/></div>
      </section>
      <h2 ref={el => sectionRefs.current[5] = el} className="heading2 c-white smoothscrolling hidden">следите за автором <span className='c-darkgreen'>в соцсетях!</span></h2>
      <img className="waves information__waves" src={waves} alt="waves" />

      <Footer />

    </>
  )
}

export default Information