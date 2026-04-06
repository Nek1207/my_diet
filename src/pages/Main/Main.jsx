import React from 'react'

import Button from "../../components/Button/Button"
import Input from '../../components/Input/Input'

import rounds from "./../../assets/content/cont_sectors.png"
import branch from "./../../assets/content/branch_main1.svg"
import branch2 from "./../../assets/content/cont_branch2.svg"

import time from "./../../assets/content/cont_time.svg"
import more from "./../../assets/content/cont_more.svg"
import economy from "./../../assets/content/cont_ecomony.svg"

const Main = () => {
  return(
    <>
      <section className="main__eatsmart">
          <img src={rounds} alt="rounds" className="eatsmart__image" />
          <div className="eatsmart__titles">
            <h1 className="heading1">питайтесь <span className='c-carrot'>с умом</span></h1>
            <h2 className="desc1 t-center">следите за количеством <span className="c-proteins">белков</span>, <span className="c-fats">жиров</span> и
    <span className="c-carbs"> углеводов</span> легко и просто каждый день!</h2>
          </div>
      </section>
      <div className="branch"><img className="branch__image" src={branch} alt="branch"/></div>
      <section className="main__forwhat">
        <h1 className="heading1">зачем это нужно?</h1>
        <div className="forwhat__items">
          <div className="forwhat__item">
            <img src={time} alt="" />
            <div className="forwhat__item-texts">
              <div className="bg-carbs"><h1 className="heading2 c-white">heading2</h1></div>
              <p className="desc1">description</p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Main