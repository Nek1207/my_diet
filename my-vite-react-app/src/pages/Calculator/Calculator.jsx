import React from 'react'
import "./../Calculator/Calculator.scss"
import Button from "../../components/Button/Button"
import Input from '../../components/Input/InputOld'
import { useScrollAnimation } from '../../smoothscrolling'
import { useScrollAnimationL } from '../../smoothscrolling-l'
import rounds from "./../../assets/content/cont_sectors.png"
import branch from "./../../assets/content/branch_calculator.svg"
import branch2 from "./../../assets/content/branch_calculator2.svg"
import branches from "./../../assets/content/cont_branches.svg"
import leaf1 from "./../../assets/content/cont_leaf.svg"
import leaf2 from "./../../assets/content/cont_leaf2.svg"
import time from "./../../assets/content/cont_time.svg"
import more from "./../../assets/content/cont_more.svg"
import economy from "./../../assets/content/cont_ecomony.svg"
import waves from "./../../assets/content/cont_waves.svg"
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import CalculatorForm from '../../components/Forms/CalculatorForm'
const Calculator = () => {
  const sectionRefs = useScrollAnimation(0.2)
  const branchesRefs = useScrollAnimationL(0.5)
  return (
    <>
      <Header />
      <div className="branch__calculator" ref={el => branchesRefs.current[0] = el}><img className="branch__image-calculator" src={branch} alt="branch"/></div>
      <div className="branch__calculator2" ref={el => branchesRefs.current[1] = el}><img className="branch__image-calculator" src={branch2} alt="branch"/></div>
      <section className="calculator">
        <h3 ref={el => sectionRefs.current[0] = el} className="subheading c-green lh1 smoothscrolling hidden">измените частичку жизни</h3>
        <h3 ref={el => sectionRefs.current[1] = el} className="subheading c-carrot lh1 smoothscrolling hidden">за 30 секунд</h3>
        <div className="calculator__form">
          <CalculatorForm />
        </div>
      </section>
      <img className="waves" src={waves} alt="waves" />
      <Footer />
    </>
  )
}
export default Calculator

