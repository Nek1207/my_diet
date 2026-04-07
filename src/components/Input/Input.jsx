import React from "react"

import account from "./../../assets/input/input_account.svg"
import calendar from "./../../assets/input/input_calendar.svg"
import email from "./../../assets/input/input_email.svg"
import energy from "./../../assets/input/input_energy.svg"
import felame from "./../../assets/input/input_female.svg"
import gender from "./../../assets/input/input_gender.svg"
import lock from "./../../assets/input/input_lock.svg"
import male from "./../../assets/input/input_male.svg"
import pen from "./../../assets/input/input_pen.svg"
import scale from "./../../assets/input/input_scale.svg"
import tableware from "./../../assets/input/input_tableware.svg"
import target from "./../../assets/input/input_target.svg"
import weight from "./../../assets/input/input_weight.svg"

import add from "./../../assets/functional/func_add.svg"
import close from "./../../assets/functional/func_close.svg"
import drop from "./../../assets/functional/func_drop.svg"
import hidden from "./../../assets/functional/func_hidden.svg"
import info from "./../../assets/functional/func_info.svg"
import option from "./../../assets/functional/func_option.svg"
import shown from "./../../assets/functional/func_shown.svg"

const Input = ( { type, id, name, placeholder, value, styles, status, isRequired, isDisabled } ) => {
  const InputStatus = status
  const InputName = name

  if (InputName === "password") {
    return (
      <>
        <img className="input__icon" src={lock} alt="lock" />
        <img className="input__icon" src={hidden} alt="hidden" />
        <img className="input__icon" src={shown} alt="shown" />
        <input type={type} id={id} name={name} value={value} placeholder={placeholder} className={`input input--${styles}`} required={isRequired} disabled={isDisabled} />
      </>
    )
  }
  if (InputName === "login") {
    return (
      <>
        <img className="input__icon" src={account} alt="account" />
        <input type={type} id={id} name={name} value={value} placeholder={placeholder} className={`input input--${styles}`} required={isRequired} disabled={isDisabled} />
      </>
    ) 
  }
  if (InputName === "email") {
    return (
    <>
      <img className="input__icon" src={email} alt="email" />
        <input type={type} id={id} name={name} value={value} placeholder={placeholder} className={`input input--${styles}`} required={isRequired} disabled={isDisabled} />
    </>
    )
  }
  if (InputName === "age") {
    return (
    <>
      <img className="input__icon" src={calendar} alt="age" />
        <input type={type} id={id} name={name} value={value} placeholder={placeholder} className={`input input--${styles}`} required={isRequired} disabled={isDisabled} />
    </>
    )
  }
  if (InputName === "weight") {
    return (
      <>
        <img className="input__icon" src={weight} alt="weight" />
        <input type={type} id={id} name={name} value={value} placeholder={placeholder} className={`input input--${styles}`} required={isRequired} disabled={isDisabled} />
      </>
    )
  }
  if (InputName === "scale") {
    return (
      <>
        <img className="input__icon" src={scale} alt="scale" />
        <input type={type} id={id} name={name} value={value} placeholder={placeholder} className={`input input--${styles}`} required={isRequired} disabled={isDisabled} />
      </>
    )
  }
  if (InputName === "energy") {
    return (
      <>
        <img className="input__icon" src={drop} alt="drop" />
        <img className="input__icon" src={energy} alt="energy" />
        <input type={type} id={id} name={name} value={value} placeholder={placeholder} className={`input input--${styles}`} required={isRequired} disabled={isDisabled} />
      </>
    )
  }
  if (InputName === "target") {
    return (
      <>
        <img className="input__icon" src={drop} alt="drop" />
        <img className="input__icon" src={target} alt="target" />
        <input type={type} id={id} name={name} value={value} placeholder={placeholder} className={`input input--${styles}`} required={isRequired} disabled={isDisabled} />
      </>
    ) 
  }


  return (
    <input type={type} id={id} name={name} value={value} placeholder={placeholder} className={`input input--${styles}`} required={isRequired} disabled={isDisabled} />
  )
}

export default Input