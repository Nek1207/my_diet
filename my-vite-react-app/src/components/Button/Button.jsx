import React from "react"
import { IoIosSettings } from "react-icons/io"
import "./../Button/Button.scss"
const Button = ( { title, styles, status, specialStyles } ) => {
  const buttonStatus = status
  return (
    <button className={`button button--${styles} ${specialStyles}`}>
      {status === "calculate" && <IoIosSettings />}
      {title}
      </button>
  )
}
export default Button

