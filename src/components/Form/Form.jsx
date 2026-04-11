import React, { useState } from 'react'

import "./../Form/Form.scss"

import Input from './../Input/Input'

const Form = () => {
  const [login, setLogin] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordSuccess, setPasswordSuccess] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)

  const [form, setForm] = useState({
    login: '',
    password: '',
    email: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  const validateEmail = (value) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setEmailError(!isValid && value.length > 0);
  }

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val)
    validateEmail(val)
  }

  const handlePasswordChange = (e) => {
    const val = e.target.value
    setPassword(val)
    setPasswordSuccess(val.length >= 8)
  }

  const handleLoginChange = (e) => {
    const val = e.target.value
    setLogin(val)
    setLoginSuccess(val.length >= 10)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      console.log('Отправленные данные:', form)
      setIsSubmitting(false)
      // Здесь можно добавить сброс формы или редирект
    }, 4000)
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__items">

        <div className="form__items-item">
          <Input
            type="text"
            name="login"
            value={login}
            onChange={handleLoginChange}
            placeholder="логин"
            leftIcon="login"
            isDisabled={isSubmitting}
            isRequired
            status={loginSuccess ? 'success' : 'default'}
          />
          {loginSuccess && (
            <small style={{ color: '#3BB273' }}>свободный логин</small>
          )}
        </div>

        <div className="form__items-item">
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="e-mail"
            leftIcon="email"
            status={emailError ? 'error' : 'default'}
            isDisabled={isSubmitting}
            isRequired
          />
          {emailError && (
            <small style={{ color: '#FF595E' }}>укажите e-mail правильно</small>
          )}
        </div>

        <div className="form__items-item">
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="пароль"
            leftIcon="password"
            isDisabled={isSubmitting}
            isRequired
            status={passwordSuccess ? 'success' : 'default'}
          />
          {passwordSuccess && (
            <small style={{ color: '#3BB273' }}>надёжный пароль</small>
          )}
        </div>
      </div>
      <button class="button form__button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'отправка...' : 'отправить'}
      </button>
    </form>
  )
}

export default Form