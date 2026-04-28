import React, { useState, useEffect } from 'react'

import { calculateCcal, calculateBMI, getBMICategory, calculateWater, calculateMacros } from '../../calculations'

import "./../CalculatorResults/CalculatorResults.scss"
import "./../Main/Main.scss"

import Button from "../../components/Button/Button"
import Input from '../../components/Input/InputOld'

// import { useScrollAnimation } from '../../smoothscrolling-alt'
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
import { NavLink } from 'react-router-dom'



const Calculator = () => {
  const branchesRefs = useScrollAnimationL(0.5)

  const [formData, setFormData] = useState(null)
  const [calories, setCalories] = useState(null)
  const [bmi, setBmi] = useState(null)
  const [bmiCategory, setBmiCategory] = useState(null)
  const [water, setWater] = useState(null)
  const [macros, setMacros] = useState(null)

  useEffect(() => {
  console.log('Запуск Observer');
  
  const elements = document.querySelectorAll('.animate-to-scroll');
  console.log('Элементов для наблюдения:', elements.length);
  
  if (elements.length === 0) {
    console.warn('Нет элементов с классом .animate-to-scroll!');
    return;
  }
  
  // Создаем observer с минимальным порогом
  const observer = new IntersectionObserver((entries) => {
    console.log('Observer сработал, количество записей:', entries.length);
    
    entries.forEach(entry => {
      console.log('Элемент:', entry.target);
      console.log('  - isIntersecting:', entry.isIntersecting);
      console.log('  - intersectionRatio:', entry.intersectionRatio);
      
      if (entry.isIntersecting) {
        console.log('ДОБАВЛЯЕМ visible!');
        entry.target.classList.add('visible');
        console.log('  - Новые классы:', entry.target.className);
      }
    });
  }, { 
    threshold: 0.01,  // Минимальный порог - 1% видимости
    rootMargin: '50px'  // Срабатывает за 50px до появления
  });
  
  // Начинаем наблюдение
  elements.forEach((el, i) => {
    console.log(`Начинаем наблюдение за элементом ${i}`);
    observer.observe(el);
  });
  
  // Проверяем видимость через 100мс после загрузки
  setTimeout(() => {
    console.log('=== Принудительная проверка видимости ===');
    elements.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      console.log(`Элемент ${i}: top=${rect.top}, bottom=${rect.bottom}, видим=${isVisible}`);
      
      if (isVisible && !el.classList.contains('visible')) {
        console.log(`Принудительно показываем элемент ${i}`);
        el.classList.add('visible');
      }
    });
  }, 500);
  
  return () => {
    console.log('Очистка observer');
    observer.disconnect();
  };
}, []);

  useEffect(() => {
    const savedData = localStorage.getItem('CalculatorFormData')
    if (savedData) {
      const parsedData = JSON.parse(savedData)
      setFormData(parsedData)
      
      // Вычисляем все показатели
      const ccal = calculateCcal(parsedData)
      const bmiValue = calculateBMI(parsedData)
      const waterAmount = calculateWater(parsedData)
      
      setCalories(ccal)
      setBmi(bmiValue)
      setWater(waterAmount)
      
      if (bmiValue) {
        setBmiCategory(getBMICategory(bmiValue))
      }
      
      if (ccal) {
        setMacros(calculateMacros(ccal))
      }
    }
  }, [])

  if (!formData) {
    return <div className="loading">загрузка данных...</div>
  }

  return (
    <>
      <Header />
      
      <div className="branch__calculator"><img className="branch__image-calculator" src={branch} alt="branch"/></div>
      <div className="branch__calculator2"><img className="branch__image-calculator" src={branch2} alt="branch"/></div>
      <section className="calculator">  
        <h3 className="subheading c-green animate-on-scroll">Ваша норма составляет...</h3>
        <div className="calculator__results animate-on-scroll">  
          <img className="main__rightnow__image" src={leaf1} alt="leaf1" />
          <h3 className="numbers c-darkgreen">{calories}</h3>
          <img className="main__rightnow__image2" src={leaf2} alt="leaf2" />
        </div>
        <h2 className="heading2 animate-on-scroll">ккал/день</h2>
        {bmi && (
        <div className="results__bmi">
          <div className="results__bmi-inner">
            <h3 className='desc2 c-black'>индекс массы тела (ИМТ):</h3>
            <p className="bmi-value desc2" style={{ color: bmiCategory?.color }}>
              {bmi}
            </p>
            <p className="bmi-category desc2" style={{ color: bmiCategory?.color }}>({bmiCategory?.category})</p>
          </div>
        </div>
      )}
      {water && (
        <div className="results__water">
          <div className="results__water-inner">
            <h3 className='desc2 c-black'>рекомендуемая норма воды:</h3>
            <p className="water-value desc2 c-green">
              {water} литров/день
            </p>
          </div>
        </div>
      )}
      {macros && (
        <div className="results__macros">
          <div className="results__macros-inner">
            <h3 className='desc2 c-black'>рекомендуемое БЖУ:</h3>
            <div className="macros">
              <div className="macros-item">
                <span className="macro-label desc2 c-black">белки:</span>
                <span className="macro-value desc2 c-proteins">{macros.protein} г</span>
              </div>
              <div className="macros-item">
                <span className="macro-label desc2 c-black">жиры:</span>
                <span className="macro-value desc2 c-fats">{macros.fats} г</span>
              </div>
              <div className="macros-item">
                <span className="macro-label desc2 c-black">углеводы:</span>
                <span className="macro-value desc2 c-carbs">{macros.carbs} г</span>
              </div>
            </div>
          </div>
        </div>
      )}
        <div className="calculator__saveresults animate-on-scroll">
          <div className="calculator__saveresults__texts">
            <h3 className="subheading c-green">сохраните результат</h3>
            <h3 className="subheading c-carrot">в Вашем аккаунте</h3>
          </div>
        <NavLink to="/forbidden"><Button title="перейти в аккаунт" styles="default" status="default" specialStyles="move-to-account"/></NavLink>
        </div>
        <h3 className="calculator__more__title animate-on-scroll">подробнее о расчётах</h3>
        <div className="calculator__more animate-on-scroll">
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
        <h3 className="subheading c-darkgreen mt4 animate-on-scroll">важные правила!</h3>
        <div className="calculator__rules animate-on-scroll">
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