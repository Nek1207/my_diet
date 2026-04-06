import React from "react"


const Button = ( { title, styles, status } ) => {
  const buttonStatus = status
  return (
    <button className={`button button--${styles}`}>{title}</button>
  )
}

export default Button