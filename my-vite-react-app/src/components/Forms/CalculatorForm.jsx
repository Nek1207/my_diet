import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from "../../hooks/useLocalStorage"
import Input from '../Input/Input'

import { useScrollAnimation } from '../../smoothscrolling'
import { useScrollAnimationL } from '../../smoothscrolling-l'

import "./../Forms/Forms.scss"

const CalculatorForm = () => {
  const navigate = useNavigate() 
  const sectionRefs = useScrollAnimation()
  
  // Начальные значения формы - ВСЕГДА ПУСТЫЕ
  const initialFormState = {
    gender: 'male',
    age: null,
    weight: null,
    scale: null,
    energy: null,
    target: null
  }

  // Состояние формы (НЕ загружаем из localStorage при монтировании)
  const [form, setForm] = useState(initialFormState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Состояния для валидации
  const [ageSuccess, setAgeSuccess] = useState(false)
  const [weightSuccess, setWeightSuccess] = useState(false)
  const [scaleSuccess, setScaleSuccess] = useState(false)
  const [energySuccess, setEnergySuccess] = useState(false)
  const [targetSuccess, setTargetSuccess] = useState(false)

  // Универсальный обработчик для всех полей
  const handleChange = (e) => {
  const { name, value, type } = e.target;
  
  if (type === 'radio') {
    setForm(prev => ({ ...prev, [name]: value }));
  } else {
    setForm(prev => ({ ...prev, [name]: value }));
  }
  
  // Валидация при изменении (если поле уже было touched)
  if (touched[name]) {
    let validationResult;
    switch(name) {
      case 'age':
        validationResult = validateAge(value);
        setAgeSuccess(validationResult.isValid && value.length > 0);
        break;
      case 'weight':
        validationResult = validateWeight(value);
        setWeightSuccess(validationResult.isValid && value.length > 0);
        break;
      case 'scale':
        validationResult = validateScale(value);
        setScaleSuccess(validationResult.isValid && value.length > 0);
        break;
      case 'energy':
        validationResult = validateEnergy(value);
        setEnergySuccess(validationResult.isValid && value.length > 0);
        break;
      case 'target':
        validationResult = validateTarget(value);
        setTargetSuccess(validationResult.isValid && value.length > 0);
        break;
      default:
        return;
    }
    
    setErrors(prev => ({ ...prev, [name]: validationResult.message }));
  }
}
  // Добавьте эти функции валидации в компонент CalculatorForm

// Функции валидации
const validateAge = (value) => {
  if (!value) return { isValid: false, message: 'возраст обязателен' }
  const numValue = Number(value)
  if (isNaN(numValue)) return { isValid: false, message: 'введите число' }
  if (numValue < 3) return { isValid: false, message: 'минимальный возраст - 4 года' }
  if (numValue > 100) return { isValid: false, message: 'максимальный возраст - 100 лет' }
  return { isValid: true, message: '' }
}

const validateWeight = (value) => {
  if (!value) return { isValid: false, message: 'вес обязателен' }
  const numValue = Number(value)
  if (isNaN(numValue)) return { isValid: false, message: 'введите число' }
  if (numValue < 9) return { isValid: false, message: 'вес не может быть менее 10 кг' }
  if (numValue > 300) return { isValid: false, message: 'вес не может быть более 300 кг' }
  return { isValid: true, message: '' }
}

const validateScale = (value) => {
  if (!value) return { isValid: false, message: 'рост обязателен' }
  const numValue = Number(value)
  if (isNaN(numValue)) return { isValid: false, message: 'введите число' }
  if (numValue < 49) return { isValid: false, message: 'рост не может быть менее 50 см' }
  if (numValue > 250) return { isValid: false, message: 'рост не может быть более 250 см' }
  return { isValid: true, message: '' }
}

const validateEnergy = (value) => {
  if (!value) return { isValid: false, message: 'уровень активности обязателен' }
  const numValue = Number(value)
  if (isNaN(numValue)) return { isValid: false, message: 'введите число (1, 2 или 3)' }
  if (![1, 2, 3].includes(numValue)) return { isValid: false, message: 'введите цифру 1, 2 или 3' }
  return { isValid: true, message: '' }
}

const validateTarget = (value) => {
  if (!value) return { isValid: false, message: 'цель обязательна' }
  const numValue = Number(value)
  if (isNaN(numValue)) return { isValid: false, message: 'введите число (1, 2 или 3)' }
  if (![1, 2, 3].includes(numValue)) return { isValid: false, message: 'введите 1, 2 или 3' }
  return { isValid: true, message: '' }
}

// Добавьте состояния для ошибок после useState
const [errors, setErrors] = useState({
  age: '',
  weight: '',
  scale: '',
  energy: '',
  target: ''
})

const [touched, setTouched] = useState({
  age: false,
  weight: false,
  scale: false,
  energy: false,
  target: false
})

// Обновленный handleChange с валидацией


// Обработчик потери фокуса
const handleBlur = (e) => {
  const { name, value } = e.target;
  
  setTouched(prev => ({ ...prev, [name]: true }));
  
  let validationResult;
  switch(name) {
    case 'age':
      validationResult = validateAge(value);
      setAgeSuccess(validationResult.isValid && value.length > 0);
      break;
    case 'weight':
      validationResult = validateWeight(value);
      setWeightSuccess(validationResult.isValid && value.length > 0);
      break;
    case 'scale':
      validationResult = validateScale(value);
      setScaleSuccess(validationResult.isValid && value.length > 0);
      break;
    case 'energy':
      validationResult = validateEnergy(value);
      setEnergySuccess(validationResult.isValid && value.length > 0);
      break;
    case 'target':
      validationResult = validateTarget(value);
      setTargetSuccess(validationResult.isValid && value.length > 0);
      break;
    default:
      return;
  }
  
  setErrors(prev => ({ ...prev, [name]: validationResult.message }));
}

// Обновленный handleSubmit с проверкой всех полей
const handleSubmit = (e) => {
  e.preventDefault()
  
  // Отмечаем все поля как touched
  setTouched({
    age: true,
    weight: true,
    scale: true,
    energy: true,
    target: true
  })
  
  // Валидация всех полей
  const ageValidation = validateAge(form.age)
  const weightValidation = validateWeight(form.weight)
  const scaleValidation = validateScale(form.scale)
  const energyValidation = validateEnergy(form.energy)
  const targetValidation = validateTarget(form.target)
  
  // Устанавливаем ошибки
  setErrors({
    age: ageValidation.message,
    weight: weightValidation.message,
    scale: scaleValidation.message,
    energy: energyValidation.message,
    target: targetValidation.message
  })
  
  // Проверяем валидность
  const isValid = ageValidation.isValid && 
                  weightValidation.isValid && 
                  scaleValidation.isValid && 
                  energyValidation.isValid && 
                  targetValidation.isValid
  
  if (!isValid) {
    alert('Пожалуйста, исправьте ошибки в форме')
    return
  }
  
  // Если все поля валидны, отправляем
  setIsSubmitting(true)
  
  try {
    console.log('Отправляемые данные:', form)
    
    // Сохраняем в localStorage
    localStorage.setItem('CalculatorFormData', JSON.stringify(form))
    
    const savedData = localStorage.getItem('CalculatorFormData')
    console.log('Сохраненные данные:', JSON.parse(savedData))
    
    setTimeout(() => {
      console.log('Данные успешно отправлены:', form)
      setIsSubmitting(false)
      navigate('/calculatorresults', { replace: true })
      // alert('✅ Данные успешно сохранены в localStorage!')
      
    }, 100)
    
  } catch (error) {
    console.error('Ошибка при сохранении:', error)
    setIsSubmitting(false)
    alert('Возникла ошибка при сохранении данных')
  }
}

  const handleClearStorage = () => {
    if (window.confirm('Вы уверены, что хотите очистить форму?')) {
      clearForm()
      setAgeSuccess(false)
      setWeightSuccess(false)
      setScaleSuccess(false)
      setEnergySuccess(false)
      setTargetSuccess(false)
    }
  }
const handleClearForm = () => {
  if (window.confirm('Вы уверены, что хотите очистить все поля формы?')) {
    setForm({
      gender: 'male',
      age: '',
      weight: '',
      scale: '',
      energy: '',
      target: ''
    })
    
    setAgeSuccess(false)
    setWeightSuccess(false)
    setScaleSuccess(false)
    setEnergySuccess(false)
    setTargetSuccess(false)
    
    setErrors({
      age: '',
      weight: '',
      scale: '',
      energy: '',
      target: ''
    })
    
    setTouched({
      age: false,
      weight: false,
      scale: false,
      energy: false,
      target: false
    })
    
    localStorage.removeItem('CalculatorFormData')
  }
}
  // Загрузка сохраненных данных при монтировании (если нужно)
  useEffect(() => {
    const savedData = localStorage.getItem('CalculatorFormData')
    if (savedData) {
      const parsedData = JSON.parse(savedData)
      console.log('Загружены сохраненные данные:', parsedData)
      
      // Обновить состояния валидации при загрузке
      if (parsedData.age) setAgeSuccess(true)
      if (parsedData.weight) setWeightSuccess(true)
      if (parsedData.scale) setScaleSuccess(true)
      if (parsedData.energy) setEnergySuccess(true)
      if (parsedData.target) setTargetSuccess(true)
    }
  }, [])

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__items">        
        <div ref={el => sectionRefs.current[0] = el} className="smoothscrolling hidden form__items-item">
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

        <div ref={el => sectionRefs.current[1] = el} className="smoothscrolling hidden form__items-item">
          <h1 className="inputtitle">возраст</h1>
          <Input
            type="text"
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="возраст (полных лет)"
            leftIcon="age"
            isDisabled={isSubmitting}
            isRequired
            status={ageSuccess && touched.age ? 'success' : errors.age && touched.age ? 'error' : 'default'}
          />
          {touched.age && errors.age && <span className="error-message">{errors.age}</span>}
        </div>
        
        <div ref={el => sectionRefs.current[2] = el} className="smoothscrolling hidden form__items-item">
          <h1 className="inputtitle">вес</h1>
          <Input
            type="text"
            name="weight"
            value={form.weight}
            onChange={handleChange}
            placeholder="вес (в кг)"
            leftIcon="weight"
            isDisabled={isSubmitting}
            isRequired
            status={weightSuccess && touched.weight ? 'success' : errors.weight && touched.weight ? 'error' : 'default'}
          />
          {touched.weight && errors.weight && <span className="error-message">{errors.weight}</span>}
        </div>
        
        <div ref={el => sectionRefs.current[3] = el} className="smoothscrolling hidden form__items-item">
          <h1 className="inputtitle">рост</h1>
          <Input
            type="text"
            name="scale"
            value={form.scale}
            onChange={handleChange}
            placeholder="рост (в см)"
            leftIcon="scale"
            isDisabled={isSubmitting}
            isRequired
            status={scaleSuccess && touched.scale ? 'success' : errors.scale && touched.scale ? 'error' : 'default'}
          />
          {touched.scale && errors.scale && <span className="error-message">{errors.scale}</span>}
        </div>
        
        <div ref={el => sectionRefs.current[4] = el} className="smoothscrolling hidden form__items-item">
          <h1 className="inputtitle">уровень активности</h1>
          <Input
            type="text"
            name="energy"
            value={form.energy}
            onChange={handleChange}
            placeholder="укажите уровень активности (1 - мин, 2 - умеренный, 3 - макс)"
            leftIcon="energy"
            isDisabled={isSubmitting}
            isRequired
            status={energySuccess && touched.energy ? 'success' : errors.energy && touched.energy ? 'error' : 'default'}
          />
          {touched.energy && errors.energy && <span className="error-message">{errors.energy}</span>}
        </div>
        
        <div ref={el => sectionRefs.current[5] = el} className="smoothscrolling hidden form__items-item">
          <h1 className="inputtitle">цель</h1>
          <Input
            type="text"
            name="target"
            value={form.target}
            onChange={handleChange}
            placeholder="укажите цель (1 - набор, 2 - похудение, 3 - удерживание веса)"
            leftIcon="target"
            isDisabled={isSubmitting}
            isRequired
            status={targetSuccess && touched.target ? 'success' : errors.target && touched.target ? 'error' : 'default'}
          />
          {touched.target && errors.target && <span className="error-message">{errors.target}</span>}
        </div>
      </div>
      
      <div ref={el => sectionRefs.current[6] = el} className="smoothscrolling hidden form__buttons">
        <button className="button form__button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'отправка данных...' : 'рассчитать'}
        </button>
        <button className="button form__button" type="button" onClick={handleClearForm}>
          очистить форму
        </button>
      </div>
    </form>
  )
}

export default CalculatorForm