import React, { useState } from 'react'

import "./../Form/Form.scss"

import Input from './../Input/Input'

const Form = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordSuccess, setPasswordSuccess] = useState(false)

  const validateEmail = (value) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setEmailError(!isValid && value.length > 0);
  }

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val)
    validateEmail(val)
  };

  const handlePasswordChange = (e) => {
    const val = e.target.value
    setPassword(val)
    setPasswordSuccess(val.length >= 8)
  };

  return (
    <form style={{ maxWidth: '400px', margin: '20px auto' }}>
      <div style={{ marginBottom: '16px' }}>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          leftIcon="email"
          status={emailError ? 'error' : 'default'}
          isRequired
        />
        {emailError && (
          <small style={{ color: '#ef4444' }}>Некорректный email</small>
        )}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Пароль"
          leftIcon="password"
          status={passwordSuccess ? 'success' : 'default'}
        />
        {passwordSuccess && (
          <small style={{ color: '#10b981' }}>Пароль достаточно длинный</small>
        )}
      </div>

      <button type="submit">Отправить</button>
    </form>
  )
}

export default Form