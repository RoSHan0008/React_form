import React from 'react'
import "./Style.css"

const Button = ({Name}) => {
  return (
    <div>
      <button className='button'>{Name}</button>
    </div>
  )
}

export default Button
