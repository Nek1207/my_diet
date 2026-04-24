import React from 'react'

import "./../CalculatorResults/CalculatorResults.scss"

import Button from "../../components/Button/Button"
import Input from '../../components/Input/InputOld'

import { useScrollAnimation } from '../../smoothscrolling'
import { useScrollAnimationL } from '../../smoothscrolling-l'

import rounds from "./../../assets/content/cont_sectors.png"
import branch from "./../../assets/content/branch_calculator.svg"
import branch2 from "./../../assets/content/branch_calculator2.svg"
import branches from "./../../assets/content/cont_branches.svg"

import leaf1 from "./../../assets/content/leaf_darkgreen.svg"
import leaf2 from "./../../assets/content/leaf_darkgreen2.svg"
import leaf3 from "./../../assets/content/cont_headerleaf.svg"
import leaf4 from "./../../assets/content/cont_headerleaf2.svg"

import time from "./../../assets/content/cont_time.svg"
import more from "./../../assets/content/cont_more.svg"
import economy from "./../../assets/content/cont_ecomony.svg"
import waves from "./../../assets/content/cont_waves.svg"
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const Calculator = () => {
  const sectionRefs = useScrollAnimation(0.8)
  const branchesRefs = useScrollAnimationL(0.5)

  const ccalperday = 2500

  return (
    <>
      <Header />
      
      <div className="branch__calculator" ref={el => branchesRefs.current[0] = el}><img className="branch__image-calculator" src={branch} alt="branch"/></div>
      <div className="branch__calculator2" ref={el => branchesRefs.current[0] = el}><img className="branch__image-calculator" src={branch2} alt="branch"/></div>
      <section className="calculator">  
        <h3 ref={el => sectionRefs.current[0] = el} className="subheading c-green smoothscrolling hidden">Ваша норма составляет...</h3>
        <div ref={el => sectionRefs.current[1] = el} className="calculator__results smoothscrolling hidden">  
          <img className="main__rightnow__image" src={leaf1} alt="leaf1" />
          <h3 className="numbers c-darkgreen">{ccalperday}</h3>
          <img className="main__rightnow__image2" src={leaf2} alt="leaf2" />
        </div>
        <h2 ref={el => sectionRefs.current[2] = el} className="heading2 smoothscrolling hidden">ккал/день</h2>
        <div ref={el => sectionRefs.current[3] = el} className="calculator__saveresults smoothscrolling hidden">
          <div className="calculator__saveresults__texts">
            <h3 className="subheading c-green">сохраните результат</h3>
            <h3 className="subheading c-carrot">в Вашем аккаунте</h3>
          </div>
        <Button title="перейти в аккаунт" styles="default" status="default" specialStyles="move-to-account"/>
        </div>
        <h3 ref={el => sectionRefs.current[4] = el} className="calculator__more__title smoothscrolling hidden">подробнее о расчётах</h3>
        <div ref={el => sectionRefs.current[5] = el} className="calculator__more smoothscrolling hidden">
          <h3 className="calculator__more__formula">формула = вес (кг) × 10 + рост (см) × 6.25 - возраст × 5 × k + p</h3>
          <p className="calculator__more__description">p – мужчинам – 5, женщинам – -161</p>
          <p className="calculator__more__description">k – коэффициент активности:</p>
          <ul className="calculator__more__list">
            <li className="calculator__more__list-item">сидите много – 1.2</li>
            <li className="calculator__more__list-item">ходите/работаете – 1.4</li>
            <li className="calculator__more__list-item">тренируетесь 3 раза в неделю – 1.55</li>
          </ul>
          <h3 className="calculator__more__formulaname">формула Брока-Бругша</h3>
        </div>
        <h3 ref={el => sectionRefs.current[6] = el} className="subheading c-darkgreen mt4 smoothscrolling hidden">важные правила!</h3>
        <div ref={el => sectionRefs.current[7] = el} className="calculator__rules smoothscrolling hidden">
          <div className="calculator__rules-item">
            <div className="calculator__rules-item__number">1
              <img className="calculator__rules-item__image" src={leaf4} alt="leaf4" />
              <img className="calculator__rules-item__image2" src={leaf3} alt="leaf3" />
            </div>
            <h3 className="calculator__rules-item__title">взвешивайте всё в сыром виде</h3>
            <p className="calculator__rules-item__description">почему? к примеру, мясо теряет 25-35% веса, а рис/гречка – 2-3 раза разбухают</p>
          </div>
          <div className="calculator__rules-item">
            <div className="calculator__rules-item__number">2
              <img className="calculator__rules-item__image" src={leaf4} alt="leaf4" />
              <img className="calculator__rules-item__image2" src={leaf3} alt="leaf3" />
            </div>
            <h3 className="calculator__rules-item__title">напитки – тоже калории</h3>
            <p className="calculator__rules-item__description">важная деталь, учесть которую большинство просто забывают</p>
          </div>
          <div className="calculator__rules-item">
            <div className="calculator__rules-item__number">3
              <img className="calculator__rules-item__image" src={leaf4} alt="leaf4" />
              <img className="calculator__rules-item__image2" src={leaf3} alt="leaf3" />
            </div>
            <h3 className="calculator__rules-item__title">правило 80/20</h3>
            <p className="calculator__rules-item__description">80% времени кушайте по КБЖУ, а остальными 20% позволяйте себе что-нибудь вкусненькое и не совсем полезное – Вы не машина!</p>
          </div>
        </div>
      </section>

      <img className="waves" src={waves} alt="waves" />
      <Footer />
    </>
  )
}

export default Calculator