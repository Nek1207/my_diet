import React from "react"


const Button = ( { title, styles, status, specialStyles } ) => {
  const buttonStatus = status
  return (
    <button className={`button button--${styles} ${specialStyles}`}>{title}</button>
  )
}

export default Button