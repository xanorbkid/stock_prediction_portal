import React from 'react'

const Button = (props) => {
  return (
    <>
    <a href="" className={`btn ${props.class}`}>{props.text}</a>
    
    {/* <div>Button</div> */}
    </>
  )
}

export default Button