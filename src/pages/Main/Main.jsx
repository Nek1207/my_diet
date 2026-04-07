import React from 'react'

import Button from "../../components/Button/Button"
import Input from '../../components/Input/Input'

import { useScrollAnimation } from '../../smoothscrolling'
import { useScrollAnimationL } from '../../smoothscrolling-l'

import rounds from "./../../assets/content/cont_sectors.png"
import branch from "./../../assets/content/branch_main1.svg"
import branch2 from "./../../assets/content/branch_main2.svg"
import branches from "./../../assets/content/cont_branches.svg"

import leaf1 from "./../../assets/content/cont_leaf.svg"
import leaf2 from "./../../assets/content/cont_leaf2.svg"

import time from "./../../assets/content/cont_time.svg"
import more from "./../../assets/content/cont_more.svg"
import economy from "./../../assets/content/cont_ecomony.svg"
import waves from "./../../assets/content/cont_waves.svg"
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const Main = () => {
  const sectionRefs = useScrollAnimation(0.8)
  const branchesRefs = useScrollAnimationL(0.5)

  return (
    <>
      <Header />
      
      <section ref={el => sectionRefs.current[0] = el} className="main__eatsmart smoothscrolling hidden">
          <img src={rounds} alt="rounds" className="main__eatsmart__image" />
          <div className="main__eatsmart__titles">
            <h1 className="heading1">питайтесь <span className='c-carrot'>с умом</span></h1>
            <h2 className="desc1 t-center">следите за количеством <span className="c-proteins">белков</span>, <span className="c-fats">жиров</span> и <span className="c-carbs"> углеводов</span> легко и просто каждый день!</h2>
          </div>
      </section>
      <div className="branch smoothscrolling-l hidden" ref={el => branchesRefs.current[0] = el}><img className="branch__image" src={branch} alt="branch"/></div>
      <section className="main__forwhat">
        <h1 ref={el => sectionRefs.current[2] = el} className="heading1 smoothscrolling hidden">зачем это нужно?</h1>
        <div className="main__forwhat__items">
          <div ref={el => sectionRefs.current[3] = el} className="main__forwhat__item smoothscrolling hidden">
            <img className="main__forwhat__item-image" src={time} alt="forwhat__image" />
            <div className="main__forwhat__item-texts">
              <div className="bg bg-carbs"><h1 className="heading2 c-white">красивая и стройная фигура</h1></div>
              <p className="desc1">люди часто едят больше, чем нужно, и не замечают, как набирают вес, в то время как калькулятор показывает <span className="c-fats">точное количество калорий</span>, которое подходит <span className="c-fats">именно Вам</span></p>
            </div>
          </div>
          <div ref={el => sectionRefs.current[4] = el} className="main__forwhat__item smoothscrolling hidden">
            <img className="main__forwhat__item-image" src={more} alt="forwhat__image" />
            <div className="main__forwhat__item-texts">
              <div className="bg bg-fats"><h1 className="heading2 c-white">больше сил и здоровья</h1></div>
              <p className="desc1">белок нужен для мышц, жиры – для мозга и гормонов, углеводы – для энергии: питайтесь <span className="c-fats">и вкусно, и полезно</span></p>
            </div>
          </div>
          <div ref={el => sectionRefs.current[5] = el} className="main__forwhat__item smoothscrolling hidden">
            <img className="main__forwhat__item-image" src={economy} alt="forwhat__image" />
            <div className="main__forwhat__item-texts">
              <div className="bg bg-proteins"><h1 className="heading2 c-white">экономия времени и денег</h1></div>
              <p className="desc1">красивые кружочки БЖУ <span className="c-fats">мотивируют и показывают прогресс</span>, а у Вас <span className="c-fats">получится сэкономить</span> 500 рублей в неделю на перекусах и 1 час времени на расчёты</p>
            </div>
          </div>
        </div>
      </section>
      <div className="branch smoothscrolling-r hidden" ref={el => branchesRefs.current[1] = el}><img className="branch__image" src={branch2} alt="branch2"/></div>
      <section className="main__threesteps">
        <h1 ref={el => sectionRefs.current[6] = el} className="heading1">выполните лишь <span className='c-carrot'>три шага</span></h1>
        <img ref={el => sectionRefs.current[7] = el} className="main__threesteps__image" src={branches} alt="branches" />
      </section>
      <img className="waves" src={waves} alt="waves" />
      <section className="main__rightnow">
        <h2 ref={el => sectionRefs.current[8] = el} className="heading2 c-white">узнайте свой план питания <span className='c-darkgreen'><br />прямо сейчас!</span></h2>
        <Button ref={el => sectionRefs.current[9] = el} title="создать аккаунт" styles="default" status="default" specialStyles="create-account"/>
        <img className="main__rightnow__image" src={leaf1} alt="leaf1" />
        <img className="main__rightnow__image2" src={leaf2} alt="leaf2" />
      </section>

      <Footer />
    </>
  )
}

export default Main