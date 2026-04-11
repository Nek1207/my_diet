import React, { useState, forwardRef } from 'react'
import PropTypes from 'prop-types'
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaCalendarAlt,
  FaWeight,
  FaBalanceScale,
  FaBolt,
  FaBullseye,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa'

import "./../Input/Input.scss"

const iconMap = {
  login: <FaUser />,
  password: <FaLock />,
  email: <FaEnvelope />,
  age: <FaCalendarAlt />,
  weight: <FaWeight />,
  scale: <FaBalanceScale />,
  energy: <FaBolt />,
  target: <FaBullseye />,
}

const Input = forwardRef(
  (
    {
      type = 'text',
      id,
      name,
      value,
      placeholder,
      className = '',
      wrapperClassName = '',
      isRequired = false,
      isDisabled = false,
      leftIcon,
      onChange,
      status = 'default', // 'default' | 'error' | 'success'
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)
    const actualType = type === 'password' && showPassword ? 'text' : type
    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    }
    const renderLeftIcon = () => {
      if (!leftIcon) return null
      if (typeof leftIcon === 'string' && iconMap[leftIcon]) {
        return iconMap[leftIcon]
      }
      return leftIcon
    }
    const leftIconElement = renderLeftIcon()
    // Формируем классы для обертки и инпута
    const wrapperClasses = [
      'input-wrapper',
      status !== 'default' && `input-wrapper--${status}`,
      wrapperClassName,
    ]
      .filter(Boolean)
      .join(' ')
    const inputClasses = [
      'input-field',
      status !== 'default' && `input-field--${status}`,
      className,
    ]
      .filter(Boolean)
      .join(' ')
    return (
      <div className={wrapperClasses}>
        {leftIconElement && (
          <span className="input-icon left-icon">{leftIconElement}</span>
        )}
        <input
          ref={ref}
          id={id}
          name={name}
          type={actualType}
          value={value}
          placeholder={placeholder}
          className={inputClasses}
          required={isRequired}
          disabled={isDisabled}
          onChange={onChange}
          {...rest}
        />
        {/* Иконка статуса справа (success/error) */}
        {status === 'success' && (
          <span className="status-icon status-icon--success">
            <FaCheckCircle />
          </span>
        )}
        {status === 'error' && (
          <span className="status-icon status-icon--error">
            <FaExclamationCircle />
          </span>
        )}
        {/* Кнопка показа/скрытия пароля (только если не success/error, чтобы не накладывались иконки) */}
        {type === 'password' && (
          <button
            type="button"
            className="password-toggle"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
            tabIndex={-1}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input'
Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool,
  leftIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onChange: PropTypes.func,
  status: PropTypes.oneOf(['default', 'error', 'success']),
}

export default Input