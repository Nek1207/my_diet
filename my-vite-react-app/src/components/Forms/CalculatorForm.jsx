import React, { useState } from 'react'
import useLocalStorage from "../../hooks/useLocalStorage"
import Input from '../Input/Input'

import male from "../../assets/input/input_male.svg"
import female from "../../assets/input/input_female.svg"
import "./../Forms/Forms.scss"

const CalculatorForm = () => {
  // const [login, setLogin] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [emailError, setEmailError] = useState(false)
  // const [passwordSuccess, setPasswordSuccess] = useState(false)
  // const [loginSuccess, setLoginSuccess] = useState(false)

  const [gender, setGender] = useState("male")
  const [age, setAge] = useState(0)
  const [weight, setWeight] = useState(0)
  const [scale, setScale] = useState(0)
  const [energy, setEnergy] = useState("")
  const [target, setTarget] = useState("")

  const [genderSuccess, setGenderSuccess] = useState(false)
  const [ageSuccess, setAgeSuccess] = useState(false)
  const [weightSuccess, setWeightSuccess] = useState(false)
  const [scaleSuccess, setScaleSuccess] = useState(false)
  const [energySuccess, setEnergySuccess] = useState(false)
  const [targetSuccess, setTargetSuccess] = useState(false)

  const [form, setForm, clearForm] = useLocalStorage('CalculatorFormData', {
    // login: '',
    // email: '',
    // password: '',
    // passwordRepeat: '',
    gender: gender,
    age: age,
    weight: weight,
    scale: scale,
    energy: energy,
    target: target
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  const handleGenderChange = (element) => {
    const value = element.target.value
    setGender(value)
  }
  const handleAgeChange = (element) => {
    const value = element.target.value
    setAge(value)
  }
  const handleWeightChange = (element) => {
    const value = element.target.value
    setWeight(value)
  }
  const handleScaleChange = (element) => {
    const value = element.target.value
    setScale(value)
  }
  const handleEnergyChange = (element) => {
    const value = element.target.value
    setEnergy(value)
  }
  const handleTargetChange = (element) => {
    const value = element.target.value
    setTarget(value)
  }

  // const validateEmail = (value) => {
  //   const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  //   setEmailError(!isValid && value.length > 0);
  // }
  // const handleEmailChange = (e) => {
  //   const val = e.target.value;
  //   setEmail(val)
  //   validateEmail(val)
  // }
  // const handlePasswordChange = (e) => {
  //   const val = e.target.value
  //   setPassword(val)
  //   setPasswordSuccess(val.length >= 8)
  // }
  // const handleLoginChange = (e) => {
  //   const val = e.target.value
  //   setLogin(val)
  //   setLoginSuccess(val.length >= 10)
  // }

const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
        console.log('Отправляемые данные:', form)
        
        // Сохраняем в localStorage
        localStorage.setItem('formData', JSON.stringify(form))
        
        // Проверяем, что сохранилось
        const savedData = localStorage.getItem('formData')
        console.log('Сохраненные данные:', JSON.parse(savedData))
        
        setTimeout(() => {
            console.log('отправленные данные:', form)
            setIsSubmitting(false)
            
            // Успешное сохранение
            alert('✅ Данные успешно сохранены в localStorage!')
            
            // Опционально: очистить форму
            // setForm({})
            
            // Опционально: редирект
            // navigate('/success')
        }, 4000)
        
    } catch (error) {
        console.error('Ошибка при сохранении:', error)
        setIsSubmitting(false)
        alert('❌ Ошибка при сохранении данных')
    }
}

// Функция для загрузки сохраненных данных
const loadSavedData = () => {
    const savedData = localStorage.getItem('formData')
    if (savedData) {
        setForm(JSON.parse(savedData))
        console.log('Загружены сохраненные данные')
    }
}

// Функция для очистки localStorage
const clearLocalStorage = () => {
    localStorage.removeItem('formData')
    setForm({})
    console.log('localStorage очищен')
}

  const handleClearStorage = () => {
    clearForm()
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__items">        
        <div className="form__items-item">
        <p className="inputtitle">пол</p>
        <div className="form__items-item-radio">
          <label htmlFor="male" className={form.gender === 'male' ? 'checked-label' : ''}>
            <Input
              type="radio"
              name="gender"
              value="male"
              id="male"
              checked={form.gender === 'male'}
              onChange={handleChange}
              placeholder="мужской"
              leftIcon="gender"
              isDisabled={isSubmitting}
              isRequired
            />
            <span className="radio-label-text">
              мужской
            </span>
            
          </label>
          
          <label htmlFor="female" className={form.gender === 'female' ? 'checked-label' : ''}>
            <Input
            type="radio"
            name="gender"
            value="female"
            id="female"
            checked={form.gender === 'female'}
            onChange={handleChange}
            placeholder="женский"
            leftIcon="gender"
            isDisabled={isSubmitting}
            isRequired
          />
          <span className="radio-label-text">
              женский
            </span>
          </label>
          
          
        </div>
      </div>

        <div className="form__items-item">
          <h1 className="inputtitle">возраст</h1>
          <Input
            type="number"
            name="age"
            value={age}
            onChange={handleAgeChange}
            placeholder="возраст (полных лет)"
            leftIcon="age"
            isDisabled={isSubmitting}
            isRequired
            status={ageSuccess ? 'success' : 'default'}
          />
        </div>
        <div className="form__items-item">
          <h1 className="inputtitle">вес</h1>
          <Input
            type="number"
            name="weight"
            value={weight}
            onChange={handleWeightChange}
            placeholder="вес (в кг)"
            leftIcon="weight"
            isDisabled={isSubmitting}
            isRequired
            status={weightSuccess ? 'success' : 'default'}
          />
        </div>
        <div className="form__items-item">
          <h1 className="inputtitle">рост</h1>
          <Input
            type="number"
            name="scale"
            value={scale}
            onChange={handleScaleChange}
            placeholder="рост (в см)"
            leftIcon="scale"
            isDisabled={isSubmitting}
            isRequired
            status={scaleSuccess ? 'success' : 'default'}
          />
        </div>
        <div className="form__items-item">
          <h1 className="inputtitle">уровень активности</h1>
          <Input
            type="text"
            name="energy"
            value={energy}
            onChange={handleEnergyChange}
            placeholder="укажите уровень активности (1 - мин, 2 - умеренный, 3 - макс)"
            leftIcon="energy"
            isDisabled={isSubmitting}
            isRequired
            status={energySuccess ? 'success' : 'default'}
          />
        </div>
        <div className="form__items-item">
          <h1 className="inputtitle">цель</h1>
          <Input
            type="text"
            name="target"
            value={target}
            onChange={handleTargetChange}
            placeholder="укажите цель"
            leftIcon="target"
            isDisabled={isSubmitting}
            isRequired
            status={targetSuccess ? 'success' : 'default'}
          />
        </div>

      </div>
      <div className="form__buttons">
        <button className="button form__button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'отправка...' : 'отправить'}
        </button>
        <button className="button form__button" type="button" onClick={handleClearStorage}>
          очистить
        </button>
      </div>
      
    </form>
  )
}

export default CalculatorForm