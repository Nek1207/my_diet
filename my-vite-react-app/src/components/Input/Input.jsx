import React, { useState, forwardRef, useRef } from 'react'
import PropTypes from 'prop-types'
import { FaUser, FaLock, FaEnvelope, FaTransgender,
  FaCalendarAlt, FaWeight, FaBalanceScale, FaBolt,
  FaBullseye, FaEye, FaEyeSlash, FaCheckCircle,
  FaExclamationCircle } from 'react-icons/fa'
import "./../Input/Input.scss"
const iconMap = {
  login: <FaUser />,
  password: <FaLock />,
  email: <FaEnvelope />,
  gender: <FaTransgender />,
  age: <FaCalendarAlt />,
  weight: <FaWeight />,
  scale: <FaBalanceScale />,
  energy: <FaBolt />,
  target: <FaBullseye />,
}
const Input = forwardRef(({
    type = 'text', id, name, value, placeholder,
    className = '', wrapperClassName = '',
    isRequired = false, isDisabled = false,
    leftIcon, onChange, status = 'default', ...rest
}, ref) => {
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
    const wrapperClasses = [
      'input',
      status !== 'default' && `input--${status}`,
      wrapperClassName,
    ].filter(Boolean).join(' ')
    const inputClasses = [
      'input__field',
      status !== 'default' && `input__field--${status}`,
      className,
    ].filter(Boolean).join(' ')
    return (
        <div className={wrapperClasses}>
            {leftIconElement && ( <div className="input__icon">
              <span className="input__icon-image">{leftIconElement}</span></div> )}
            <input
                ref={ref} id={id} name={name} type={actualType} value={value} placeholder={placeholder}
                className={inputClasses} required={isRequired} disabled={isDisabled} onChange={onChange}
                {...rest}
            />
            {type === 'password' && (
            <button
                type="button"
                className="input__password"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? 'скрыть пароль' : 'показать пароль'}
                tabIndex={-1}
            >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            )}
        </div>
    )
})
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
