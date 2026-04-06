import React from "react"


const Input = ( { type, id, name, placeholder, value, styles, status, isRequired, isDisabled } ) => {
  const InputStatus = status
  return (
    <input type={type} id={id} name={name} value={value} placeholder={placeholder} className={`input input--${styles}`} required={isRequired} disabled={isDisabled} />
  )
}

export default Input